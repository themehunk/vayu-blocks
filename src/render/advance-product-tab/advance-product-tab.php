<?php

class Advance_Product_Tab {

      /**
		 * Member Variable
		 *
		 * @var object instance
		 */
		private static $instance;

		/**
		 * Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}
        /**
		 * Constructor
		 */
		public function __construct(){

            add_action( 'wp_enqueue_scripts',array( $this, 'front_scripts' ));
            add_action('wp_ajax_load_category_products', array( $this,'load_category_products'));
            add_action('wp_ajax_nopriv_load_category_products',array( $this,'load_category_products'));

        }


        public function front_scripts(){

            wp_enqueue_script( 'advance-product-tab-script', THEMEHUNK_BLOCKS_URL .'/src/render/advance-product-tab/js/advance-product-tab.js', array( 'jquery' ), '1.0.0', true );
            wp_localize_script(
                'advance-product-tab-script',
                'advance_product_tab_ajax',
                array(
                    'ajax_url' => admin_url('admin-ajax.php'),
                )
            );
        }

        public function render_callback( $attr ) {

        $block_content = '
        <div id="wp-block-th-advance-product-tag-' . esc_attr($attr['uniqueID']) . '" class="wp-block-themehunk-blocks-advance-product wp-block-th-advance-product-tag-' . esc_attr($attr['uniqueID']) . '  align' . (isset($attr['align']) ? esc_attr($attr['align']) : '') . '">
            <div class="th-product-block-wrapper">
                <div class="wp-block-th-blocks-overlay"></div>
                <div class="th-product-block-cat-filter">
                    <ul class="category-tabs">';
                        if (isset($attr['productCategories']) && is_array($attr['productCategories'])) {
                            foreach ($attr['productCategories'] as $category) {

                                $block_content .= '
                                    <li class="tab-link" cat_id="' . (isset($category['value']) ? esc_html($category['value']) : '') . '" cat_slug="' . (isset($category['slug']) ? esc_html($category['slug']) : '') . '">
                                        ' . (isset($category['label']) ? esc_html($category['label']) : '') . '
                                    </li>';
                            }
                        }
                        $block_content .= '
                    </ul>
                </div>
    
                <div class="th-product-block-product-content">
                    <div class="th-product-block-product-item-wrap">' 
                    .$this->get_fetch_product($attr).
                    '</div>
                    <div class="th-pagination">
                        <button class="prev-page" disabled>
                            <span class="dashicons dashicons-arrow-left-alt2"></span>
                        </button>
                        <button class="next-page" disabled>
                            <span class="dashicons dashicons-arrow-right-alt2"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>';
    
    return $block_content;

   }


