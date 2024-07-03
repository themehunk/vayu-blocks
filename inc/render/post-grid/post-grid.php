<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}



class VayuBlocksPostGrid {

    private $attr;
    private $query;

    public function __construct($attr) {
        $this->attr = $attr;
        $this->query = $this->get_posts();
    }

    private function get_posts() {
        $columns = isset($this->attr['pg_postLayoutColumns']) ? $this->attr['pg_postLayoutColumns'] : 3;
        $rows = isset($this->attr['pg_numberOfRow']) ? $this->attr['pg_numberOfRow'] : 2;

        $args = array(
            'post_type' => 'post',
            'posts_per_page' => $columns * $rows,
            'paged' => 1,
            'post_status' => 'publish',
        );

        if (!empty($this->attr['pg_selectedCategory'])) {
            $args['cat'] = $this->attr['pg_selectedCategory'];
        }

        if (!empty($this->attr['pg_selectedTag'])) {
            $args['tag_id'] = $this->attr['pg_selectedTag'];
        }

        return new WP_Query($args);
    }

    public function render() {
        ob_start();

        if ($this->query->have_posts()) {
            $animated = isset($this->attr['className']) ? $this->attr['className'] : '';

            echo '<div class="th-post-grid-wrapper th-post-grid-wrapper-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' ' . $animated . '">';

            while ($this->query->have_posts()) {
                $this->query->the_post();
                $this->render_post();
            }

            echo '</div>';
        } else {
            echo '<p>' . esc_html__('No posts found.', 'plugin-textdomain') . '</p>';
        }

        wp_reset_postdata();

        return ob_get_clean();
    }

    private function render_post() {
        $post_id = get_the_ID();
        $post_title = get_the_title();
        $post_permalink = get_permalink();
        $post_date = get_the_date();
        $post_author_id = get_the_author_meta('ID');
        $post_author_name = get_the_author();
        $categories = get_the_category();
        $category_names = !empty($categories) ? wp_list_pluck($categories, 'name') : array();
        $tags = get_the_tags();
        $tag_names = !empty($tags) ? wp_list_pluck($tags, 'name') : array();

        echo '<div class="th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';

        $this->render_featured_image($post_id, $category_names);
        $this->render_title($post_title, $post_permalink);
        $this->render_author_and_date($post_author_id, $post_author_name, $post_date);
        $this->render_excerpt();
        $this->render_full_content();
        $this->render_tags($tag_names);

        echo '</div>';
    }

    private function render_featured_image($post_id, $category_names) {
        if (!isset($this->attr['pg_showFeaturedImage'])) {
            $featured_image_url = get_the_post_thumbnail_url($post_id, 'full');
            echo '<div class="post-grid-featured-image">
                    <img src="' . esc_url($featured_image_url) . '" class="post-grid-image th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-image-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">
                  </div>';

            if (!isset($this->attr['pg_showCategories']) && !isset($this->attr['pg_showCategoriesOnImage'])) {
                echo '<div class="post-grid-category-onimage">';
                foreach ($category_names as $category_name) {
                    echo '<a class="post-grid-category-styles post-grid-category-styles-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($category_name) . '</a>';
                }
                echo '</div>';
            }
        }

        if (!isset($this->attr['pg_showCategories']) && isset($this->attr['pg_showCategoriesOnImage'])) {
            echo '<div class="post-grid-only-category-not-image th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-only-category-not-image-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';
            foreach ($category_names as $category_name) {
                echo '<button class="post-grid-category-style-new post-grid-category-style-new' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($category_name) . '</button>';
            }
            echo '</div>';
        }
    }

