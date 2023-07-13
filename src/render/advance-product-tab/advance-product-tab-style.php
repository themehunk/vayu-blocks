<?php 

function advance_product_tab_style($attr){ 

	$css = '';

    if(isset( $attr['uniqueID'] )){

        if (isset($attr['productCol'])) {

        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-item-wrap{";
            
        $css .= "grid-template-columns:repeat({$attr['productCol']},1fr)";

        $css .= "}";

        }

        // tablet view
        $css .= "@media only screen and (min-width: 768px) and (max-width: 1023px) {";
        
            if (isset($attr['productCol'])) {

                $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-item-wrap{";
                    
                $css .= "grid-template-columns:repeat({$attr['productColTablet']},1fr)";
        
                $css .= "}";
        
                }   
                
        $css .= "}";
        
        // mobile view
        $css .= "@media only screen and (max-width: 767px){";
             
        if (isset($attr['productCol'])) {

            $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-item-wrap{";
                
            $css .= "grid-template-columns:repeat({$attr['productColMobile']},1fr)";
    
            $css .= "}";
    
            }
        $css .= "}";


    }

    return $css;

}