   public function get_fetch_product($attr){

    $args = array(
        'status' => 'publish',
        'visibility' => 'catalog',
    );

    //product per page

    $device_type = $this->device_check();

    if ($device_type === 'tablet' && isset($attr['productShowTablet'])) {

        $args['posts_per_page'] = $attr['productShowTablet'];

    } elseif ($device_type === 'mobile' && isset($attr['productShowMobile'])) {

        $args['posts_per_page'] = $attr['productShowMobile'];

    } else {

        $args['posts_per_page'] = isset($attr['productShow']) ? $attr['productShow'] : 4;

    }

    // Selected category
    if (isset($attr['productCategories']) && is_array($attr['productCategories'])) {
        $term_slugs = array();
        foreach ($attr['productCategories'] as $category) {
            if (isset($category['slug'])) {
                $term_slugs[] = sanitize_title($category['slug']);
            }
        }

        if (!empty($term_slugs)) {
            $args['tax_query'] = array(
                array(
                    'taxonomy' => 'product_cat',
                    'field' => 'slug',
                    'terms' => $term_slugs,
                ),
            );
        }
    }

    if (isset($attr['productOrder'])) {

        switch ($attr['productOrder']) {

            case 'desc':
                
                $args['order'] = 'desc';

                break;
               
            default:
                    
                $args['order'] = 'asc';
    
                break;    
            
        }
    }
     
    //product type
    if (isset($attr['productType'])) {

        switch ($attr['productType']) {

            case 'sale':
                // Fetch sale products
                add_filter( 'woocommerce_product_data_store_cpt_get_products_query', array( $this, 'handle_sale_products_query_var' ), 10, 2 );
                break;

            case 'featured':
                // Fetch featured products
                $args['featured'] = true;

                break;

            case 'manual':

                $manualProductIDs = array();

                    if (isset($attr['manualProduct']) && is_array($attr['manualProduct'])) {
                        foreach ($attr['manualProduct'] as $product) {
                            if (isset($product['value'])) {
                                $manualProductIDs[] = absint($product['value']);
                            }
                        }
                    }

                    $args['include'] = $manualProductIDs;
    
                break;    
            default:
                // No specific product type specified
                break;
        }
    }

    //exclude product
    if (isset($attr['excludeProduct']) && is_array($attr['excludeProduct'])) {
        $excludeProductProductIDs = array();
        foreach ($attr['excludeProduct'] as $product) {
            if (isset($product['value'])) {
                $excludeProductProductIDs[] = absint($product['value']);
            }
        }
        $args['exclude'] = $excludeProductProductIDs;
    }
   
    //orderby
    if (isset($attr['productOrderby'])) {

        switch ($attr['productOrderby']) {

            case 'date':
                
                $args['orderby'] = 'date';
                break;

            case 'price':
                
                $args['orderby'] = 'meta_value_num';
                $args['meta_key'] = '_price';

                break;
            case 'popularity':
                    
                $args['orderby'] = 'meta_value_num';
                $args['meta_key'] = 'total_sales';
    
                 break; 
            case 'rating':
                    
                $args['orderby'] = 'meta_value_num';
                $args['meta_key'] = '_wc_average_rating';
    
                 break; 
             case 'menu-order':
                    
                $args['orderby'] = 'menu_order';
        
                break;    
            default:
                // No specific product type specified
                break;
        }
    }


    $products = wc_get_products($args);
    $product_content = '';
    
    // Check if 'template' key exists
    // Default template array
    $default_template = [
        "image",
        "category",
        "title",
        "price",
        "rating",
        "button"
    ];

    // Get the 'template' attribute from $attr or use the default template
    $template = isset($attr['template']) && is_array($attr['template']) ? $attr['template'] : $default_template;

    foreach ($products as $product) {
        $product_content .= '
            <div class="th-product-item" key="' . esc_attr($product->get_id()) . '">
                <div class="th-product-block-content-wrap">';

        foreach ($template as $element) {
            switch ($element) {
                case 'image':
                    // Image
                    $displayFeaturedImage = isset($attr['displayFeaturedImage']) ? $attr['displayFeaturedImage'] : true;
                    if($displayFeaturedImage):
                    $product_content .= '<div class="th-product-image">';

                    // Sale
                    $sale = get_post_meta($product->get_id(), '_sale_price', true);

                    if ($sale && empty($attr['showSale'])) {
                        $product_content .= '<div class="th-product-sale ' . (isset($attr['saleStyle']) ? esc_attr($attr['saleStyle']) : '') . ' ' . (isset($attr['saleDesign']) ? esc_attr($attr['saleDesign']) : '') . ' ' . (isset($attr['salePosition']) ? esc_attr($attr['salePosition']) : '') . '"> ';

                        if (isset($attr['saleDesign']) && $attr['saleDesign'] === 'saledigit' && $product->get_regular_price() && $product->get_sale_price()) {
                            $discountPercentage = round((($product->get_regular_price() - $product->get_sale_price()) / $product->get_regular_price()) * 100);
                            $product_content .= '<span class="discount-percentage">' . (float) $discountPercentage . __( '%', 'themehunk-blocks' ) . '</span>';
                        } else {
                            $product_content .= '<span class="discount-percentage">' . (isset($attr['saleText']) ? esc_html($attr['saleText']) : __( 'sale', 'themehunk-blocks' )) . '</span>';
                        }

                        $product_content .= '</div>';
                    }

                    $product_content .= '<a href="' . esc_url($product->get_permalink()) . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                        ' . get_the_post_thumbnail($product->get_id(), 'woocommerce_thumbnail') . '
                    </a>';

                    $product_content .= '</div>';

                    endif;
                    break;

                case 'category':
                    // Category
                    $displayCategory = isset($attr['displayCategory']) ? $attr['displayCategory'] : true;
                    if($displayCategory):
                    $product_content .= '<div class="th-product-cat">';
                    foreach ($product->get_category_ids() as $category_id) {
                        $category = get_term($category_id, 'product_cat');
                        $product_content .= '<a href="' . esc_url(get_category_link($category_id)) . '">' . esc_html($category->name) . '</a>';
                    }
                    $product_content .= '</div>';
                    endif;
                    break;

                case 'title':
                    // Title
                    $displayTitle = isset($attr['displayTitle']) ? $attr['displayTitle'] : true;
                    if($displayTitle):
                    $product_content .= '<' . (isset($attr['prouctTitleTag']) ? esc_html($attr['prouctTitleTag']) : 'h3') . ' class="th-product-title">
                        <a href="' . esc_url($product->get_permalink()) . '">' . esc_html($product->get_name()) . '</a>   
                    </' . (isset($attr['prouctTitleTag']) ? esc_html($attr['prouctTitleTag']) : 'h3') . '>';
                    endif;
                    break;

                case 'price':
                    // Price
                    $displayPrice = isset($attr['displayPrice']) ? $attr['displayPrice'] : true;
                    if($displayPrice):
                    $product_content .= '<div class="th-product-price">
                        ' . $product->get_price_html() . '
                    </div>';
                    endif;
                    break;

                case 'rating':
                    // Rating
                    $displayRating = isset($attr['displayRating']) ? $attr['displayRating'] : true;
                    $hideRating = isset($attr['hideRating']) ? $attr['hideRating'] : true;
                    if($displayRating && $hideRating):
                    $product_content .= '<div class="th-product-rating">
                        ' . wc_get_rating_html($product->get_average_rating()) . '
                    </div>';
                    endif;
                    break;

                case 'button':
                    // Button
                    $displayButton = isset($attr['displayButton']) ? $attr['displayButton'] : true;
                    if($displayButton):
                    $product_content .= '<div class="th-product-add-btn">
                        ' . $this->add_to_cart_url($product) . '
                    </div>';
                    endif;
                    break;

                default:
                    break;
            }
        }

        $product_content .= '</div></div>';
    }

    return $product_content;
  }