    private function render_title($post_title, $post_permalink) {
        echo '<div class="post-grid-titletag th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-titletag-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';
        if (isset($this->attr['pg_blockTitleTag'])) {
            echo '<' . esc_attr($this->attr['pg_blockTitleTag']) . ' class="post-grid-title-size">';
        } else {
            echo '<h4 class="post-grid-title-size">';
        }
        echo '<a class="post-grid-titletag-anchor" href="' . esc_url($post_permalink) . '">' . esc_html($post_title) . '</a>';
        if (isset($this->attr['pg_blockTitleTag'])) {
            echo '</' . esc_attr($this->attr['pg_blockTitleTag']) . '>';
        } else {
            echo '</h4>';
        }
        echo '</div>';
    }

    private function render_author_and_date($post_author_id, $post_author_name, $post_date) {
        if (!isset($this->attr['pg_showAuthor']) || $this->attr['pg_showAuthor']) {
            echo '<div class="post_grid_author-and-date">';

            if (!isset($this->attr['pg_showAuthor']) || $this->attr['pg_showAuthor'] === true) {
                echo '<div class="post-grid-only-show-author">';
                echo '<div class="post-grid-only-show-author-div-new th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-only-show-author-div-new-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">
                        <img src="https://tinyurl.com/4tu8dsee" alt="Author Logo" class="post-grid-author-image">
                      </div>
                      <div class="post-grid-author-name-main">
                      <a class="post-grid-author-name-main post-grid-author-name th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-author-name-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '" href="' . esc_url(get_author_posts_url($post_author_id)) . '">
                          ' . esc_html($post_author_name) . '
                      </a>
                      </div>
                      </div>';
            }

            if (!isset($this->attr['pg_showDate']) || $this->attr['pg_showDate'] === true) {
                echo '<span class="post-grid-date-author-span th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-date-author-span-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($post_date) . '</span>';
            }

            echo '</div>';
        }

        if (isset($this->attr['pg_showAuthor']) && $this->attr['pg_showAuthor'] === false) {
            if ((!isset($this->attr['pg_showAuthor']) || $this->attr['pg_showAuthor'] === false) && 
                (!isset($this->attr['pg_showAuthor']) || !isset($this->attr['pg_showDate']) || $this->attr['pg_showDate'])) {
                echo '<span style="border:none;" class="post-grid-date-author-span th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' post-grid-date-author-span-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($post_date) . '</span>';
            }
        }
    }

    private function render_excerpt() {
        if (isset($this->attr['pg_showExcerpt']) && $this->attr['pg_showExcerpt']) {
            $excerpt_length = isset($this->attr['pg_excerptWords']) ? esc_attr($this->attr['pg_excerptWords']) : 15;
            $excerpt_selector = isset($this->attr['pg_excerptSelector']) ? $this->attr['pg_excerptSelector'] : '...';
            echo '<div>' . wp_trim_words(get_the_excerpt(), $excerpt_length, $excerpt_selector) . '</div>';
        }
    }

    private function render_full_content() {
        if (isset($this->attr['pg_showFullContent']) && $this->attr['pg_showFullContent']) {
            echo '<div>' . get_the_content() . '</div>';
        }
    }

    private function render_tags($tag_names) {
        if (isset($this->attr['pg_showTags']) && $this->attr['pg_showTags'] && !empty($tag_names)) {
            echo '<div class="post-grid-tag-div">';
            foreach ($tag_names as $tag_name) {
                echo '<a class="post-grid-tag-style-new post-grid-tag-style-new-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($tag_name) . '</a>';
            }
            echo '</div>';
        }
    }
}

function post_grid_render($attr) {
    $renderer = new VayuBlocksPostGrid($attr);
    return $renderer->render();
}



// function vayu_blocks_post_grid_render_callback($attr) {

//     $columns = isset($attributes['pg_postLayoutColumns']) ? $attributes['pg_postLayoutColumns'] : 3;
//     $rows = isset($attributes['pg_numberOfRow']) ? $attributes['pg_numberOfRow'] : 2;

//     $args = array(
//         'post_type' => 'post',
//         'posts_per_page' => $columns * $rows,
//         'paged' => 1,
//         'post_status' => 'publish',
//     );

//     if (!empty($attr['pg_selectedCategory'])) {
//         $args['cat'] = $attr['pg_selectedCategory'];
//     }

