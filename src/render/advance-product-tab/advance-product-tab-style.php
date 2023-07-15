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

        //product box
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-item{";
        $css .= isset( $attr['productAlign'] ) ? "text-align:{$attr['productAlign'] };" : 'text-align:center;';
        $css .= "}";
        
        // product-box-padding
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-item .th-product-block-content-wrap{";
        if (isset($attr['productPaddingType']) && 'unlinked' === $attr['productPaddingType']) {
			$productPaddingUnit = isset($attr['productPaddingUnit']) ? $attr['productPaddingUnit'] : 'px';
			$productPaddingTop = isset($attr['productPaddingTop']) ? $attr['productPaddingTop'] : 0;
			$productPaddingRight = isset($attr['productPaddingRight']) ? $attr['productPaddingRight'] : 0;
			$productPaddingBottom = isset($attr['productPaddingBottom']) ? $attr['productPaddingBottom'] : 0;
			$productPaddingLeft = isset($attr['productPaddingLeft']) ? $attr['productPaddingLeft'] : 0;
			$css .= "padding-top: {$productPaddingTop}{$productPaddingUnit}; 
			padding-right: {$productPaddingRight}{$productPaddingUnit}; 
			padding-bottom: {$productPaddingBottom}{$productPaddingUnit}; 
			padding-left: {$productPaddingLeft}{$productPaddingUnit}; 
		    ";
		} else {
			$productPadding = isset($attr['productPadding']) ? $attr['productPadding'] : 10;
			$productPaddingUnit = isset($attr['productPaddingUnit']) ? $attr['productPaddingUnit'] : 'px';
			$css .= "padding: {$productPadding}{$productPaddingUnit};";
		}
         // product-box-border-radius
        if (isset($attr['productBrdrRadiusType']) && 'unlinked' === $attr['productBrdrRadiusType']) {
			$productBrdrRadiusUnit = isset($attr['productBrdrRadiusUnit']) ? $attr['productBrdrRadiusUnit'] : 'px';
			$productBrdrRadiusTop = isset($attr['productBrdrRadiusTop']) ? $attr['productBrdrRadiusTop'] : 0;
			$productBrdrRadiusRight = isset($attr['productBrdrRadiusRight']) ? $attr['productBrdrRadiusRight'] : 0;
			$productBrdrRadiusBottom = isset($attr['productBrdrRadiusBottom']) ? $attr['productBrdrRadiusBottom'] : 0;
			$productBrdrRadiusLeft = isset($attr['productBrdrRadiusLeft']) ? $attr['productBrdrRadiusLeft'] : 0;
			$css .= "border-top-right-radius: {$productBrdrRadiusTop}{$productBrdrRadiusUnit}; 
            border-top-left-radius: {$productBrdrRadiusRight}{$productBrdrRadiusUnit};
            border-bottom-right-radius: {$productBrdrRadiusBottom}{$productBrdrRadiusUnit};
            border-bottom-left-radius: {$productBrdrRadiusLeft}{$productBrdrRadiusUnit};
			 ";
		} else {
			$productBrdrRadius = isset($attr['productBrdrRadius']) ? $attr['productBrdrRadius'] : 0;
			$productBrdrRadiusUnit = isset($attr['productBrdrRadiusUnit']) ? $attr['productBrdrRadiusUnit'] : 'px';
			$css .= "border-radius: {$productBrdrRadius}{$productBrdrRadiusUnit};";
		}

        //bg color
        $css .= isset( $attr['productboxClr'] ) ? "background:{$attr['productboxClr'] };" : '';
        //box shadow
        if (isset($attr['boxShadow'])){
			$css .= "box-shadow: ". (isset($attr['boxShadowHorizontal']) ? $attr['boxShadowHorizontal'] : '0') ."px  ". (isset($attr['boxShadowVertical']) ? $attr['boxShadowVertical'] : '0') ."px ". (isset($attr['boxShadowBlur']) ? $attr['boxShadowBlur'] : '5') ."px ". (isset($attr['boxShadowSpread']) ? $attr['boxShadowSpread'] : '1') ."px  ". hex2rgba((isset($attr['boxShadowColor']) ? $attr['boxShadowColor'] : '#fff'), (isset($attr['boxShadowColorOpacity']) ? $attr['boxShadowColorOpacity'] : '50') ) .";";
		}
        $css .= "}";

        //gap
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-block-product-item-wrap{";
        $elementGap = isset($attr['elementGap']) ? $attr['elementGap'] : 20;
        $elementGapUnit = isset($attr['elementGapUnit']) ? $attr['elementGapUnit'] : 'px';
        $css .= "grid-row-gap: {$elementGap}{$elementGapUnit};";
        $css .= "grid-column-gap: {$elementGap}{$elementGapUnit};";
        $css .= "}";

        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-item .th-product-block-content-wrap:hover{";
        $css .= isset( $attr['productboxHvrClr'] ) ? "background:{$attr['productboxHvrClr'] };" : '';
        $css .= "}"; 
        
        if(isset( $attr['catTxtColor'] )):
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-cat a{";
        $css .= "color:{$attr['catTxtColor']}";
        $css .= "}";
        endif;

        if(isset( $attr['catTxtColorHvr'] )):
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-cat a:hover{";
        $css .= "color:{$attr['catTxtColorHvr']}";
        $css .= "}";
        endif;

        if(isset( $attr['productTitleColor'] )):
            $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-title a{";
            $css .= "color:{$attr['productTitleColor']}";
            $css .= "}";
            endif;
    
            if(isset( $attr['productTitleColorHvr'] )):
            $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-title a:hover{";
            $css .= "color:{$attr['productTitleColorHvr']}";
            $css .= "}";
            endif;

            if(isset( $attr['priceColor'] )):
                $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-item .th-product-price span{";
                $css .= "color:{$attr['priceColor']}";
                $css .= "}";
                endif;
        
            if(isset( $attr['priceDelColor'] )):
                $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-price del,.wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-price del span{";
                $css .= "color:{$attr['priceDelColor']}";
                $css .= "}";
                endif;

        //button

        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-add-btn a{";
        $css .= isset( $attr['buttonTxtClr'] ) ? "color:{$attr['buttonTxtClr'] };" : 'color:#fff;';
        $css .= isset( $attr['buttonBgClr'] ) ? "background:{$attr['buttonBgClr'] };" : '';
        $css .= isset( $attr['buttonBrdrClr'] ) ? "border-color:{$attr['buttonBrdrClr'] };" : '';
        $css .= isset( $attr['buttonBrdrType'] ) ? "border-style:{$attr['buttonBrdrType'] };" : '';
        
          //border-width
		if (isset($attr['buttonborderWidthType']) && 'unlinked' === $attr['buttonborderWidthType']) {
			$buttonborderWidthUnit = isset($attr['buttonborderWidthUnit']) ? $attr['buttonborderWidthUnit'] : 'px';
			$buttonborderWidthTop = isset($attr['buttonborderWidthTop']) ? $attr['buttonborderWidthTop'] : 0;
			$buttonborderWidthRight = isset($attr['buttonborderWidthRight']) ? $attr['buttonborderWidthRight'] : 0;
			$buttonborderWidthBottom = isset($attr['buttonborderWidthBottom']) ? $attr['buttonborderWidthBottom'] : 0;
			$buttonborderWidthLeft = isset($attr['buttonborderWidthLeft']) ? $attr['buttonborderWidthLeft'] : 0;
			$css .= "border-top-width: {$buttonborderWidthTop}{$buttonborderWidthUnit}; 
			border-right-width: {$buttonborderWidthRight}{$buttonborderWidthUnit}; 
			border-bottom-width: {$buttonborderWidthBottom}{$buttonborderWidthUnit}; 
			border-left-width: {$buttonborderWidthLeft}{$buttonborderWidthUnit}; 
		   ";
		} else {
			$buttonborderWidth = isset($attr['buttonborderWidth']) ? $attr['buttonborderWidth'] : 0;
			$buttonborderWidthUnit = isset($attr['buttonborderWidthUnit']) ? $attr['buttonborderWidthUnit'] : 'px';
			$css .= "border-width: {$buttonborderWidth}{$buttonborderWidthUnit}; ";
		}
        
        //Border-radius
		if (isset($attr['buttonBrdrRadiusType']) && 'unlinked' === $attr['buttonBrdrRadiusType']) {
			$buttonBrdrRadiusUnit = isset($attr['buttonBrdrRadiusUnit']) ? $attr['buttonBrdrRadiusUnit'] : 'px';
			$buttonBrdrRadiusTop = isset($attr['buttonBrdrRadiusTop']) ? $attr['buttonBrdrRadiusTop'] : 20;
			$buttonBrdrRadiusRight = isset($attr['buttonBrdrRadiusRight']) ? $attr['buttonBrdrRadiusRight'] : 20;
			$buttonBrdrRadiusBottom = isset($attr['buttonBrdrRadiusBottom']) ? $attr['buttonBrdrRadiusBottom'] : 20;
			$buttonBrdrRadiusLeft = isset($attr['buttonBrdrRadiusLeft']) ? $attr['buttonBrdrRadiusLeft'] : 20;
			$css .= "border-top-right-radius: {$buttonBrdrRadiusTop}{$buttonBrdrRadiusUnit}; 
            border-top-left-radius: {$buttonBrdrRadiusRight}{$buttonBrdrRadiusUnit};
            border-bottom-right-radius: {$buttonBrdrRadiusBottom}{$buttonBrdrRadiusUnit};
            border-bottom-left-radius: {$buttonBrdrRadiusLeft}{$buttonBrdrRadiusUnit};
			 ";
		} else {
			$buttonBrdrRadius = isset($attr['buttonBrdrRadius']) ? $attr['buttonBrdrRadius'] : 0;
			$buttonBrdrRadiusUnit = isset($attr['buttonBrdrRadiusUnit']) ? $attr['buttonBrdrRadiusUnit'] : 'px';
			$css .= "border-radius: {$buttonBrdrRadius}{$buttonBrdrRadiusUnit};";
		}

        // product-box-padding
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-item .th-product-block-content-wrap{";
            if (isset($attr['buttonSpaceType']) && 'unlinked' === $attr['buttonSpaceType']) {
                $buttonSpaceUnit = isset($attr['buttonSpaceUnit']) ? $attr['buttonSpaceUnit'] : 'px';
                $buttonSpaceTop = isset($attr['buttonSpaceTop']) ? $attr['buttonSpaceTop'] : 0;
                $buttonSpaceRight = isset($attr['buttonSpaceRight']) ? $attr['buttonSpaceRight'] : 0;
                $buttonSpaceBottom = isset($attr['buttonSpaceBottom']) ? $attr['buttonSpaceBottom'] : 0;
                $buttonSpaceLeft = isset($attr['buttonSpaceLeft']) ? $attr['buttonSpaceLeft'] : 0;
                $css .= "padding-top: {$buttonSpaceTop}{$buttonSpaceUnit}; 
                padding-right: {$buttonSpaceRight}{$buttonSpaceUnit}; 
                padding-bottom: {$buttonSpaceBottom}{$buttonSpaceUnit}; 
                padding-left: {$buttonSpaceLeft}{$buttonSpaceUnit}; 
                ";
            } else {
                $buttonSpace = isset($attr['buttonSpace']) ? $attr['buttonSpace'] : 10;
                $buttonSpaceUnit = isset($attr['buttonSpaceUnit']) ? $attr['buttonSpaceUnit'] : 'px';
                $css .= "padding: {$buttonSpace}{$buttonSpaceUnit};";
            }
        
        $css .= "}";

        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-add-btn a:hover{";
        $css .= isset( $attr['buttonTxtClrHvr'] ) ? "color:{$attr['buttonTxtClrHvr'] };" : '';
        $css .= isset( $attr['buttonBgClrHvr'] ) ? "background:{$attr['buttonBgClrHvr'] };" : '';
        $css .= isset( $attr['buttonBrdrClrHvr'] ) ? "border-color:{$attr['buttonBrdrClrHvr'] };" : '';
        $css .= "}";




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
                            $tabMarginTopTablet = isset($attr['tabMarginTopTablet']) ? $attr['tabMarginTopTablet'] : 8;
                            $tabMarginBottomTablet = isset($attr['tabMarginBottomTablet']) ? $attr['tabMarginBottomTablet'] : 8;
                            $tabMarginLeftTablet = isset($attr['tabMarginLeftTablet']) ? $attr['tabMarginLeftTablet'] : 8;
                            $tabMarginRightTablet = isset($attr['tabMarginRightTablet']) ? $attr['tabMarginRightTablet'] : 8;
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

            // product-box-padding
            $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-item .th-product-block-content-wrap{";
            if (isset($attr['productPaddingTypeTablet']) && 'unlinked' === $attr['productPaddingTypeTablet']) {
                $productPaddingUnit = isset($attr['productPaddingUnit']) ? $attr['productPaddingUnit'] : 'px';
                $productPaddingTopTablet = isset($attr['productPaddingTopTablet']) ? $attr['productPaddingTopTablet'] : 0;
                $productPaddingRightTablet = isset($attr['productPaddingRightTablet']) ? $attr['productPaddingRightTablet'] : 0;
                $productPaddingBottomTablet = isset($attr['productPaddingBottomTablet']) ? $attr['productPaddingBottomTablet'] : 0;
                $productPaddingLeftTablet = isset($attr['productPaddingLeftTablet']) ? $attr['productPaddingLeftTablet'] : 0;
                $css .= "padding-top: {$productPaddingTopTablet}{$productPaddingUnit}; 
                padding-right: {$productPaddingRightTablet}{$productPaddingUnit}; 
                padding-bottom: {$productPaddingBottomTablet}{$productPaddingUnit}; 
                padding-left: {$productPaddingLeftTablet}{$productPaddingUnit}; 
                ";
            } else {
                $productPaddingTablet = isset($attr['productPaddingTablet']) ? $attr['productPaddingTablet'] : 10;
                $productPaddingUnit = isset($attr['productPaddingUnit']) ? $attr['productPaddingUnit'] : 'px';
                $css .= "padding: {$productPaddingTablet}{$productPaddingUnit};";
            }
             // product-box-border-radius
            if (isset($attr['productBrdrRadiusTypeTablet']) && 'unlinked' === $attr['productBrdrRadiusTypeTablet']) {
                $productBrdrRadiusUnit = isset($attr['productBrdrRadiusUnit']) ? $attr['productBrdrRadiusUnit'] : 'px';
                $productBrdrRadiusTopTablet = isset($attr['productBrdrRadiusTopTablet']) ? $attr['productBrdrRadiusTopTablet'] : 0;
                $productBrdrRadiusRightTablet = isset($attr['productBrdrRadiusRightTablet']) ? $attr['productBrdrRadiusRightTablet'] : 0;
                $productBrdrRadiusBottomTablet = isset($attr['productBrdrRadiusBottomTablet']) ? $attr['productBrdrRadiusBottomTablet'] : 0;
                $productBrdrRadiusLeftTablet = isset($attr['productBrdrRadiusLeftTablet']) ? $attr['productBrdrRadiusLeftTablet'] : 0;
                $css .= "border-top-right-radius: {$productBrdrRadiusTopTablet}{$productBrdrRadiusUnit}; 
                border-top-left-radius: {$productBrdrRadiusRightTablet}{$productBrdrRadiusUnit};
                border-bottom-right-radius: {$productBrdrRadiusBottomTablet}{$productBrdrRadiusUnit};
                border-bottom-left-radius: {$productBrdrRadiusLeftTablet}{$productBrdrRadiusUnit};
                 ";
            } else {
                $productBrdrRadiusTablet = isset($attr['productBrdrRadiusTablet']) ? $attr['productBrdrRadiusTablet'] : 0;
                $productBrdrRadiusUnit = isset($attr['productBrdrRadiusUnit']) ? $attr['productBrdrRadiusUnit'] : 'px';
                $css .= "border-radius: {$productBrdrRadiusTablet}{$productBrdrRadiusUnit};";
            }
    
        $css .= "}";

        //gap
        $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-block-product-item-wrap{";
            $elementGapTablet = isset($attr['elementGapTablet']) ? $attr['elementGapTablet'] : 20;
            $elementGapUnit = isset($attr['elementGapUnit']) ? $attr['elementGapUnit'] : 'px';
            $css .= "grid-row-gap: {$elementGapTablet}{$elementGapUnit};";
            $css .= "grid-column-gap: {$elementGapTablet}{$elementGapUnit};";
            $css .= "}";

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
                        $tabMarginTopMobile = isset($attr['tabMarginTopMobile']) ? $attr['tabMarginTopMobile'] : 8;
                        $tabMarginBottomMobile = isset($attr['tabMarginBottomMobile']) ? $attr['tabMarginBottomMobile'] : 8;
                        $tabMarginLeftMobile = isset($attr['tabMarginLeftMobile']) ? $attr['tabMarginLeftMobile'] : 8;
                        $tabMarginRightMobile = isset($attr['tabMarginRightMobile']) ? $attr['tabMarginRightMobile'] : 8;
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

            // product-box-padding
           $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-item .th-product-block-content-wrap{";
            if (isset($attr['productPaddingTypeMobile']) && 'unlinked' === $attr['productPaddingTypeMobile']) {
                $productPaddingUnit = isset($attr['productPaddingUnit']) ? $attr['productPaddingUnit'] : 'px';
                $productPaddingTopMobile = isset($attr['productPaddingTopMobile']) ? $attr['productPaddingTopMobile'] : 0;
                $productPaddingRightMobile = isset($attr['productPaddingRightMobile']) ? $attr['productPaddingRightMobile'] : 0;
                $productPaddingBottomMobile = isset($attr['productPaddingBottomMobile']) ? $attr['productPaddingBottomMobile'] : 0;
                $productPaddingLeftMobile = isset($attr['productPaddingLeftMobile']) ? $attr['productPaddingLeftMobile'] : 0;
                $css .= "padding-top: {$productPaddingTopMobile}{$productPaddingUnit}; 
                padding-right: {$productPaddingRightMobile}{$productPaddingUnit}; 
                padding-bottom: {$productPaddingBottomMobile}{$productPaddingUnit}; 
                padding-left: {$productPaddingLeftMobile}{$productPaddingUnit}; 
                ";
            } else {
                $productPaddingMobile = isset($attr['productPaddingMobile']) ? $attr['productPaddingMobile'] : 10;
                $productPaddingUnit = isset($attr['productPaddingUnit']) ? $attr['productPaddingUnit'] : 'px';
                $css .= "padding: {$productPaddingMobile}{$productPaddingUnit};";
            }
             // product-box-border-radius
            if (isset($attr['productBrdrRadiusTypeMobile']) && 'unlinked' === $attr['productBrdrRadiusTypeMobile']) {
                $productBrdrRadiusUnit = isset($attr['productBrdrRadiusUnit']) ? $attr['productBrdrRadiusUnit'] : 'px';
                $productBrdrRadiusTopMobile = isset($attr['productBrdrRadiusTopMobile']) ? $attr['productBrdrRadiusTopMobile'] : 0;
                $productBrdrRadiusRightMobile = isset($attr['productBrdrRadiusRightMobile']) ? $attr['productBrdrRadiusRightMobile'] : 0;
                $productBrdrRadiusBottomMobile = isset($attr['productBrdrRadiusBottomMobile']) ? $attr['productBrdrRadiusBottomMobile'] : 0;
                $productBrdrRadiusLeftMobile = isset($attr['productBrdrRadiusLeftMobile']) ? $attr['productBrdrRadiusLeftMobile'] : 0;
                $css .= "border-top-right-radius: {$productBrdrRadiusTopMobile}{$productBrdrRadiusUnit}; 
                border-top-left-radius: {$productBrdrRadiusRightMobile}{$productBrdrRadiusUnit};
                border-bottom-right-radius: {$productBrdrRadiusBottomMobile}{$productBrdrRadiusUnit};
                border-bottom-left-radius: {$productBrdrRadiusLeftMobile}{$productBrdrRadiusUnit};
                 ";
            } else {
                $productBrdrRadiusMobile = isset($attr['productBrdrRadiusMobile']) ? $attr['productBrdrRadiusMobile'] : 0;
                $productBrdrRadiusUnit = isset($attr['productBrdrRadiusUnit']) ? $attr['productBrdrRadiusUnit'] : 'px';
                $css .= "border-radius: {$productBrdrRadiusMobile}{$productBrdrRadiusUnit};";
            }

            //gap
            $css .= ".wp-block-th-advance-product-tag-{$attr['uniqueID']} .th-product-block-product-content .th-product-block-product-item-wrap{";
            $elementGapMobile = isset($attr['elementGapMobile']) ? $attr['elementGapMobile'] : 20;
            $elementGapUnit = isset($attr['elementGapUnit']) ? $attr['elementGapUnit'] : 'px';
            $css .= "grid-row-gap: {$elementGapMobile}{$elementGapUnit};";
            $css .= "grid-column-gap: {$elementGapMobile}{$elementGapUnit};";
            $css .= "}";
    
        $css .= "}";

    }

    return $css;

}