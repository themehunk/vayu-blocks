<?php 
// function vayu_query_looop_customize_query_block( $query, $block ) {
//     // Ensure this only affects our custom variation
//     if ( isset( $block['attrs']['namespace'] ) && 'vayu-blocks/advance-query-loop-block' === $block['attrs']['namespace'] ) {
//         // Modify query parameters as needed
//         $query['post_type']      = $block['attrs']['query']['postType'];
//         $query['posts_per_page'] = $block['attrs']['query']['perPage'];
//         $query['order']          = $block['attrs']['query']['order'];
//         $query['orderby']        = $block['attrs']['query']['orderBy'];
//     }

//     return $query;
// }
// // Add the filter to customize query parameters for the core/query block
// add_filter( 'query_loop_block_query_vars', 'vayu_query_looop_customize_query_block', 10, 2 );