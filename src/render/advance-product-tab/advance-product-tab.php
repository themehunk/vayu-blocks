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
                <'.(isset($attr['prouctTitleTag']) ? $attr['prouctTitleTag']:'h3').' class="th-product-title">
                    <a href="' . esc_url($product->get_permalink()) . '">' . esc_html($product->get_name()) . '</a>
                </div>
            </'.(isset($attr['prouctTitleTag']) ? $attr['prouctTitleTag']:'h3').'>';
    }

    return $product_content;
  }

}