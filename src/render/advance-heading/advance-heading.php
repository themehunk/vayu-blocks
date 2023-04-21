<?php 

function themehunk_render_block_advance_heading($attr){

	$content = isset( $attr['content'] ) ? $attr['content'] : '';
	
	if($content!==''){
	
		return '<'.$attr['tag'].' id="wp-block-th-advance-heading-'.$attr['id'].'"  class="wp-block-th-advance-heading">' . $content . '</'.$attr['tag'].'>';
	
	}
	
}


function advance_heading_style($attr){

	$css = '';

	if(isset( $attr['id'] )){

        //heading color
        $css .= isset( $attr['headingColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{color:{$attr['headingColor']}}" : '';
	    $css .= isset( $attr['headingHvrColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{color:{$attr['headingHvrColor']}}" : '';
	    //heading background
	    if ( isset( $attr['backgroundType'] ) && $attr['backgroundType'] == 'image' ) {
		$css .= isset( $attr['backgroundImage']['url'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{background-image: url({$attr['backgroundImage']['url']})}" : '';
		$css .= isset( $attr['backgroundAttachment']) ? "#wp-block-th-advance-heading-{$attr['id']}{background-attachment: {$attr['backgroundAttachment']}}" : '';
		$css .= isset( $attr['backgroundRepeat']) ? "#wp-block-th-advance-heading-{$attr['id']}{background-repeat: {$attr['backgroundRepeat']}}" : '';
		$css .= isset( $attr['backgroundSize']) ? "#wp-block-th-advance-heading-{$attr['id']}{background-size: {$attr['backgroundSize']}}" : '';
		$css .= isset( $attr['backgroundPosition']) ? "#wp-block-th-advance-heading-{$attr['id']}{background-position-x: {$attr['backgroundPosition']['x']}}" : '';
		$css .= isset( $attr['backgroundPosition']) ? "#wp-block-th-advance-heading-{$attr['id']}{background-position-y: {$attr['backgroundPosition']['y']}}" : '';
		}
		elseif( isset( $attr['backgroundType'] ) && $attr['backgroundType'] == 'gradient' ){
		$css .= isset( $attr['backgroundGradient'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{background-image:{$attr['backgroundGradient']}}" : '';	
		}else{
		$css .= isset( $attr['backgroundColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{background-color:{$attr['backgroundColor']}}" : '';
		}
		//heading hover background	
		if ( isset( $attr['backgroundTypeHvr'] ) && $attr['backgroundTypeHvr'] == 'image' ) {
			$css .= isset( $attr['backgroundImageHvr']['url'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-image: url({$attr['backgroundImageHvr']['url']})}" : '';
			$css .= isset( $attr['backgroundAttachmentHvr']) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-attachment: {$attr['backgroundAttachmentHvr']}}" : '';
			$css .= isset( $attr['backgroundRepeatHvr']) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-repeat: {$attr['backgroundRepeatHvr']}}" : '';
			$css .= isset( $attr['backgroundSizeHvr']) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-size: {$attr['backgroundSizeHvr']}}" : '';
			$css .= isset( $attr['backgroundPositionHvr']) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-position-x: {$attr['backgroundPositionHvr']['x']}}" : '';
			$css .= isset( $attr['backgroundPositionHvr']) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-position-y: {$attr['backgroundPositionHvr']['y']}}" : '';
			}
			elseif( isset( $attr['backgroundTypeHvr'] ) && $attr['backgroundTypeHvr'] == 'gradient' ){
			$css .= isset( $attr['backgroundGradientHvr'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-image:{$attr['backgroundGradientHvr']}}" : '';	
			}else{
			$css .= isset( $attr['backgroundColorHvr'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{background-color:{$attr['backgroundColorHvr']}}" : '';
			}	

		//alignment
		$css .= isset( $attr['align'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{text-align:{$attr['align'] }}" : '';
		//heading font size
		$css .= isset( $attr['fontSize'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{font-size:{$attr['fontSize'] }" . (isset($attr['fontSizeUnit']) ? $attr['fontSizeUnit'] : 'px') . "}" : '';
		//heading line-height
		$css .= isset( $attr['lineHeight'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{line-height:{$attr['lineHeight'] }" . (isset($attr['lineHeightUnit']) ? $attr['lineHeightUnit'] : 'px') . "}" : '';
        //heading letter-spacing
		$css .= isset( $attr['letterSpacing'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{letter-spacing:{$attr['letterSpacing'] }" . (isset($attr['letterSpacingUnit']) ? $attr['letterSpacingUnit'] : 'px') . "}" : '';
		
		// font family
		if(isset($attr['fontFamily'])) {
			$css .= " #wp-block-th-advance-heading-{$attr['id']} { font-family: '{$attr['fontFamily']}', sans-serif; }";
		}
        
		//width
		if(isset($attr['widthType'])) {
            if($attr['widthType']=='fullwidth'){
			$css .= " #wp-block-th-advance-heading-{$attr['id']} { width:100% }";
		    }elseif($attr['widthType']=='inlinewidth'){
			$css .= " #wp-block-th-advance-heading-{$attr['id']} { display:inline-flex }";
			}elseif($attr['widthType']=='customwidth'){
			$css .= isset( $attr['customWidth'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{width:{$attr['customWidth'] }" . (isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px') . "}" : '';
			$css .= isset( $attr['customWidth'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{max-width:{$attr['customWidth'] }" . (isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px') . "}" : '';
		    }
		}

		//padding
		if (isset($attr['paddingType']) && 'unlinked' === $attr['paddingType']) {
			$paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
			$paddingTop = isset($attr['paddingTop']) ? $attr['paddingTop'] : 0;
			$paddingRight = isset($attr['paddingRight']) ? $attr['paddingRight'] : 0;
			$paddingBottom = isset($attr['paddingBottom']) ? $attr['paddingBottom'] : 0;
			$paddingLeft = isset($attr['paddingLeft']) ? $attr['paddingLeft'] : 0;
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { padding-top: {$paddingTop}{$paddingUnit}; padding-right: {$paddingRight}{$paddingUnit}; padding-bottom: {$paddingBottom}{$paddingUnit}; padding-left: {$paddingLeft}{$paddingUnit}; }";
		} else {
			$padding = isset($attr['padding']) ? $attr['padding'] : 0;
			$paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { padding: {$padding}{$paddingUnit}; }";
		}

		//padding
		if (isset($attr['marginType']) && 'unlinked' === $attr['marginType']) {
			$marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
			$marginTop = isset($attr['marginTop']) ? $attr['marginTop'] : 0;
			$marginBottom = isset($attr['marginBottom']) ? $attr['marginBottom'] : 0;
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { margin-top: {$marginTop}{$marginUnit}; margin-bottom: {$marginBottom}{$marginUnit}; }";
		} else {
			$margin = isset($attr['margin']) ? $attr['margin'] : 0;
			$marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { margin-top: {$margin}{$marginUnit}; margin-bottom: {$margin}{$marginUnit};}";
		}

		//z-index
		$css .= isset( $attr['zindex'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{z-index:{$attr['zindex'] }}" : '';
       
		//border
		$css .= isset( $attr['borderType'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{border-style:{$attr['borderType'] }}" : '';
        $css .= isset( $attr['borderColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{border-color:{$attr['borderColor'] }}" : '';
		
		//border hover
		$css .= isset( $attr['borderHvrType'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{border-style:{$attr['borderHvrType'] }}" : '';
		$css .= isset( $attr['borderColorHvr'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{border-color:{$attr['borderColorHvr'] }}" : '';
		
		//border-width
		if (isset($attr['borderWidthType']) && 'unlinked' === $attr['borderWidthType']) {
			$borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
			$borderWidthTop = isset($attr['borderWidthTop']) ? $attr['borderWidthTop'] : 0;
			$borderWidthRight = isset($attr['borderWidthRight']) ? $attr['borderWidthRight'] : 0;
			$borderWidthBottom = isset($attr['borderWidthBottom']) ? $attr['borderWidthBottom'] : 0;
			$borderWidthLeft = isset($attr['borderWidthLeft']) ? $attr['borderWidthLeft'] : 0;
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { border-top-width: {$borderWidthTop}{$borderWidthUnit}; border-right-width: {$borderWidthRight}{$borderWidthUnit}; border-bottom-width: {$borderWidthBottom}{$borderWidthUnit}; border-left-width: {$borderWidthLeft}{$borderWidthUnit}; }";
		} else {
			$borderWidth = isset($attr['borderWidth']) ? $attr['borderWidth'] : 0;
			$borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { border-width: {$borderWidth}{$borderWidthUnit}; }";
		}

		//border-width hover
		if (isset($attr['borderWidthHvrType']) && 'unlinked' === $attr['borderWidthHvrType']) {
			$borderWidthHvrUnit = isset($attr['borderWidthHvrUnit']) ? $attr['borderWidthHvrUnit'] : 'px';
			$borderWidthHvrTop = isset($attr['borderWidthHvrTop']) ? $attr['borderWidthHvrTop'] : 0;
			$borderWidthHvrRight = isset($attr['borderWidthHvrRight']) ? $attr['borderWidthHvrRight'] : 0;
			$borderWidthHvrBottom = isset($attr['borderWidthHvrBottom']) ? $attr['borderWidthHvrBottom'] : 0;
			$borderWidthHvrLeft = isset($attr['borderWidthHvrLeft']) ? $attr['borderWidthHvrLeft'] : 0;
			$css .= "#wp-block-th-advance-heading-{$attr['id']}:hover { border-top-width: {$borderWidthHvrTop}{$borderWidthHvrUnit}; border-right-width: {$borderWidthHvrRight}{$borderWidthHvrUnit}; border-bottom-width: {$borderWidthHvrBottom}{$borderWidthHvrUnit}; border-left-width: {$borderWidthHvrLeft}{$borderWidthHvrUnit}; }";
		} else {
			$borderWidthHvr = isset($attr['borderWidthHvr']) ? $attr['borderWidthHvr'] : 0;
			$borderWidthHvrUnit = isset($attr['borderWidthHvrUnit']) ? $attr['borderWidthHvrUnit'] : 'px';
			$css .= "#wp-block-th-advance-heading-{$attr['id']}:hover { border-width: {$borderWidthHvr}{$borderWidthHvrUnit}; }";
		}

		//border-radius
		if (isset($attr['borderRadiusType']) && 'unlinked' === $attr['borderRadiusType']) {
			$borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
			$borderRadiusTop = isset($attr['borderRadiusTop']) ? $attr['borderRadiusTop'] : 0;
			$borderRadiusRight = isset($attr['borderRadiusRight']) ? $attr['borderRadiusRight'] : 0;
			$borderRadiusBottom = isset($attr['borderRadiusBottom']) ? $attr['borderRadiusBottom'] : 0;
			$borderRadiusLeft = isset($attr['borderRadiusLeft']) ? $attr['borderRadiusLeft'] : 0;
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { border-top-right-radius: {$borderRadiusTop}{$borderRadiusUnit}; border-top-left-radius: {$borderRadiusRight}{$borderRadiusUnit}; border-bottom-right-radius: {$borderRadiusBottom}{$borderRadiusUnit}; border-bottom-left-radius: {$borderRadiusLeft}{$borderRadiusUnit}; }";
		} else {
			$borderRadius = isset($attr['borderRadius']) ? $attr['borderRadius'] : 0;
			$borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
			$css .= "#wp-block-th-advance-heading-{$attr['id']} { border-radius: {$borderRadius}{$borderRadiusUnit}; }";
		}
		//border-radius hover
		if (isset($attr['borderRadiusHvrType']) && 'unlinked' === $attr['borderRadiusHvrType']) {
			$borderRadiusHvrUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
			$borderRadiusHvrTop = isset($attr['borderRadiusHvrTop']) ? $attr['borderRadiusHvrTop'] : 0;
			$borderRadiusHvrRight = isset($attr['borderRadiusHvrRight']) ? $attr['borderRadiusHvrRight'] : 0;
			$borderRadiusHvrBottom = isset($attr['borderRadiusHvrBottom']) ? $attr['borderRadiusHvrBottom'] : 0;
			$borderRadiusHvrLeft = isset($attr['borderRadiusHvrLeft']) ? $attr['borderRadiusHvrLeft'] : 0;
			$css .= "#wp-block-th-advance-heading-{$attr['id']}:hover { border-top-right-radius: {$borderRadiusHvrTop}{$borderRadiusHvrUnit}; border-top-left-radius: {$borderRadiusHvrRight}{$borderRadiusHvrUnit}; border-bottom-right-radius: {$borderRadiusHvrBottom}{$borderRadiusHvrUnit}; border-bottom-left-radius: {$borderRadiusHvrLeft}{$borderRadiusHvrUnit}; }";
		} else {
			$borderRadiusHvr = isset($attr['borderRadiusHvr']) ? $attr['borderRadiusHvr'] : 0;
			$borderRadiusHvrUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
			$css .= "#wp-block-th-advance-heading-{$attr['id']}:hover { border-radius: {$borderRadiusHvr}{$borderRadiusHvrUnit}; }";
		}

		//box shadow
        if (isset($attr['boxShadow'])){
			$css .= "#wp-block-th-advance-heading-{$attr['id']}{box-shadow: ". (isset($attr['boxShadowHorizontal']) ? $attr['boxShadowHorizontal'] : '0') ."px  ". (isset($attr['boxShadowVertical']) ? $attr['boxShadowVertical'] : '0') ."px ". (isset($attr['boxShadowBlur']) ? $attr['boxShadowBlur'] : '5') ."px ". (isset($attr['boxShadowSpread']) ? $attr['boxShadowSpread'] : '1') ."px  ". hex2rgba((isset($attr['boxShadowColor']) ? $attr['boxShadowColor'] : '#fff'), (isset($attr['boxShadowColorOpacity']) ? $attr['boxShadowColorOpacity'] : '50') ) ." }";
		}

		//transition duration
		$css .= "#wp-block-th-advance-heading-{$attr['id']}{transition: all ". (isset($attr['transitionAll']) ? $attr['transitionAll'] : '0.2' ). "s ease;  }";
		
		// media queries for tablet 
        $css .= "@media only screen and (max-width: 768px) {
            " . (isset($attr['fontSizeTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{font-size:{$attr['fontSizeTablet']}" . (isset($attr['fontSizeUnit']) ? $attr['fontSizeUnit'] : 'px') . "}" : '') . "
			" . (isset($attr['lineHeightTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{line-height:{$attr['lineHeightTablet']}" . (isset($attr['lineHeightUnit']) ? $attr['lineHeightUnit'] : 'px') . "}" : '') . "
		    " . (isset($attr['letterSpacingTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{letter-spacing:{$attr['letterSpacingTablet']}" . (isset($attr['letterSpacingUnit']) ? $attr['letterSpacingUnit'] : 'px') . "}" : '') . "
			" . (isset($attr['alignTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{text-align:{$attr['alignTablet']}}" : '') . "
			" . (isset($attr['widthType']) && $attr['widthType']=='customwidth' ? "#wp-block-th-advance-heading-{$attr['id']}{width:{".(isset($attr['customWidthTablet']) ? ($attr['customWidthTablet']):'')."}" . (isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px') . "}" : '' )."
            " . (isset($attr['widthType']) && $attr['widthType']=='customwidth' ? "#wp-block-th-advance-heading-{$attr['id']}{max-width:{".(isset($attr['customWidthTablet']) ? ($attr['customWidthTablet']):'')."}" . (isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px') . "}" : '' )."
		    " . (isset($attr['zindexTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{z-index:{$attr['zindexTablet']}}" : '') . "
		}";

		//for padding tablet
		if (isset($attr['paddingTypeTablet']) && 'unlinked' === $attr['paddingTypeTablet']) {
			$paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
			$paddingTopTablet = isset($attr['paddingTopTablet']) ? $attr['paddingTopTablet'] : 0;
			$paddingRightTablet = isset($attr['paddingRightTablet']) ? $attr['paddingRightTablet'] : 0;
			$paddingBottomTablet = isset($attr['paddingBottomTablet']) ? $attr['paddingBottomTablet'] : 0;
			$paddingLeftTablet = isset($attr['paddingLeftTablet']) ? $attr['paddingLeftTablet'] : 0;
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { padding-top: {$paddingTopTablet}{$paddingUnit}; padding-right: {$paddingRightTablet}{$paddingUnit}; padding-bottom: {$paddingBottomTablet}{$paddingUnit}; padding-left: {$paddingLeftTablet}{$paddingUnit}; }}";
		} else {
			$paddingTablet = isset($attr['paddingTablet']) ? $attr['paddingTablet'] : 0;
			$paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { padding: {$paddingTablet}{$paddingUnit}; }}";
		}

		//for margin tablet
		if (isset($attr['marginTypeTablet']) && 'unlinked' === $attr['marginTypeTablet']) {
			$marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
			$marginTopTablet = isset($attr['marginTopTablet']) ? $attr['marginTopTablet'] : 0;
			$marginBottomTablet = isset($attr['marginBottomTablet']) ? $attr['marginBottomTablet'] : 0;
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { margin-top: {$marginTopTablet}{$marginUnit};  margin-bottom: {$marginBottomTablet}{$marginUnit};}}";
		} else {
			$marginTablet = isset($attr['marginTablet']) ? $attr['marginTablet'] : 0;
			$marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { margin-top: {$marginTablet}{$marginUnit}; margin-bottom: {$marginTablet}{$marginUnit} }}";
		}

		//for border-width tablet
		if (isset($attr['borderWidthTypeTablet']) && 'unlinked' === $attr['borderWidthTypeTablet']) {
			$borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
			$borderWidthTopTablet = isset($attr['borderWidthTopTablet']) ? $attr['borderWidthTopTablet'] : 0;
			$borderWidthRightTablet = isset($attr['borderWidthRightTablet']) ? $attr['borderWidthRightTablet'] : 0;
			$borderWidthBottomTablet = isset($attr['borderWidthBottomTablet']) ? $attr['borderWidthBottomTablet'] : 0;
			$borderWidthLeftTablet = isset($attr['borderWidthLeftTablet']) ? $attr['borderWidthLeftTablet'] : 0;
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { border-top-width: {$borderWidthTopTablet}{$borderWidthUnit}; border-right-width: {$borderWidthRightTablet}{$borderWidthUnit}; border-bottom-width: {$borderWidthBottomTablet}{$borderWidthUnit}; border-left-width: {$borderWidthLeftTablet}{$borderWidthUnit}; }}";
		} else {
			$borderWidthTablet = isset($attr['borderWidthTablet']) ? $attr['borderWidthTablet'] : 0;
			$borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { border-width: {$borderWidthTablet}{$borderWidthUnit}; }}";
		}
        //for border-width hover tablet
		if (isset($attr['borderWidthHvrTypeTablet']) && 'unlinked' === $attr['borderWidthHvrTypeTablet']) {
			$borderWidthHvrUnit = isset($attr['borderWidthHvrUnit']) ? $attr['borderWidthHvrUnit'] : 'px';
			$borderWidthHvrTopTablet = isset($attr['borderWidthHvrTopTablet']) ? $attr['borderWidthHvrTopTablet'] : 0;
			$borderWidthHvrRightTablet = isset($attr['borderWidthHvrRightTablet']) ? $attr['borderWidthHvrRightTablet'] : 0;
			$borderWidthHvrBottomTablet = isset($attr['borderWidthHvrBottomTablet']) ? $attr['borderWidthHvrBottomTablet'] : 0;
			$borderWidthHvrLeftTablet = isset($attr['borderWidthHvrLeftTablet']) ? $attr['borderWidthHvrLeftTablet'] : 0;
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-top-width: {$borderWidthHvrTopTablet}{$borderWidthHvrUnit}; border-right-width: {$borderWidthHvrRightTablet}{$borderWidthHvrUnit}; border-bottom-width: {$borderWidthHvrBottomTablet}{$borderWidthHvrUnit}; border-left-width: {$borderWidthHvrLeftTablet}{$borderWidthHvrUnit}; }}";
		} else {
			$borderWidthHvrTablet = isset($attr['borderWidthHvrTablet']) ? $attr['borderWidthHvrTablet'] : 0;
			$borderWidthHvrUnit = isset($attr['borderWidthHvrUnit']) ? $attr['borderWidthHvrUnit'] : 'px';
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-width: {$borderWidthHvrTablet}{$borderWidthHvrUnit}; }}";
		}

		//for border-radius tablet
		if (isset($attr['borderRadiusTypeTablet']) && 'unlinked' === $attr['borderRadiusTypeTablet']) {
			$borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
			$borderRadiusTopTablet = isset($attr['borderRadiusTopTablet']) ? $attr['borderRadiusTopTablet'] : 0;
			$borderRadiusRightTablet = isset($attr['borderRadiusRightTablet']) ? $attr['borderRadiusRightTablet'] : 0;
			$borderRadiusBottomTablet = isset($attr['borderRadiusBottomTablet']) ? $attr['borderRadiusBottomTablet'] : 0;
			$borderRadiusLeftTablet = isset($attr['borderRadiusLeftTablet']) ? $attr['borderRadiusLeftTablet'] : 0;
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { border-top-right-radius: {$borderRadiusTopTablet}{$borderRadiusUnit}; border-top-left-radius: {$borderRadiusRightTablet}{$borderRadiusUnit}; border-bottom-right-radius: {$borderRadiusBottomTablet}{$borderRadiusUnit}; border-bottom-left-radius: {$borderRadiusLeftTablet}{$borderRadiusUnit}; }}";
		} else {
			$borderRadiusTablet = isset($attr['borderRadiusTablet']) ? $attr['borderRadiusTablet'] : 0;
			$borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']} { border-radius: {$borderRadiusTablet}{$borderRadiusUnit}; }}";
		}
		//for border-radius hover tablet
		if (isset($attr['borderRadiusHvrTypeTablet']) && 'unlinked' === $attr['borderRadiusHvrTypeTablet']) {
			$borderRadiusHvrUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
			$borderRadiusHvrTopTablet = isset($attr['borderRadiusHvrTopTablet']) ? $attr['borderRadiusHvrTopTablet'] : 0;
			$borderRadiusHvrRightTablet = isset($attr['borderRadiusHvrRightTablet']) ? $attr['borderRadiusHvrRightTablet'] : 0;
			$borderRadiusHvrBottomTablet = isset($attr['borderRadiusHvrBottomTablet']) ? $attr['borderRadiusHvrBottomTablet'] : 0;
			$borderRadiusHvrLeftTablet = isset($attr['borderRadiusHvrLeftTablet']) ? $attr['borderRadiusHvrLeftTablet'] : 0;
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-top-right-radius: {$borderRadiusHvrTopTablet}{$borderRadiusHvrUnit}; border-top-left-radius: {$borderRadiusHvrRightTablet}{$borderRadiusHvrUnit}; border-bottom-right-radius: {$borderRadiusHvrBottomTablet}{$borderRadiusHvrUnit}; border-bottom-left-radius: {$borderRadiusHvrLeftTablet}{$borderRadiusHvrUnit}; }}";
		} else {
			$borderRadiusHvrTablet = isset($attr['borderRadiusHvrTablet']) ? $attr['borderRadiusHvrTablet'] : 0;
			$borderRadiusHvrUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
			$css .= "@media only screen and (max-width: 768px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-radius: {$borderRadiusHvrTablet}{$borderRadiusHvrUnit}; }}";
		}

	
		// media queries for mobile
		 $css .= "@media only screen and (max-width: 480px) {
            " . (isset($attr['fontSizeMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{font-size:{$attr['fontSizeMobile']}" . (isset($attr['fontSizeUnit']) ? $attr['fontSizeUnit'] : 'px') . "}" : '') . "
			" . (isset($attr['lineHeightMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{line-height:{$attr['lineHeightMobile']}" . (isset($attr['lineHeightUnit']) ? $attr['lineHeightUnit'] : 'px') . "}" : '') . "
		    " . (isset($attr['letterSpacingMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{letter-spacing:{$attr['letterSpacingMobile']}" . (isset($attr['letterSpacingUnit']) ? $attr['letterSpacingUnit'] : 'px') . "}" : '') . "
            " . (isset($attr['alignMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{text-align:{$attr['alignMobile']}}" : '') . "
		    " . (isset($attr['widthType']) && $attr['widthType']=='customwidth' ? "#wp-block-th-advance-heading-{$attr['id']}{width:{".(isset($attr['customWidthMobile']) ? ($attr['customWidthMobile']):'')."}" . (isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px') . "}" : '' )."
            " . (isset($attr['widthType']) && $attr['widthType']=='customwidth' ? "#wp-block-th-advance-heading-{$attr['id']}{max-width:{".(isset($attr['customWidthMobile']) ? ($attr['customWidthMobile']):'')."}" . (isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px') . "}" : '' )."
		    " . (isset($attr['zindexMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{z-index:{$attr['zindexMobile']}}" : '') . "
		}";

		//for padding mobile
		if (isset($attr['paddingTypeMobile']) && 'unlinked' === $attr['paddingTypeMobile']) {
			$paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
			$paddingTopMobile = isset($attr['paddingTopMobile']) ? $attr['paddingTopMobile'] : 0;
			$paddingRightMobile = isset($attr['paddingRightMobile']) ? $attr['paddingRightMobile'] : 0;
			$paddingBottomMobile = isset($attr['paddingBottomMobile']) ? $attr['paddingBottomMobile'] : 0;
			$paddingLeftMobile = isset($attr['paddingLeftMobile']) ? $attr['paddingLeftMobile'] : 0;
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { padding-top: {$paddingTopMobile}{$paddingUnit}; padding-right: {$paddingRightMobile}{$paddingUnit}; padding-bottom: {$paddingBottomMobile}{$paddingUnit}; padding-left: {$paddingLeftMobile}{$paddingUnit}; }}";
		} else {
			$paddingMobile = isset($attr['paddingMobile']) ? $attr['paddingMobile'] : 0;
			$paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { padding: {$paddingMobile}{$paddingUnit}; }}";
		}

		//for margin Mobile
		if (isset($attr['marginTypeMobile']) && 'unlinked' === $attr['marginTypeMobile']) {
			$marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
			$marginTopMobile = isset($attr['marginTopMobile']) ? $attr['marginTopMobile'] : 0;
			$marginBottomMobile = isset($attr['marginBottomMobile']) ? $attr['marginBottomMobile'] : 0;
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { margin-top: {$marginTopMobile}{$marginUnit};  margin-bottom: {$marginBottomMobile}{$marginUnit};}}";
		} else {
			$marginMobile = isset($attr['marginMobile']) ? $attr['marginMobile'] : 0;
			$marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { margin-top: {$marginMobile}{$marginUnit}; margin-bottom: {$marginMobile}{$marginUnit} }}";
		}

		//for border-width mobile
		if (isset($attr['borderWidthTypeMobile']) && 'unlinked' === $attr['borderWidthTypeMobile']) {
			$borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
			$borderWidthTopMobile = isset($attr['borderWidthTopMobile']) ? $attr['borderWidthTopMobile'] : 0;
			$borderWidthRightMobile = isset($attr['borderWidthRightMobile']) ? $attr['borderWidthRightMobile'] : 0;
			$borderWidthBottomMobile = isset($attr['borderWidthBottomMobile']) ? $attr['borderWidthBottomMobile'] : 0;
			$borderWidthLeftMobile = isset($attr['borderWidthLeftMobile']) ? $attr['borderWidthLeftMobile'] : 0;
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { border-top-width: {$borderWidthTopMobile}{$borderWidthUnit}; border-right-width: {$borderWidthRightMobile}{$borderWidthUnit}; border-bottom-width: {$borderWidthBottomMobile}{$borderWidthUnit}; border-left-width: {$borderWidthLeftMobile}{$borderWidthUnit}; }}";
		} else {
			$borderWidthMobile = isset($attr['borderWidthMobile']) ? $attr['borderWidthMobile'] : 0;
			$borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : 'px';
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { border-width: {$borderWidthMobile}{$borderWidthUnit}; }}";
		}
        //for border-width hvr mobile
		if (isset($attr['borderWidthHvrTypeMobile']) && 'unlinked' === $attr['borderWidthHvrTypeMobile']) {
			$borderWidthHvrUnit = isset($attr['borderWidthHvrUnit']) ? $attr['borderWidthHvrUnit'] : 'px';
			$borderWidthHvrTopMobile = isset($attr['borderWidthHvrTopMobile']) ? $attr['borderWidthHvrTopMobile'] : 0;
			$borderWidthHvrRightMobile = isset($attr['borderWidthHvrRightMobile']) ? $attr['borderWidthHvrRightMobile'] : 0;
			$borderWidthHvrBottomMobile = isset($attr['borderWidthHvrBottomMobile']) ? $attr['borderWidthHvrBottomMobile'] : 0;
			$borderWidthHvrLeftMobile = isset($attr['borderWidthHvrLeftMobile']) ? $attr['borderWidthHvrLeftMobile'] : 0;
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-top-width: {$borderWidthHvrTopMobile}{$borderWidthHvrUnit}; border-right-width: {$borderWidthHvrRightMobile}{$borderWidthHvrUnit}; border-bottom-width: {$borderWidthHvrBottomMobile}{$borderWidthHvrUnit}; border-left-width: {$borderWidthHvrLeftMobile}{$borderWidthHvrUnit}; }}";
		} else {
			$borderWidthHvrMobile = isset($attr['borderWidthHvrMobile']) ? $attr['borderWidthHvrMobile'] : 0;
			$borderWidthHvrUnit = isset($attr['borderWidthHvrUnit']) ? $attr['borderWidthHvrUnit'] : 'px';
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-width: {$borderWidthHvrMobile}{$borderWidthHvrUnit}; }}";
		}

		//for border-radius mobile
		if (isset($attr['borderRadiusTypeMobile']) && 'unlinked' === $attr['borderRadiusTypeMobile']) {
			$borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
			$borderRadiusTopMobile = isset($attr['borderRadiusTopMobile']) ? $attr['borderRadiusTopMobile'] : 0;
			$borderRadiusRightMobile = isset($attr['borderRadiusRightMobile']) ? $attr['borderRadiusRightMobile'] : 0;
			$borderRadiusBottomMobilet = isset($attr['borderRadiusBottomMobile']) ? $attr['borderRadiusBottomMobile'] : 0;
			$borderRadiusLeftMobile = isset($attr['borderRadiusLeftMobile']) ? $attr['borderRadiusLeftMobile'] : 0;
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { border-top-right-radius: {$borderRadiusTopMobile}{$borderRadiusUnit}; border-top-left-radius: {$borderRadiusRightMobile}{$borderRadiusUnit}; border-bottom-right-radius: {$borderRadiusBottomMobile}{$borderRadiusUnit}; border-bottom-left-radius: {$borderRadiusLeftMobile}{$borderRadiusUnit}; }}";
		} else {
			$borderRadiusMobile = isset($attr['borderRadiusMobile']) ? $attr['borderRadiusMobile'] : 0;
			$borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : 'px';
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']} { border-radius: {$borderRadiusMobile}{$borderRadiusUnit}; }}";
		}

		//for border-radius hover mobile
		if (isset($attr['borderRadiusHvrTypeMobile']) && 'unlinked' === $attr['borderRadiusHvrTypeMobile']) {
			$borderRadiusHvrUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
			$borderRadiusHvrTopMobile = isset($attr['borderRadiusHvrTopMobile']) ? $attr['borderRadiusHvrTopMobile'] : 0;
			$borderRadiusHvrRightMobile = isset($attr['borderRadiusHvrRightMobile']) ? $attr['borderRadiusHvrRightMobile'] : 0;
			$borderRadiusHvrBottomMobilet = isset($attr['borderRadiusHvrBottomMobile']) ? $attr['borderRadiusHvrBottomMobile'] : 0;
			$borderRadiusHvrLeftMobile = isset($attr['borderRadiusHvrLeftMobile']) ? $attr['borderRadiusHvrLeftMobile'] : 0;
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-top-right-radius: {$borderRadiusHvrTopMobile}{$borderRadiusHvrUnit}; border-top-left-radius: {$borderRadiusHvrRightMobile}{$borderRadiusHvrUnit}; border-bottom-right-radius: {$borderRadiusHvrBottomMobile}{$borderRadiusHvrUnit}; border-bottom-left-radius: {$borderRadiusHvrLeftMobile}{$borderRadiusHvrUnit}; }}";
		} else {
			$borderRadiusHvrMobile = isset($attr['borderRadiusHvrMobile']) ? $attr['borderRadiusHvrMobile'] : 0;
			$borderRadiusHvrUnit = isset($attr['borderRadiusHvrUnit']) ? $attr['borderRadiusHvrUnit'] : 'px';
			$css .= "@media only screen and (max-width: 480px) {#wp-block-th-advance-heading-{$attr['id']}:hover { border-radius: {$borderRadiusHvrMobile}{$borderRadiusHvrUnit}; }}";
		}

		//hide on desktop
		if (isset($attr['responsiveTogHideDesktop']) && $attr['responsiveTogHideDesktop'] == true){
			$css .= "@media only screen and (min-width: 1024px) {#wp-block-th-advance-heading-{$attr['id']}{display:none;}}";
		}
		//hide on Tablet
		if (isset($attr['responsiveTogHideTablet']) && $attr['responsiveTogHideTablet'] == true){
			$css .= "@media only screen and (min-width: 768px) and (max-width: 1023px) { {#wp-block-th-advance-heading-{$attr['id']}{display:none;}}";
		}
		//hide on Mobile
		if (isset($attr['responsiveTogHideMobile']) && $attr['responsiveTogHideMobile'] == true){
			$css .= "@media only screen and (max-width: 767px) {#wp-block-th-advance-heading-{$attr['id']}{display:none;}}";
		}
	
    }
	return $css;
}