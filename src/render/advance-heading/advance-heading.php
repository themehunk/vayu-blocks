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
		$css .= isset( $attr['backgroundColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{color:{$attr['backgroundColor']}}" : '';
		}

		

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

		// media queries for tablet 
        $css .= "@media only screen and (max-width: 768px) {
            " . (isset($attr['fontSizeTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{font-size:{$attr['fontSizeTablet']}" . (isset($attr['fontSizeUnit']) ? $attr['fontSizeUnit'] : 'px') . "}" : '') . "
			" . (isset($attr['lineHeightTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{line-height:{$attr['lineHeightTablet']}" . (isset($attr['lineHeightUnit']) ? $attr['lineHeightUnit'] : 'px') . "}" : '') . "
		    " . (isset($attr['letterSpacingTablet']) ? "#wp-block-th-advance-heading-{$attr['id']}{letter-spacing:{$attr['letterSpacingTablet']}" . (isset($attr['letterSpacingUnit']) ? $attr['letterSpacingUnit'] : 'px') . "}" : '') . "
		}";
		// media queries for mobile
		 $css .= "@media only screen and (max-width: 480px) {
            " . (isset($attr['fontSizeMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{font-size:{$attr['fontSizeMobile']}" . (isset($attr['fontSizeUnit']) ? $attr['fontSizeUnit'] : 'px') . "}" : '') . "
			" . (isset($attr['lineHeightMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{line-height:{$attr['lineHeightMobile']}" . (isset($attr['lineHeightUnit']) ? $attr['lineHeightUnit'] : 'px') . "}" : '') . "
		    " . (isset($attr['letterSpacingMobile']) ? "#wp-block-th-advance-heading-{$attr['id']}{letter-spacing:{$attr['letterSpacingMobile']}" . (isset($attr['letterSpacingUnit']) ? $attr['letterSpacingUnit'] : 'px') . "}" : '') . "
           }";

	
    }
	return $css;
}

