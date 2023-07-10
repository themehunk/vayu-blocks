<?php

class Advance_Product_Tab {

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
                </div>
            </div>
        </div>';
    
    return $block_content;

   }


   public function get_fetch_product( $attr ) {

    //print_r($attr);
  
    $args = array(
        'status' => 'publish',
        'limit' => -1, 

    );

    // selected category

    if (isset($attr['productCategories']) && is_array($attr['productCategories'])) {
        $term_slugs = array();
        foreach ($attr['productCategories'] as $category) {
            if (isset($category['slug'])) {
                $term_slugs[] = sanitize_title($category['slug']);
            }
        }

        if (!empty($term_slugs)) {
            $args['category'] = $term_slugs;
        }
    }


    $products = wc_get_products($args);

    $product_content = '';

    foreach ($products as $product) {
        $product_content .= '
            <div class="th-product-item" key="' . esc_attr($product->get_id()) . '">
            <div class="th-product-block-content-wrap">';

            $product_content .= '<div class="th-product-image">';

            // sale
           $sale = get_post_meta($product->get_id() , '_sale_price', true);

           if ($sale && empty($attr['showSale'])):
            
                $product_content .= '<div class="th-product-sale ' . (isset($attr['saleStyle']) ? $attr['saleStyle'] : '') . ' ' . (isset($attr['saleDesign']) ? $attr['saleDesign'] : '') . ' ' . (isset($attr['salePosition']) ? $attr['salePosition'] : '') . '"> ';
                
                if (isset($attr['saleDesign']) && $attr['saleDesign'] == 'saledigit' && $product->get_regular_price() && $product->get_sale_price()) {
                    $discountPercentage = round((($product->get_regular_price() - $product->get_sale_price()) / $product->get_regular_price()) * 100);
                    $product_content .= '<span class="discount-percentage">' . (float) $discountPercentage . __( '%', 'themehunk-blocks' ) . '</span>';
                } else {
                    $product_content .= '<span class="discount-percentage">' . (isset($attr['saleText']) ? esc_html($attr['saleText']) : __( 'sale', 'themehunk-blocks' )) . '</span>';
                }

                $product_content .= '</div>';

            endif;   
             
            $product_content .= '<a href="' . esc_url($product->get_permalink()) . '" class="woocommerce-LoopProduct-link woocommerce-loop-product__link">
                 '.get_the_post_thumbnail( $product->get_id(), 'woocommerce_thumbnail' ).'
            </a>';
            
            $product_content .= '</div>';


            $product_content .= '<div class="th-product-cat">';
            foreach ($product->get_category_ids() as $category_id) {
                $category = get_term($category_id, 'product_cat');
                $product_content .= '<a href="' . esc_url(get_category_link($category_id)) . '">' . esc_html($category->name) . '</a>';
            }
            $product_content .= '</div>';

            $product_content .= '<'.(isset($attr['prouctTitleTag']) ? $attr['prouctTitleTag']:'h3').' class="th-product-title">
            <a href="' . esc_url($product->get_permalink()) . '">' . esc_html($product->get_name()) . '</a>   
            </'.(isset($attr['prouctTitleTag']) ? $attr['prouctTitleTag']:'h3').'>';

            $product_content .= '<div class="th-product-price">
            ' .$product->get_price_html(). '
            ';
            $product_content .= '</div>';


            $product_content .= '<div class="th-product-rating">
            ' .wc_get_rating_html($product->get_average_rating()). '
            ';
            $product_content .= '</div>';
            
            $product_content .= '<div class="th-product-add-btn">
            
            '.$this->add_to_cart_url($product).'
            
            ';

            $product_content .= '</div>';

            $product_content .= '</div>
            </div>';
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




}