<?php 
function advance_block_query( $query, $block ) {
    // Check if the block is 'core/post-template'
    if ( isset( $block->name ) && 'core/post-template' === $block->name ) {
        // Get the content of the post where the block is used
        $post_id = get_the_ID();
        $post_content = get_post_field( 'post_content', $post_id );

        // Parse the post content into blocks
        $blocks = parse_blocks( $post_content );

        // Loop through the blocks to find the specific block
        foreach ( $blocks as $block_data ) {
            if ( 'vayu-blocks/advance-query-loop' === $block_data['blockName'] ) {
                $query_vars = isset( $block_data['attrs']['query'] ) ? $block_data['attrs']['query'] : array();

                // Modify the query parameters based on the attributes
                if ( isset( $query_vars['postType'] ) ) {
                    $query['post_type'] = $query_vars['postType'];
                }

                if ( isset( $query_vars['perPage'] ) ) {
                    $query['posts_per_page'] = $query_vars['perPage'];
                }

                if ( isset( $query_vars['order'] ) ) {
                    $query['order'] = $query_vars['order'];
                }

                if ( isset( $query_vars['orderBy'] ) ) {
                    $query['orderby'] = $query_vars['orderBy'];
                }

                // Add any other custom query modifications here
                break; // Exit the loop once the block is found and query is modified
            }
        }
    }

    return $query;
}
add_filter( 'query_loop_block_query_vars', 'advance_block_query', 10, 2 );
