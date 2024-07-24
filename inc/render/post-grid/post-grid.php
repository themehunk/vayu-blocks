<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}
global $post_grid_attributes;

class VayuBlocksPostGrid {
    private $attr;
    private $query;

    public function __construct($attr) {
        $this->attr = $attr;
        $default_attributes = include('defaultattributes.php');
        $this->attr = array_merge($default_attributes, $attr);  

        global $post_grid_attributes;
        $post_grid_attributes = $this->attr;
    }

    public function get_posts($paged = 1) {
        $device_type = $this->get_device_type();
        $columns = $this->attr['pg_postLayoutColumns']; // Default value
        $rows = $this->attr['pg_numberOfRow']; // Default value
    
        // Adjust columns and rows based on device type
        if ($device_type === 'Desktop') {
            $columns = isset($this->attr['pg_postLayoutColumns']) ? $this->attr['pg_postLayoutColumns'] : $columns;
            $rows = isset($this->attr['pg_numberOfRow']) ? $this->attr['pg_numberOfRow'] : $rows;
        } else if ($device_type === 'Tablet') {
            $columns = isset($this->attr['pg_postLayoutColumnsTablet']) ? $this->attr['pg_postLayoutColumnsTablet'] : 2;
            $rows = isset($this->attr['pg_numberOfRowTablet']) ? $this->attr['pg_numberOfRowTablet'] : $rows;
        } else if ($device_type === 'Mobile') {
            $columns = isset($this->attr['pg_postLayoutColumnsMobile']) ? $this->attr['pg_postLayoutColumnsMobile'] : 1;
            $rows = isset($this->attr['pg_numberOfRowMobile']) ? $this->attr['pg_numberOfRowMobile'] : $rows;
        }
    
        // Default sorting
        $sortByOrder = !empty($this->attr['sortByOrder']) ? $this->attr['sortByOrder'] : 'desc'; // Default to descending
        $sortByField = !empty($this->attr['sortByField']) ? $this->attr['sortByField'] : 'date'; // Default to 'date'
    
        // Initial query arguments
        $args = array(
            'post_type' => 'post',
            'posts_per_page' => $columns * $rows,
            'orderby' => $sortByField, // Sorting field
            'order' => $sortByOrder,   // Sorting order
        );
    
        if (!empty($this->attr['pg_selectedCategory'])) {
            $args['cat'] = $this->attr['pg_selectedCategory'];
        }
    
        if (!empty($this->attr['pg_selectedTag'])) {
            $args['tag_id'] = $this->attr['pg_selectedTag'];
        }
    
        // Filtering by categories using tax_query for AND condition
        if (!empty($this->attr['selectedCategories']) && is_array($this->attr['selectedCategories'])) {
            $selectedCategoryNames = array_map('sanitize_text_field', $this->attr['selectedCategories']); // Sanitize input
            $category_ids = array();
    
            foreach ($selectedCategoryNames as $category_name) {
                $category = get_term_by('name', $category_name, 'category');
                if ($category) {
                    $category_ids[] = $category->term_id;
                }
            }
    
            if (!empty($category_ids)) {
                $args['tax_query'] = array(
                    array(
                        'taxonomy' => 'category',
                        'field'    => 'term_id',
                        'terms'    => $category_ids,
                        'operator' => 'AND',
                    ),
                );
            }
        }
    
        // Filtering by tags
        if (!empty($this->attr['pg_selectedTag'])) {
            $args['tag_id'] = $this->attr['pg_selectedTag']; // Use 'tag_id' for single tag
        }
    
        // Fetch all posts
        $all_posts_query = new WP_Query($args);
        $all_posts = $all_posts_query->posts;

    
       // Apply featured image filter if applicable
       if (!empty($this->attr['pg_featuredImageOnly']) && $this->attr['pg_featuredImageOnly']) {
            // Filter posts to only include those with a featured image
            $filtered_posts = array_filter($all_posts, function($post) {
                return has_post_thumbnail($post->ID);
            });
        
            // Count filtered posts
            $filtered_posts_count = count($filtered_posts);
        
            // Pagination arguments
            $args['posts_per_page'] = $columns * $rows; // Items per page
            $args['paged'] = $paged; // Current page
        
            // Calculate total pages based on filtered count
            $total_pages = ceil($filtered_posts_count / $args['posts_per_page']);
        
            // If current page is greater than the total number of pages, set to the last page
            if ($paged > $total_pages) {
                $paged = $total_pages;
                $args['paged'] = $paged;
            }
        
            // Adjust query arguments for pagination
            $args['post__in'] = wp_list_pluck($filtered_posts, 'ID'); // Filtered post IDs
            $args['post__not_in'] = array(); // Ensure not to exclude any posts
        
            // Ensure `paged` argument is correct for WP_Query
            $args['paged'] = $paged;
        
            // Create a new WP_Query with updated arguments
            $query = new WP_Query($args);
        
            // Return the filtered WP_Query object
            return $query;
        }
        else {
            // If no featured image filter is applied, paginate as usual
            $args['posts_per_page'] = $columns * $rows; // Items per page
            $args['paged'] = $paged; // Current page
    
            $query = new WP_Query($args);
    
            return $query; // Return the WP_Query object
        }
    }
    
