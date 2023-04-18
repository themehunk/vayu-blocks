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

       $css .= isset( $attr['headingColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{color:{$attr['headingColor']}}" : '';

	   $css .= isset( $attr['headingHvrColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}:hover{color:{$attr['headingHvrColor']}}" : '';
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
		}
		else{
			$css .= isset( $attr['backgroundColor'] ) ? "#wp-block-th-advance-heading-{$attr['id']}{color:{$attr['backgroundColor']}}" : '';
		}
	   
	
}
	return $css;
}

