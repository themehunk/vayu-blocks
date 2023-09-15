<?php

function render_init(){

	add_action( 'wp_head', 'render_server_side_css',999 );
}

add_action( 'init', 'render_init', 99);



function render_server_side_css() {

	if ( ! ( function_exists( 'get_block_templates' ) && function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() && current_theme_supports( 'block-templates' ) ) ) {
		return;
	}

	global $_wp_current_template_content;

	$content         = '';
	$slugs           = array();

	$template_blocks = parse_blocks( $_wp_current_template_content );

	foreach ( $template_blocks as $template_block ) {
		if ( 'core/template-part' === $template_block['blockName'] ) {
			$slugs[] = $template_block['attrs']['slug'];
		}
	}

	$templates_parts = get_block_templates( array( 'slugs__in' => $slugs ), 'wp_template_part' );

	foreach ( $templates_parts as $templates_part ) {
		if ( isset( $templates_part->content ) && isset( $templates_part->slug ) && in_array( $templates_part->slug, $slugs ) ) {
			$content .= $templates_part->content;
		}
	}

	$content .= $_wp_current_template_content;

	if ( function_exists( 'has_blocks' ) && has_blocks( get_the_ID() ) ) {

		global $post;

		if ( ! is_object( $post ) ) {
			return;
		}

		$content .= get_post_field( 'post_content', get_the_ID() );

		$blocks = parse_blocks( $content );

		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
			return;
		}

		$css = cycle_through_blocks( $blocks, $post->ID );

		if ( empty( $css ) ) {
			return;
		}

		$style  = "\n" . '<style id="vayu-block-css">' . "\n";
		$style .= $css;
		$style .= "\n" . '</style>' . "\n";

		echo $style; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	}
}


function enqueue_google_fonts($font_family_string)
{
    $font_families = explode(',', $font_family_string);
    $font_family_string = str_replace(' ', '+', implode('|', $font_families));
    wp_enqueue_style('th-blocks-google-fonts-' . $font_family_string, "https://fonts.googleapis.com/css?family=$font_family_string&display=swap", array(), null);
}

function cycle_through_blocks( $blocks, $post_id ) {

	$css = '';

	foreach ( $blocks as $block ) {
		
		if ( $block['blockName'] === 'vayu-blocks/advance-heading' ) {
			   if ( isset($block['attrs']['fontFamily'] ) ){
				  enqueue_google_fonts($block['attrs']['fontFamily']);
			    }
                $css .=advance_heading_style($block['attrs']);
		} 

		if ( $block['blockName'] === 'vayu-blocks/advance-container' ) {
			 $css .=advance_container_style($block['attrs']);
	    } 

		if ( $block['blockName'] === 'vayu-blocks/advance-product' ){

			if ( isset($block['attrs']['tabfontFamily'] ) ){
				enqueue_google_fonts($block['attrs']['tabfontFamily']);
			  }

			if ( isset($block['attrs']['catfontFamily'] ) ){
				enqueue_google_fonts($block['attrs']['catfontFamily']);
			  } 
			
			if ( isset($block['attrs']['titlefontFamily'] ) ){
				enqueue_google_fonts($block['attrs']['titlefontFamily']);
			  }
			
			if ( isset($block['attrs']['pricefontFamily'] ) ){
				enqueue_google_fonts($block['attrs']['pricefontFamily']);
			  }
			
			if ( isset($block['attrs']['buttonfontFamily'] ) ){
				enqueue_google_fonts($block['attrs']['buttonfontFamily']);
			  }

			$css .=advance_product_tab_style($block['attrs']);
	     } 

		if ( $block['blockName'] === 'vayu-blocks/advance-spacer' ) {
			 $css .=advance_spacer_style($block['attrs']);
	 	} 

		 if ( $block['blockName'] === 'vayu-blocks/advance-button' ) {

			if ( isset($block['attrs']['fontFamily'] ) ){
				enqueue_google_fonts($block['attrs']['fontFamily']);
			  }

			 $css .=advance_button_style($block['attrs']);
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

function hex2rgba( $color, $opacity = false ) {

	$default = 'rgb(0,0,0)';

	if ( empty( $color ) ) {
		return $default;
	}

	if ( '#' == $color[0] ) {
		$color = substr( $color, 1 );
	}

	if ( strlen( $color ) == 6 ) {
		$hex = array( $color[0] . $color[1], $color[2] . $color[3], $color[4] . $color[5] );
	} elseif ( strlen( $color ) == 3 ) {
		$hex = array( $color[0] . $color[0], $color[1] . $color[1], $color[2] . $color[2] );
	} else {
		return $default;
	}

	$rgb = array_map( 'hexdec', $hex );


	if ( $opacity >= 0 ) {

		$opacity = $opacity / 100;
		
		$output = 'rgba( ' . implode( ',', $rgb ) . ',' . $opacity . ' )';

	} else {

		$output = 'rgb( ' . implode( ',', $rgb ) . ' )';

	}

	return $output;
}