//     if (!empty($attr['pg_selectedTag'])) {
//         $args['tag_id'] = $attr['pg_selectedTag'];
//     }
    

//     //  $parent_styles = generate_inline_styles($attr);
//     //  print_r($parent_styles);

//     // Query posts
//     $query = new WP_Query($args);
//     ob_start();


//     $animated = isset($attr['className'])?$attr['className']:'';

//     if ($query->have_posts()) {
//         echo '<div class="th-post-grid-wrapper th-post-grid-wrapper-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' '.$animated .' ">';

//         while ($query->have_posts()) {
//             $query->the_post();
    
//             // Get necessary post data
//             $post_id = get_the_ID();
//             $post_title = get_the_title();
//             $post_permalink = get_permalink();
//             $post_date = get_the_date();
//             $post_author_id = get_the_author_meta('ID');
//             $post_author_name = get_the_author();
    
//             // Get categories
//             $categories = get_the_category();
//             $category_names = !empty($categories) ? wp_list_pluck($categories, 'name') : array();
    
//             // Get tags
//             $tags = get_the_tags();
//             $tag_names = !empty($tags) ? wp_list_pluck($tags, 'name') : array();
    
    
//             // Output the post markup
      
//             echo '<div class="th-post-grid-inline th-post-grid-inline-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . '" >';
            
//             //Featured Image 
//             if (!isset($attr['pg_showFeaturedImage'])) {

//                 $featured_image_url = get_the_post_thumbnail_url($post_id, 'full');
                
//                 echo '<div class="post-grid-featured-image">
//                         <img src="' . esc_url($featured_image_url) . '" class="post-grid-image th-post-grid-inline th-post-grid-inline-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' post-grid-image-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' " 
//                         >
//                       </div>';
    
//                 if (!isset($attr['pg_showCategories']) && !isset($attr['pg_showCategoriesOnImage'])) {
//                     echo '<div class="post-grid-category-onimage" >';
//                     foreach ($category_names as $category_name) {
//                         echo '<a class="post-grid-category-styles post-grid-category-styles-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' ">' . esc_html($category_name) . '</a>';
//                     }
//                     echo '</div>';
//                 }
//             }
            
//             //"Execute the code if pg_showCategories is true and pg_showCategoriesOnImage is false"
//             if (!isset($attr['pg_showCategories'])){
               
//             if( (isset($attr['pg_showCategoriesOnImage'])) ){
//                 echo '<div class="post-grid-only-category-not-image th-post-grid-inline th-post-grid-inline-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . ' post-grid-only-category-not-image-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . '">';
            
//                 // Loop through category names
//                 foreach ($category_names as $category_name) {
//                     // Determine the unique ID or fallback to an empty string if not set
//                     $unique_id = isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '';
            
//                     // Output button for each category name with the determined unique ID
//                     echo '<button class="post-grid-category-style-new post-grid-category-style-new' . esc_attr($unique_id) . '">' . esc_html($category_name) . '</button>';
//                 }
            
//                 // Closing div
//                 echo '</div>';
//             }
//         }
            
            

//                 //TitleTag
//             echo '<div class="post-grid-titletag th-post-grid-inline th-post-grid-inline-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . ' post-grid-titletag-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . '" >';

//                     if (isset($attr['pg_blockTitleTag'])) {
//                         echo '<' . esc_attr($attr['pg_blockTitleTag']) . ' class="post-grid-title-size">';
//                     } else {
//                         echo '<h4 class="post-grid-title-size">';
//                     }

//                     echo '<a class="post-grid-titletag-anchor" href="' . esc_url($post_permalink) . '">' . esc_html($post_title) . '</a>';

//                     if (isset($attr['pg_blockTitleTag'])) {
//                         echo '</' . esc_attr($attr['pg_blockTitleTag']) . '>';
//                     } else {
//                         echo '</h4>';
//                     }