    public function render($query) {
        ob_start();
            while ($query->have_posts()) {
                $query->the_post();
                $this->render_post();
            }
        return ob_get_clean();
    }

    public function render_pagination($query, $paged) {
        if (!isset($this->attr['showpagination']) || !$this->attr['showpagination']) {
            return ''; // Return an empty string if pagination should not be shown
        }
        // Pagination settings
        $pagination_args = array(
            'total'         => $query->max_num_pages,
            'current'       => max(1,$paged),
            'prev_next'     => true,
            'prev_text' => '<span class="page-numbers page-numbers-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">&laquo;</span>',
            'next_text' => '<span class="page-numbers page-numbers-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">&raquo;</span>',
            'end_size'      => 2,  // Number of page numbers to show at the beginning and end
            'mid_size'      => 1,  // Number of page numbers to show around the current page
            'type'          => 'plain',
            'before_page_number' => '<span class="page-numbers page-numbers-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">',
            'after_page_number' => '</span>',
        );
    
        // Generate pagination links
        $pagination_links = paginate_links($pagination_args);

        // Wrap pagination links in a div
        $pagination = '<div class="pagination" style="margin-top: 20px; text-align: center;">';
        $pagination .= $pagination_links;
        $pagination .= '</div>';
        // Add a hidden input for max pages
        $pagination .= '<input type="hidden" id="max-pages" value="' . $query->max_num_pages . '">';
    
        return $pagination;
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

        $category_links = array();
        if (!empty($categories)) {
            foreach ($categories as $category) {
                $category_links[] = array(
                    'name' => $category->name,
                    'link' => get_category_link($category->term_id)
                );
            }
        }

        $tag_links = array();
        if (!empty($tags)) {
            foreach ($tags as $tag) {
                $tag_links[] = array(
                    'name' => $tag->name,
                    'link' => get_tag_link($tag->term_id)
                );
            }
        }
        
        echo '<div class="th-post-grid-inline th-post-grid-inline-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';
        $this->render_featured_image($post_id, $category_names);
        $this ->render_category($category_links);
        $this->render_title($post_title, $post_permalink);
        $this->render_author_and_date($post_author_id, $post_author_name, $post_date);
        $this->render_excerpt();
        $this->render_full_content();
        $this->render_tags($tag_links);
       

        echo '</div>';
    }

    private function render_featured_image($post_id) {
        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $FeaturedImage = isset($this->attr['pg_showFeaturedImage']) ? $this->attr['pg_showFeaturedImage'] : true;
        } else if ($device_type === 'Tablet') {
           $FeaturedImage = isset($this->attr['pg_showFeaturedImageTablet']) ? $this->attr['pg_showFeaturedImageTablet'] : true;
        } else if ($device_type === 'Mobile') {
           $FeaturedImage = isset($this->attr['pg_showFeaturedImageMobile']) ? $this->attr['pg_showFeaturedImageMobile'] : true;
        }