  public function add_to_cart_url($product){
    $args = array();
    if ( $product ){
        $url = $product->add_to_cart_url();
        $label = $product->add_to_cart_text();
        $class = $product->is_purchasable() && $product->is_in_stock() ? 'add_to_cart_button' : '';
        $attributes = array(
            'data-product_id'  => $product->get_id(),
            'data-product_sku' => $product->get_sku(),
            'aria-label'       => $product->add_to_cart_description(),
            'rel'              => 'nofollow',
        );

        $args = apply_filters( 'woocommerce_loop_add_to_cart_args', array(
            'quantity'   => isset( $args['quantity'] ) ? $args['quantity'] : 1,
            'class'      => isset( $args['class'] ) ? $args['class'] : $class,
            'attributes' => $attributes,
            'product'    => $product,
        ) );

        if ( isset( $args['attributes']['aria-label'] ) ) {
            $args['attributes']['aria-label'] = wp_strip_all_tags( $args['attributes']['aria-label'] );
        }

        $button = sprintf(
            '<a href="%s" %s>%s</a>',
            esc_url( $url ),
            wc_implode_html_attributes( $args['attributes'] ),
            esc_html( $label )
        );

        if ( $product->supports( 'ajax_add_to_cart' ) && $product->is_purchasable() && $product->is_in_stock() ) {
            $args['class'] = isset( $args['class'] ) ? $args['class'] : '';
            $args['class'] .= ' ajax_add_to_cart';
            $button = sprintf(
                '<a href="%s" data-quantity="%s" class="%s" %s>%s</a>',
                esc_url( $url ),
                esc_attr( $args['quantity'] ),
                esc_attr( $args['class'] ),
                wc_implode_html_attributes( $args['attributes'] ),
                esc_html( $label )
            );
        }

        return apply_filters( 'woocommerce_loop_add_to_cart_link', $button, $product, $args );
    }
}

function handle_sale_products_query_var( $query) {
	
		$query['meta_query'][] = array(
			'key' => '_sale_price',
			'value' => 0,
			'compare' => '>',
			'type' => 'NUMERIC',
		);
	
	return $query;
}


public function device_check() {
    $user_agent = $_SERVER['HTTP_USER_AGENT'];

    $mobile_agents = array(
        'Mobile',
        'Android',
        'Silk/',
        'Kindle',
        'BlackBerry',
        'Opera Mini',
        'Opera Mobi'
    );

    $tablet_agents = array(
        'iPad',
        'Android Tablet',
        'Kindle Fire',
        'Silk'
    );

    $is_mobile = false;
    $is_tablet = false;

    foreach ($mobile_agents as $agent) {
        if (stripos($user_agent, $agent) !== false) {
            $is_mobile = true;
            break;
        }
    }

    foreach ($tablet_agents as $agent) {
        if (stripos($user_agent, $agent) !== false) {
            $is_tablet = true;
            break;
        }
    }

    if ($is_tablet) {
        return 'tablet';
    } elseif ($is_mobile) {
        return 'mobile';
    } else {
        return 'desktop';
    }
}


public function load_category_products(){

    $category_id = isset($_POST['category_id']) ? sanitize_text_field($_POST['category_id']) : '';
    
    $product_content = $this->get_fetch_product(array(
        'productCategories' => array(
            array('slug' => $category_id)
        )
       )
    );
    
    echo $product_content;

    exit;

}

}