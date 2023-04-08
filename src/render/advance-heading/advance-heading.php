<?php 

function themehunk_render_block_advance_heading($attr){

	$content = isset( $attr['content'] ) ? $attr['content'] : '';
	
	if($content!==''){
	
		return '<'.$attr['tag'].' id="wp-block-th-advance-heading-'.$attr['id'].'"  class="wp-block-th-advance-heading">' . $content . '</'.$attr['tag'].'>';
	
	}
	
}

add_action( 'wp_head', 'render_server_side_css' );

function render_server_side_css() {

	if ( function_exists( 'has_blocks' ) && has_blocks( get_the_ID() ) ) {

		global $post;

		if ( ! is_object( $post ) ) {
			return;
		}

		$blocks = parse_blocks( $post->post_content );

		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
			return;
		}

		$css = cycle_through_blocks( $blocks, $post->ID );

		if ( empty( $css ) ) {
			return;
		}

		$style  = "\n" . '<style type="text/css" media="all">' . "\n";
		$style .= $css;
		$style .= "\n" . '</style>' . "\n";

		echo $style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}


// function cycle_through_blocks( $blocks, $post_id ) {

//         $css = '';

// 		$attr = get_advance_heading_attributes_recursive( $blocks , $post_id);

// 		if ( $attr ) {

// 			$css.="#wp-block-th-advance-heading-{$attr['id']}{color:{$attr['headingColor']}}";
			
// 		}

//     return $css;
// }


function cycle_through_blocks( $blocks, $post_id ) {

	$css = '';

	foreach ( $blocks as $block ) {
		
		if ( $block['blockName'] === 'themehunk-blocks/advance-heading' ) {

			$css .="#wp-block-th-advance-heading-{$block['attrs']['id']}{color:{$block['attrs']['headingColor']}}";

		} 
		
		if ( ! empty( $block['innerBlocks'] ) ) {
			$inner_css = cycle_through_blocks( $block['innerBlocks'], $post_id );
			if ( $inner_css ) {
				$css .= $inner_css;
			}
		}

		if ( 'core/block' === $block['blockName'] && ! empty( $block['attrs']['ref'] ) ) {
			$reusable_block = get_post( $block['attrs']['ref'] );
			if ( ! $reusable_block || 'wp_block' !== $reusable_block->post_type ) {
				continue;
			}

			if ( 'publish' !== $reusable_block->post_status || ! empty( $reusable_block->post_password ) ) {
				continue;
			}

			$blocks = parse_blocks( $reusable_block->post_content );
			$inner_css = cycle_through_blocks( $blocks, $reusable_block->ID );
			if ( $inner_css ) {
				$css .= $inner_css;
			}
		}
	}

	return $css;
}