        if ($FeaturedImage) {
            $featured_image_url = get_the_post_thumbnail_url($post_id, 'full');
            echo '<div class="post-grid-featured-image">
                    <img src="' . esc_url($featured_image_url) . '" class="post-grid-image">
                  </div>';

        }
    }

    private function render_category($categories) {
        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $showCategories = isset($this->attr['pg_showCategories']) ? $this->attr['pg_showCategories'] : true;
        } else if ($device_type === 'Tablet') {
            $showCategories = isset($this->attr['pg_showCategoriesTablet']) ? $this->attr['pg_showCategoriesTablet'] : true;
        } else if ($device_type === 'Mobile') {
            $showCategories = isset($this->attr['pg_showCategoriesMobile']) ? $this->attr['pg_showCategoriesMobile'] : true;
        }
    
        // Check pg_numberOfCategories attribute to limit displayed categories
        $numberOfCategories = isset($this->attr['pg_numberOfCategories']) ? intval($this->attr['pg_numberOfCategories']) : 1;
    
        if ($showCategories) {
            echo '<div class="post-grid-category-style-container">';
            foreach (array_slice($categories, 0, $numberOfCategories) as $category) {
                // Expect $category to be an associative array with 'name' and 'link'
                echo '<a href="' . esc_url($category['link']) . '" class="post-grid-category-style-new">' . esc_html($category['name']) . '</a>';
            }
            echo '</div>';
        }
    }
    
    private function render_title($post_title, $post_permalink) {
        echo '<div >';
        echo '<a href="' . esc_url($post_permalink) . '"style="text-decoration: none;">';
        
        if (isset($this->attr['pg_blockTitleTag'])) {
            echo '<' . esc_attr($this->attr['pg_blockTitleTag']) . '>';
        } else {
            echo '<h4>';
        }
        
        echo esc_html($post_title);
        
        if (isset($this->attr['pg_blockTitleTag'])) {
            echo '</' . esc_attr($this->attr['pg_blockTitleTag']) . '>';
        } else {
            echo '</h4>';
        }
        
        echo '</a>';
        echo '</div>';
    }
    
    private function render_author_and_date($post_author_id, $post_author_name, $post_date) {
        $device_type = $this->get_device_type();
        $showAuthor = true; // Default value for showing author
    
        if ($device_type === 'Desktop') {
            $showAuthor = isset($this->attr['pg_showAuthor']) ? $this->attr['pg_showAuthor'] : $showAuthor;
        } else if ($device_type === 'Tablet') {
            $showAuthor = isset($this->attr['pg_showAuthorTablet']) ? $this->attr['pg_showAuthorTablet'] : $showAuthor;
        } else if ($device_type === 'Mobile') {
            $showAuthor = isset($this->attr['pg_showAuthorMobile']) ? $this->attr['pg_showAuthorMobile'] : $showAuthor;
        }
    
        $showDate = true; // Default value for showing date
    
        if ($device_type === 'Desktop') {
            $showDate = isset($this->attr['pg_showDate']) ? $this->attr['pg_showDate'] : $showDate;
        } else if ($device_type === 'Tablet') {
           $showDate = isset($this->attr['pg_showDateTablet']) ? $this->attr['pg_showDateTablet'] : $showDate;
        } else if ($device_type === 'Mobile') {
           $showDate = isset($this->attr['pg_showDateMobile']) ? $this->attr['pg_showDateMobile'] : $showDate;
        }
    
        if ($showAuthor || $showDate) {
            echo '<div class="post-grid-author-date-container">';
    
            if ($showAuthor) {
                echo '<img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Author Logo" class="post-grid-author-image">';
                echo '<a class="post-grid-author-span" href="' . esc_url(get_author_posts_url($post_author_id)) . '">';
                echo esc_html($post_author_name);
                echo '</a>';
            }
    
            if ($showDate) {
                echo '<img src="https://cdn-icons-png.flaticon.com/512/2782/2782901.png" alt="Date Image" class="post-grid-date-image">';
                echo '<span class="post-grid-date-span">' . esc_html($post_date) . '</span>';
            }
    
            echo '</div>';
        }
    }
    
    private function render_excerpt() {
        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $excerpt = isset($this->attr['pg_showExcerpt']) ? $this->attr['pg_showExcerpt'] : false;
            $excerpt_length = isset($this->attr['pg_excerptWords']) ? $this->attr['pg_excerptWords'] : $excerpt_length;
            $excerpt_selector = isset($this->attr['pg_excerptSelector']) ? $this->attr['pg_excerptSelector'] : $excerpt_selector;
        } else if ($device_type === 'Tablet') {
            $excerpt = isset($this->attr['pg_showExcerptTablet']) ? $this->attr['pg_showExcerptTablet'] : false;
            $excerpt_length = isset($this->attr['pg_excerptWordsTablet']) ? $this->attr['pg_excerptWordsTablet'] : $excerpt_length;
            $excerpt_selector = isset($this->attr['pg_excerptSelectorTablet']) ? $this->attr['pg_excerptSelectorTablet'] : $excerpt_selector;
        } else if ($device_type === 'Mobile') {
            $excerpt = isset($this->attr['pg_showExcerptMobile']) ? $this->attr['pg_showExcerptMobile'] : false;
            $excerpt_length = isset($this->attr['pg_excerptWordsMobile']) ? $this->attr['pg_excerptWordsMobile'] : $excerpt_length;
            $excerpt_selector = isset($this->attr['pg_excerptSelectorMobile']) ? $this->attr['pg_excerptSelectorMobile'] : $excerpt_selector;
        }
       
        if ($excerpt) {
            echo '<div class=" post-grid-excerpt-view">' . wp_trim_words(get_the_excerpt(), $excerpt_length, $excerpt_selector) . '</div>';
        }
    }
    
    private function render_full_content() {
        
        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $FullContent = isset($this->attr['pg_showFullContent']) ? $this->attr['pg_showFullContent'] : false;
        } else if ($device_type === 'Tablet') {
           $FullContent = isset($this->attr['pg_showFullContentTablet']) ? $this->attr['pg_showFullContentTablet'] : false;
        } else if ($device_type === 'Mobile') {
           $FullContent = isset($this->attr['pg_showFullContentMobile']) ? $this->attr['pg_showFullContentMobile'] : false;
        }

        if ($FullContent) {
            // Get the content and strip HTML tags
            $content = get_the_content();
            $stripped_content = wp_strip_all_tags($content);
    
            // Wrap the stripped content in <p> tags
            $wrapped_content = '<p class="post-grid-excerpt-view">' . $stripped_content . '</p>';
    
            // Output the wrapped content
            echo $wrapped_content;
        }
    }
    
    private function render_tags($tags) {
        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $showTags = isset($this->attr['pg_showTags']) ? $this->attr['pg_showTags'] : false;
        } else if ($device_type === 'Tablet') {
            $showTags = isset($this->attr['pg_showTagTablet']) ? $this->attr['pg_showTagTablet'] : false;
        } else if ($device_type === 'Mobile') {
            $showTags = isset($this->attr['pg_showTagMobile']) ? $this->attr['pg_showTagMobile'] : false;
        }
    
        $numberOfTags = isset($this->attr['pg_numberOfTags']) ? intval($this->attr['pg_numberOfTags']) : 1;
    
        if ($showTags) {
            echo '<div class="post-grid-tag-style-conatiner">';
            foreach (array_slice($tags, 0, $numberOfTags) as $tag) {
                echo '<a href="' . esc_url($tag['link']) . '" class="post-grid-tag-style-new">' . esc_html($tag['name']) . '</a>';
            }
            echo '</div>';
        }
    }
    
    private function get_device_type() {
        $tablet_browser = 0;
        $mobile_browser = 0;
        
        if (preg_match('/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
            $tablet_browser++;
        }
        
        if (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
            $mobile_browser++;
        }
        
        if ((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml') > 0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {
            $mobile_browser++;
        }
        
        $mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'], 0, 4));
        $mobile_agents = array(
            'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
            'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
            'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
            'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
            'newt','noki','palm','pana','pant','phil','play','port','prox',
            'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
            'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
            'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
            'wapr','webc','winw','winw','xda ','xda-');
        
        if (in_array($mobile_ua,$mobile_agents)) {
            $mobile_browser++;
        }
        
        if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'opera mini') > 0) {
            $mobile_browser++;
            // Check for tablets on opera mini alternative headers
            $stock_ua = strtolower(isset($_SERVER['HTTP_X_OPERAMINI_PHONE_UA']) ? $_SERVER['HTTP_X_OPERAMINI_PHONE_UA'] : (isset($_SERVER['HTTP_DEVICE_STOCK_UA']) ? $_SERVER['HTTP_DEVICE_STOCK_UA'] : ''));
            if (preg_match('/(tablet|ipad|playbook)|(android(?!.*mobile))/i', $stock_ua)) {
                $tablet_browser++;
            }
        }
        
        if ($tablet_browser > 0) {
            return 'Tablet';
        } else if ($mobile_browser > 0) {
            return 'Mobile';
        } else {
            return 'Desktop';
        }
    }
    
}


