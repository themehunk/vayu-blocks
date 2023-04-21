<?php

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


function cycle_through_blocks( $blocks, $post_id ) {

	$css = '';

	foreach ( $blocks as $block ) {
		
		if ( $block['blockName'] === 'themehunk-blocks/advance-heading' ) {
			    
			   if ( isset($block['attrs']['fontFamily'] ) ) {
				$font_families = explode( ',', $block['attrs']['fontFamily'] );
				$font_family_string = str_replace( ' ', '+', implode( '|', $font_families ) );
				wp_enqueue_style( 'th-blocks-google-fonts-' . $font_family_string, "https://fonts.googleapis.com/css?family=$font_family_string&display=swap", array(), null );
			    }
                $css .=advance_heading_style($block['attrs']);
    
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