//                     echo '</div>';

 
//                 if (!isset($attr['pg_showAuthor']) || $attr['pg_showAuthor']) {
//                     echo '<div class="post_grid_author-and-date">';

//                     // Display date if showDate is true

//                     // Display author information if showAuthor is true
//                     if (!isset($attr['pg_showAuthor']) || $attr['pg_showAuthor'] === true) {
//                         echo '<div class="post-grid-only-show-author">';
//                         // Author Image and Name
//                         echo '<div class="post-grid-only-show-author-div-new th-post-grid-inline th-post-grid-inline-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . ' post-grid-only-show-author-div-new-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . '">
//                                     <img src="https://tinyurl.com/4tu8dsee" alt="Author Logo" class="post-grid-author-image">
//                                 </div>
//                                 <div class="post-grid-author-name-main">';

//                         // Author Name Link
//                         echo '<a class="post-grid-author-name-main post-grid-author-name th-post-grid-inline th-post-grid-inline-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . ' post-grid-author-name-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . '" href="' . esc_url(get_author_posts_url($post_author_id)) . '">
//                                     ' . esc_html($post_author_name) . '
//                                 </a>';

//                         echo '</div>'; // Closing post-grid-author-name-main
//                         echo '</div>'; // Closing post-grid-only-show-author
//                     }

//                     if (!isset($attr['pg_showDate']) || $attr['pg_showDate']===true) {
                        
//                         echo '<span class="post-grid-date-author-span th-post-grid-inline th-post-grid-inline-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . ' post-grid-date-author-span-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . '">' . esc_html($post_date) . '</span>';
//                     }

//                     echo '</div>'; // Closing post_grid_author-and-date
//             }

//             //only for date
//             if(isset($attr['pg_showAuthor']) && $attr['pg_showAuthor'] === false){

//                 if ((!isset($attr['pg_showAuthor']) || $attr['pg_showAuthor'] === false) && 
//                 (!isset($attr['pg_showAuthor']) || !isset($attr['pg_showDate']) || $attr['pg_showDate'])) {
//                 // Display the date span only when:
//                 // - pg_showAuthor is explicitly false
//                 // - AND (pg_showDate is explicitly true or not set)
            
//                 echo '<span style="border:none;" class="post-grid-date-author-span th-post-grid-inline th-post-grid-inline-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . ' post-grid-date-author-span-' . esc_attr(isset($attr['pg_posts'][0]['uniqueID']) ? $attr['pg_posts'][0]['uniqueID'] : '') . '">' . esc_html($post_date) . '</span>';
//             }
//             }
            
//             //Excerpt Content
//             if (isset($attr['pg_showExcerpt']) && $attr['pg_showExcerpt']) {
//                 $excerpt_length = isset($attr['pg_excerptWords']) ? esc_attr($attr['pg_excerptWords']) : 15;
//                 $excerpt_selector = isset($attr['pg_excerptSelector']) ? $attr['pg_excerptSelector'] : '...';
            
//                 echo '<div>' . wp_trim_words(get_the_excerpt(), $excerpt_length, $excerpt_selector) . '</div>';
//             }
            
//             //Full content
//             if (isset($attr['pg_showFullContent']) && $attr['pg_showFullContent']) {
//                 echo '<div>' . get_the_content() . '</div>';
//             }
            

//             //tag
//             if (isset($attr['pg_showTags']) && $attr['pg_showTags'] && !empty($tag_names)) {
//                 echo '<div class="post-grid-tag-div">';
//                 foreach ($tag_names as $tag_name) {
//                     echo '<a class="post-grid-tag-style-new post-grid-tag-style-new-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($tag_name) . '</a>';
//                 }
//                 echo '</div>';
//             }
            
    
//             echo '</div>'; // Close post div
//         }
    
//         echo '</div>'; // Close parent div
//     } else {
//         echo '<p>' . esc_html__('No posts found.', 'plugin-textdomain') . '</p>';
//     }
   
//     wp_reset_postdata();

//     return ob_get_clean();
// }