function post_grid_render($attr) {
    $animated = isset($attr['className']) ? $attr['className'] : '';
    
    $renderer = new VayuBlocksPostGrid($attr);

    $query = $renderer->get_posts(1);

    if ($query->have_posts()) {
    
        $return =  '<div class="th-post-grid-wrapper th-post-grid-wrapper-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' ' . $animated . '">';

        $return .= $renderer->render($query);

        $return .= '</div>';

        // Add pagination outside the wrapper div
        $return .= '<div class="pagination">' . $renderer->render_pagination($query, 1) . '</div>';        // Render pagination controls

        wp_reset_postdata();
    } else {
        echo '<p>' . esc_html__('No posts found.', 'plugin-textdomain') . '</p>';
    }

    return $return;

} 

function enqueue_my_scripts() {
    wp_enqueue_script('my-script', plugins_url('../../../public/src//block/post-grid/view.js', __FILE__), array('jquery'), '1.0', true);

    global $post_grid_attributes; // Make sure this is set
    wp_localize_script('my-script', 'postGridAttributes', $post_grid_attributes);

    wp_localize_script('my-script', 'postGridAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php')
    ));
}

add_action('wp_enqueue_scripts', 'enqueue_my_scripts');


function load_posts() {
    if (!isset($_POST['page'])) {
        wp_die();
    }
    $paged = intval($_POST['page']);
    global $post_grid_attributes;

    if (isset($_POST['attr'])) {
        $post_grid_attributes = $_POST['attr'];
    }

    $renderer = new VayuBlocksPostGrid($post_grid_attributes);
    $query = $renderer->get_posts($paged);
   echo $renderer->render_pagination($query, $paged);
    echo $renderer->render($query);
   
    wp_die();
}

add_action('wp_ajax_load_posts', 'load_posts');
add_action('wp_ajax_nopriv_load_posts', 'load_posts');
