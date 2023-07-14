<?php 

function advance_product_tab_style($attr){ 

	$css = '';

    if(isset( $attr['uniqueID'] )){

        if (isset($attr['productCol'])) {

        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-item-wrap{";
            
        $css .= "grid-template-columns:repeat({$attr['productCol']},1fr)";

        $css .= "}";

        }

        //tab

        $showTab = isset($attr['showTab']) ? $attr['showTab'] : true;
        if($showTab):
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-cat-filter ul.category-tabs li{";
        $css .= isset( $attr['tabColor'] ) ? "color:{$attr['tabColor'] };" : 'color:#111;';
        $css .= isset( $attr['tabBgColor'] ) ? "background:{$attr['tabBgColor'] };" : 'background:transparent;';
        $css .= isset( $attr['tabborderType'] ) ? "border-style:{$attr['tabborderType'] };" : '';
        $css .= isset( $attr['tabBorderColor'] ) ? "border-color:{$attr['tabBorderColor'] };" : '';
        //tabborder-width
		if (isset($attr['tabBorderWidthType']) && 'unlinked' === $attr['tabBorderWidthType']) {
			$tabBorderWidthUnit = isset($attr['tabBorderWidthUnit']) ? $attr['tabBorderWidthUnit'] : 'px';
			$tabBorderWidthTop = isset($attr['tabBorderWidthTop']) ? $attr['tabBorderWidthTop'] : 0;
			$tabBorderWidthRight = isset($attr['tabBorderWidthRight']) ? $attr['tabBorderWidthRight'] : 0;
			$tabBorderWidthBottom = isset($attr['tabBorderWidthBottom']) ? $attr['tabBorderWidthBottom'] : 0;
			$tabBorderWidthLeft = isset($attr['tabBorderWidthLeft']) ? $attr['tabBorderWidthLeft'] : 0;
			$css .= "border-top-width: {$tabBorderWidthTop}{$tabBorderWidthUnit}; 
			border-right-width: {$tabBorderWidthRight}{$tabBorderWidthUnit}; 
			border-bottom-width: {$tabBorderWidthBottom}{$tabBorderWidthUnit}; 
			border-left-width: {$tabBorderWidthLeft}{$tabBorderWidthUnit}; 
		   ";
		} else {
			$tabBorderWidth = isset($attr['tabBorderWidth']) ? $attr['tabBorderWidth'] : 0;
			$tabBorderWidthUnit = isset($attr['tabBorderWidthUnit']) ? $attr['tabBorderWidthUnit'] : 'px';
			$css .= "border-width: {$tabBorderWidth}{$tabBorderWidthUnit}; ";
		}
        
        //tabBorder-radius
		if (isset($attr['tabBorderRadiusType']) && 'unlinked' === $attr['tabBorderRadiusType']) {
			$tabBorderRadiusUnit = isset($attr['tabBorderRadiusUnit']) ? $attr['tabBorderRadiusUnit'] : 'px';
			$tabBorderRadiusTop = isset($attr['tabBorderRadiusTop']) ? $attr['tabBorderRadiusTop'] : 0;
			$tabBorderRadiusRight = isset($attr['tabBorderRadiusRight']) ? $attr['tabBorderRadiusRight'] : 0;
			$tabBorderRadiusBottom = isset($attr['tabBorderRadiusBottom']) ? $attr['tabBorderRadiusBottom'] : 0;
			$tabBorderRadiusLeft = isset($attr['tabBorderRadiusLeft']) ? $attr['tabBorderRadiusLeft'] : 0;
			$css .= "border-top-right-radius: {$tabBorderRadiusTop}{$tabBorderRadiusUnit}; 
            border-top-left-radius: {$tabBorderRadiusRight}{$tabBorderRadiusUnit};
            border-bottom-right-radius: {$tabBorderRadiusBottom}{$tabBorderRadiusUnit};
            border-bottom-left-radius: {$tabBorderRadiusLeft}{$tabBorderRadiusUnit};
			 ";
		} else {
			$tabBorderRadius = isset($attr['tabBorderRadius']) ? $attr['tabBorderRadius'] : 0;
			$tabBorderRadiusUnit = isset($attr['tabBorderRadiusUnit']) ? $attr['tabBorderRadiusUnit'] : 'px';
			$css .= "border-radius: {$tabBorderRadius}{$tabBorderRadiusUnit};";
		}

        //tabPadding
		if (isset($attr['tabPaddingType']) && 'unlinked' === $attr['tabPaddingType']) {
			$tabPaddingUnit = isset($attr['tabPaddingUnit']) ? $attr['tabPaddingUnit'] : 'px';
			$tabPaddingTop = isset($attr['tabPaddingTop']) ? $attr['tabPaddingTop'] : 0;
			$tabPaddingRight = isset($attr['tabPaddingRight']) ? $attr['tabPaddingRight'] : 0;
			$tabPaddingBottom = isset($attr['tabPaddingBottom']) ? $attr['tabPaddingBottom'] : 0;
			$tabPaddingLeft = isset($attr['tabPaddingLeft']) ? $attr['tabPaddingLeft'] : 0;
			$css .= "padding-top: {$tabPaddingTop}{$tabPaddingUnit}; 
			padding-right: {$tabPaddingRight}{$tabPaddingUnit}; 
			padding-bottom: {$tabPaddingBottom}{$tabPaddingUnit}; 
			padding-left: {$tabPaddingLeft}{$tabPaddingUnit}; 
		    ";
		} else {
			$tabPadding = isset($attr['tabPadding']) ? $attr['tabPadding'] : 10;
			$tabPaddingUnit = isset($attr['tabPaddingUnit']) ? $attr['tabPaddingUnit'] : 'px';
			$css .= "padding: {$tabPadding}{$tabPaddingUnit};";
		}

        //tabMargin
		if (isset($attr['tabMarginType']) && 'unlinked' === $attr['tabMarginType']) {
			$tabMarginUnit = isset($attr['tabMarginUnit']) ? $attr['tabMarginUnit'] : 'px';
			$tabMarginTop = isset($attr['tabMarginTop']) ? $attr['tabMarginTop'] : 8;
			$tabMarginBottom = isset($attr['tabMarginBottom']) ? $attr['tabMarginBottom'] : 8;
            $tabMarginLeft = isset($attr['tabMarginLeft']) ? $attr['tabMarginLeft'] : 8;
            $tabMarginRight = isset($attr['tabMarginRight']) ? $attr['tabMarginRight'] : 8;
			$css .= "
            margin-top: {$tabMarginTop}{$tabMarginUnit}; 
			margin-bottom: {$tabMarginBottom}{$tabMarginUnit}; 
			margin-left: {$tabMarginLeft}{$tabMarginUnit}; 
			margin-right: {$tabMarginRight}{$tabMarginUnit}; 
		    ";
		} else {
			$tabMargin = isset($attr['tabMargin']) ? $attr['tabMargin'] : 8;
			$tabMarginUnit = isset($attr['tabMarginUnit']) ? $attr['tabMarginUnit'] : 'px';
			$css .= " margin: {$tabMargin}{$tabMarginUnit}; 
		   ";
		}

        
        $css .= "}";

        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-cat-filter ul.category-tabs li:hover,.wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-cat-filter ul.category-tabs li.active{";
        $css .= isset( $attr['tabColorHvr'] ) ? "color:{$attr['tabColorHvr'] };" : 'color:#111;';
        $css .= isset( $attr['tabBgColorHvr'] ) ? "background:{$attr['tabBgColorHvr'] };" : 'background:transparent;';
        $css .= isset( $attr['tabBorderColorHvr'] ) ? "border-color:{$attr['tabBorderColorHvr'] };" : '';
        $css .= "}";
        endif;


        //end desktop view
        // tablet view
        $css .= "@media only screen and (min-width: 768px) and (max-width: 1023px) {";
        
            if (isset($attr['productCol'])) {

                $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-item-wrap{";
                    
                $css .= "grid-template-columns:repeat({$attr['productColTablet']},1fr)";
        
                $css .= "}";
        
                }   

                if($showTab):
                    $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-cat-filter ul.category-tabs li{";
                     //tabborder-width
                        if (isset($attr['tabBorderWidthTypeTablet']) && 'unlinked' === $attr['tabBorderWidthTypeTablet']) {
                            $tabBorderWidthUnitTablet = isset($attr['tabBorderWidthUnitTablet']) ? $attr['tabBorderWidthUnitTablet'] : 'px';
                            $tabBorderWidthTopTablet = isset($attr['tabBorderWidthTopTablet']) ? $attr['tabBorderWidthTopTablet'] : 0;
                            $tabBorderWidthRightTablet = isset($attr['tabBorderWidthRightTablet']) ? $attr['tabBorderWidthRightTablet'] : 0;
                            $tabBorderWidthBottomTablet = isset($attr['tabBorderWidthBottomTablet']) ? $attr['tabBorderWidthBottomTablet'] : 0;
                            $tabBorderWidthLeftTablet = isset($attr['tabBorderWidthLeftTablet']) ? $attr['tabBorderWidthLeftTablet'] : 0;
                            $css .= "border-top-width: {$tabBorderWidthTopTablet}{$tabBorderWidthUnit}; 
                            border-right-width: {$tabBorderWidthRightTablet}{$tabBorderWidthUnitTablet}; 
                            border-bottom-width: {$tabBorderWidthBottomTablet}{$tabBorderWidthUnitTablet}; 
                            border-left-width: {$tabBorderWidthLeftTablet}{$tabBorderWidthUnit}; 
                        ";
                        } else {
                            $tabBorderWidthTablet = isset($attr['tabBorderWidthTablet']) ? $attr['tabBorderWidthTablet'] : 0;
                            $tabBorderWidthUnit = isset($attr['tabBorderWidthUnit']) ? $attr['tabBorderWidthUnit'] : 'px';
                            $css .= "border-width: {$tabBorderWidthTablet}{$tabBorderWidthUnit}; ";
                        }
                        
                        //tabBorder-radius
                        if (isset($attr['tabBorderRadiusTypeTablet']) && 'unlinked' === $attr['tabBorderRadiusTypeTablet']) {
                            $tabBorderRadiusUnit = isset($attr['tabBorderRadiusUnit']) ? $attr['tabBorderRadiusUnit'] : 'px';
                            $tabBorderRadiusTopTablet = isset($attr['tabBorderRadiusTopTablet']) ? $attr['tabBorderRadiusTopTablet'] : 0;
                            $tabBorderRadiusRightTablet = isset($attr['tabBorderRadiusRightTablet']) ? $attr['tabBorderRadiusRightTablet'] : 0;
                            $tabBorderRadiusBottomTablet = isset($attr['tabBorderRadiusBottomTablet']) ? $attr['tabBorderRadiusBottomTablet'] : 0;
                            $tabBorderRadiusLeftTablet = isset($attr['tabBorderRadiusLeftTablet']) ? $attr['tabBorderRadiusLeftTablet'] : 0;
                            $css .= "border-top-right-radius: {$tabBorderRadiusTopTablet}{$tabBorderRadiusUnit}; 
                            border-top-left-radius: {$tabBorderRadiusRightTablet}{$tabBorderRadiusUnit};
                            border-bottom-right-radius: {$tabBorderRadiusBottomTablet}{$tabBorderRadiusUnit};
                            border-bottom-left-radius: {$tabBorderRadiusLeftTablet}{$tabBorderRadiusUnit};
                            ";
                        } else {
                            $tabBorderRadiusTablet = isset($attr['tabBorderRadiusTablet']) ? $attr['tabBorderRadiusTablet'] : 0;
                            $tabBorderRadiusUnit = isset($attr['tabBorderRadiusUnit']) ? $attr['tabBorderRadiusUnit'] : 'px';
                            $css .= "border-radius: {$tabBorderRadiusTablet}{$tabBorderRadiusUnit};";
                        }

                        //tabPadding
                        if (isset($attr['tabPaddingTypeTablet']) && 'unlinked' === $attr['tabPaddingTypeTablet']) {
                            $tabPaddingUnit = isset($attr['tabPaddingUnit']) ? $attr['tabPaddingUnit'] : 'px';
                            $tabPaddingTopTablet = isset($attr['tabPaddingTopTablet']) ? $attr['tabPaddingTopTablet'] : 0;
                            $tabPaddingRightTablet = isset($attr['tabPaddingRightTablet']) ? $attr['tabPaddingRightTablet'] : 0;
                            $tabPaddingBottomTablet = isset($attr['tabPaddingBottomTablet']) ? $attr['tabPaddingBottomTablet'] : 0;
                            $tabPaddingLeftTablet = isset($attr['tabPaddingLeftTablet']) ? $attr['tabPaddingLeftTablet'] : 0;
                            $css .= "padding-top: {$tabPaddingTopTablet}{$tabPaddingUnit}; 
                            padding-right: {$tabPaddingRightTablet}{$tabPaddingUnit}; 
                            padding-bottom: {$tabPaddingBottomTablet}{$tabPaddingUnit}; 
                            padding-left: {$tabPaddingLeftTablet}{$tabPaddingUnit}; 
                            ";
                        } else {
                            $tabPaddingTablet = isset($attr['tabPaddingTablet']) ? $attr['tabPadding'] : 10;
                            $tabPaddingUnit = isset($attr['tabPaddingUnit']) ? $attr['tabPaddingUnit'] : 'px';
                            $css .= "padding: {$tabPaddingTablet}{$tabPaddingUnit};";
                        }

                        //tabMargin
                        if (isset($attr['tabMarginTypeTablet']) && 'unlinked' === $attr['tabMarginType']) {
                            $tabMarginUnit = isset($attr['tabMarginUnit']) ? $attr['tabMarginUnit'] : 'px';
                            $tabMarginTop = isset($attr['tabMarginTopTablet']) ? $attr['tabMarginTopTablet'] : 8;
                            $tabMarginBottom = isset($attr['tabMarginBottomTablet']) ? $attr['tabMarginBottomTablet'] : 8;
                            $tabMarginLeft = isset($attr['tabMarginLeftTablet']) ? $attr['tabMarginLeftTablet'] : 8;
                            $tabMarginRight = isset($attr['tabMarginRightTablet']) ? $attr['tabMarginRightTablet'] : 8;
                            $css .= "
                            margin-top: {$tabMarginTopTablet}{$tabMarginUnit}; 
                            margin-bottom: {$tabMarginBottomTablet}{$tabMarginUnit}; 
                            margin-left: {$tabMarginLeftTablet}{$tabMarginUnit}; 
                            margin-right: {$tabMarginRightTablet}{$tabMarginUnit}; 
                            ";
                        } else {
                            $tabMarginTablet = isset($attr['tabMarginTablet']) ? $attr['tabMarginTablet'] : 8;
                            $tabMarginUnit = isset($attr['tabMarginUnit']) ? $attr['tabMarginUnit'] : 'px';
                            $css .= " margin: {$tabMarginTablet}{$tabMarginUnit}; 
                        ";
                        }
                    $css .= "}";
                endif;

        $css .= "}";
        
        // mobile view
        $css .= "@media only screen and (max-width: 767px){";
             
        if (isset($attr['productCol'])) {

            $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-item-wrap{";
                
            $css .= "grid-template-columns:repeat({$attr['productColMobile']},1fr)";
    
            $css .= "}";
    
            }

            if($showTab):
                $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-cat-filter ul.category-tabs li{";
                 //tabborder-width
                    if (isset($attr['tabBorderWidthTypeMobile']) && 'unlinked' === $attr['tabBorderWidthTypeMobile']) {
                        $tabBorderWidthUnitMobile = isset($attr['tabBorderWidthUnitMobile']) ? $attr['tabBorderWidthUnitMobile'] : 'px';
                        $tabBorderWidthTopMobile = isset($attr['tabBorderWidthTopMobile']) ? $attr['tabBorderWidthTopMobile'] : 0;
                        $tabBorderWidthRightMobile = isset($attr['tabBorderWidthRightMobile']) ? $attr['tabBorderWidthRightMobile'] : 0;
                        $tabBorderWidthBottomMobile = isset($attr['tabBorderWidthBottomMobile']) ? $attr['tabBorderWidthBottomMobile'] : 0;
                        $tabBorderWidthLeftMobile = isset($attr['tabBorderWidthLeftMobile']) ? $attr['tabBorderWidthLeftMobile'] : 0;
                        $css .= "border-top-width: {$tabBorderWidthTopMobile}{$tabBorderWidthUnit}; 
                        border-right-width: {$tabBorderWidthRightMobile}{$tabBorderWidthUnitMobile}; 
                        border-bottom-width: {$tabBorderWidthBottomMobile}{$tabBorderWidthUnitMobile}; 
                        border-left-width: {$tabBorderWidthLeftMobile}{$tabBorderWidthUnit}; 
                    ";
                    } else {
                        $tabBorderWidthMobile = isset($attr['tabBorderWidthMobile']) ? $attr['tabBorderWidthMobile'] : 0;
                        $tabBorderWidthUnit = isset($attr['tabBorderWidthUnit']) ? $attr['tabBorderWidthUnit'] : 'px';
                        $css .= "border-width: {$tabBorderWidthMobile}{$tabBorderWidthUnit}; ";
                    }
                    
                    //tabBorder-radius
                    if (isset($attr['tabBorderRadiusTypeMobile']) && 'unlinked' === $attr['tabBorderRadiusTypeMobile']) {
                        $tabBorderRadiusUnit = isset($attr['tabBorderRadiusUnit']) ? $attr['tabBorderRadiusUnit'] : 'px';
                        $tabBorderRadiusTopMobile = isset($attr['tabBorderRadiusTopMobile']) ? $attr['tabBorderRadiusTopMobile'] : 0;
                        $tabBorderRadiusRightMobile = isset($attr['tabBorderRadiusRightMobile']) ? $attr['tabBorderRadiusRightMobile'] : 0;
                        $tabBorderRadiusBottomMobile = isset($attr['tabBorderRadiusBottomMobile']) ? $attr['tabBorderRadiusBottomMobile'] : 0;
                        $tabBorderRadiusLeftMobile = isset($attr['tabBorderRadiusLeftMobile']) ? $attr['tabBorderRadiusLeftMobile'] : 0;
                        $css .= "border-top-right-radius: {$tabBorderRadiusTopMobile}{$tabBorderRadiusUnit}; 
                        border-top-left-radius: {$tabBorderRadiusRightMobile}{$tabBorderRadiusUnit};
                        border-bottom-right-radius: {$tabBorderRadiusBottomMobile}{$tabBorderRadiusUnit};
                        border-bottom-left-radius: {$tabBorderRadiusLeftMobile}{$tabBorderRadiusUnit};
                        ";
                    } else {
                        $tabBorderRadiusMobile = isset($attr['tabBorderRadiusMobile']) ? $attr['tabBorderRadiusMobile'] : 0;
                        $tabBorderRadiusUnit = isset($attr['tabBorderRadiusUnit']) ? $attr['tabBorderRadiusUnit'] : 'px';
                        $css .= "border-radius: {$tabBorderRadiusMobile}{$tabBorderRadiusUnit};";
                    }

                    //tabPadding
                    if (isset($attr['tabPaddingTypeMobile']) && 'unlinked' === $attr['tabPaddingTypeMobile']) {
                        $tabPaddingUnit = isset($attr['tabPaddingUnit']) ? $attr['tabPaddingUnit'] : 'px';
                        $tabPaddingTopMobile = isset($attr['tabPaddingTopMobile']) ? $attr['tabPaddingTopMobile'] : 0;
                        $tabPaddingRightMobile = isset($attr['tabPaddingRightMobile']) ? $attr['tabPaddingRightMobile'] : 0;
                        $tabPaddingBottomMobile = isset($attr['tabPaddingBottomMobile']) ? $attr['tabPaddingBottomMobile'] : 0;
                        $tabPaddingLeftMobile = isset($attr['tabPaddingLeftMobile']) ? $attr['tabPaddingLeftMobile'] : 0;
                        $css .= "padding-top: {$tabPaddingTopMobile}{$tabPaddingUnit}; 
                        padding-right: {$tabPaddingRightMobile}{$tabPaddingUnit}; 
                        padding-bottom: {$tabPaddingBottomMobile}{$tabPaddingUnit}; 
                        padding-left: {$tabPaddingLeftMobile}{$tabPaddingUnit}; 
                        ";
                    } else {
                        $tabPaddingMobile = isset($attr['tabPaddingMobile']) ? $attr['tabPadding'] : 10;
                        $tabPaddingUnit = isset($attr['tabPaddingUnit']) ? $attr['tabPaddingUnit'] : 'px';
                        $css .= "padding: {$tabPaddingMobile}{$tabPaddingUnit};";
                    }

                    //tabMargin
                    if (isset($attr['tabMarginTypeMobile']) && 'unlinked' === $attr['tabMarginType']) {
                        $tabMarginUnit = isset($attr['tabMarginUnit']) ? $attr['tabMarginUnit'] : 'px';
                        $tabMarginTop = isset($attr['tabMarginTopMobile']) ? $attr['tabMarginTopMobile'] : 8;
                        $tabMarginBottom = isset($attr['tabMarginBottomMobile']) ? $attr['tabMarginBottomMobile'] : 8;
                        $tabMarginLeft = isset($attr['tabMarginLeftMobile']) ? $attr['tabMarginLeftMobile'] : 8;
                        $tabMarginRight = isset($attr['tabMarginRightMobile']) ? $attr['tabMarginRightMobile'] : 8;
                        $css .= "
                        margin-top: {$tabMarginTopMobile}{$tabMarginUnit}; 
                        margin-bottom: {$tabMarginBottomMobile}{$tabMarginUnit}; 
                        margin-left: {$tabMarginLeftMobile}{$tabMarginUnit}; 
                        margin-right: {$tabMarginRightMobile}{$tabMarginUnit}; 
                        ";
                    } else {
                        $tabMarginMobile = isset($attr['tabMarginMobile']) ? $attr['tabMarginMobile'] : 8;
                        $tabMarginUnit = isset($attr['tabMarginUnit']) ? $attr['tabMarginUnit'] : 'px';
                        $css .= " margin: {$tabMarginMobile}{$tabMarginUnit}; 
                    ";
                    }
                $css .= "}";
            endif;
        $css .= "}";


    }

    return $css;

}