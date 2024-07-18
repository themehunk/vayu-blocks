<?php
if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

class VayuBlocksPostGrid {
    private $attr;
    private $query;

    public function __construct($attr) {
        $this->attr = $attr;
        $default_attributes = include('defaultattributes.php');
        $this->attr = array_merge($default_attributes, $attr);  

        // add_action('wp_ajax_nopriv_load_posts', array($this, 'load_posts'));
        // add_action('wp_ajax_load_posts', array($this, 'load_posts'));
    }

    private function get_posts($paged = 1) {
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

        $args = array(
            'post_type' => 'post',
            'posts_per_page' => $columns * $rows,
            'paged' => $paged,
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
        $paged = get_query_var('paged') ? get_query_var('paged') : 1;
        $query = $this->get_posts($paged);

        if ($query->have_posts()) {
            $animated = isset($this->attr['className']) ? $this->attr['className'] : '';

            echo '<div class="th-post-grid-wrapper th-post-grid-wrapper-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . ' ' . $animated . '">';
            
            while ($query->have_posts()) {
                $query->the_post();
                $this->render_post();
            }

            echo '</div>';

            if (!isset($this->attr['showPagination']) || $this->attr['showPagination']) {
                echo '<div class="pagination" style="margin-top: 20px; text-align: center;">';
              
                echo paginate_links(array(
                    'total' => $query->max_num_pages,
                    'current' => $paged,
                    'prev_next' => true,
                    'type' => '', // Use 'list' type to generate <ul> instead of <span>
                    'prev_text' => '',
                    'next_text' => '',
                    'before_page_number' => '<span class="page-numbers-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">',
                    'after_page_number' => '</span>',
                ));
                echo '</div>';

                  // Add a hidden input field to store the total pages
                echo '<input type="hidden" id="max-pages" value="' . $query->max_num_pages . '">';
            }
            

            wp_reset_postdata();
        } else {
            echo '<p>' . esc_html__('No posts found.', 'plugin-textdomain') . '</p>';
        }

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
        $this ->render_category($category_names);
        $this->render_title($post_title, $post_permalink);
        $this->render_author_and_date($post_author_id, $post_author_name, $post_date);
        $this->render_excerpt();
        $this->render_full_content();
        $this->render_tags($tag_names);
       

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
                    <img src="' . esc_url($featured_image_url) . '" class="post-grid-image post-grid-image-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">
                  </div>';

        }
    }

    private function render_category( $category_names){

        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $Category = isset($this->attr['pg_showCategories']) ? $this->attr['pg_showCategories'] : true;
        } else if ($device_type === 'Tablet') {
           $Category = isset($this->attr['pg_showCategoriesTablet']) ? $this->attr['pg_showCategoriesTablet'] : true;
        } else if ($device_type === 'Mobile') {
           $Category = isset($this->attr['pg_showCategoriesMobile']) ? $this->attr['pg_showCategoriesMobile'] : true;
        }

        // Check pg_numberOfCategories attribute to limit displayed categories
        $numberOfCategories = isset($this->attr['pg_numberOfCategories']) ? intval($this->attr['pg_numberOfCategories']) : 1;

        if ($Category) {
            echo '<div>';
           foreach (array_slice($category_names, 0, $numberOfCategories) as $category_name) {
            echo '<button class="post-grid-category-style-new post-grid-category-style-new-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($category_name) . '</button>';
        }
            echo '</div>';
        }
    }

    private function render_title($post_title, $post_permalink) {
        $unique_id = esc_attr($this->attr['pg_posts'][0]['uniqueID']);
        
        echo '<div >';
        echo '<a href="' . esc_url($post_permalink) . '"style="text-decoration: none;">';
        
        if (isset($this->attr['pg_blockTitleTag'])) {
            echo '<' . esc_attr($this->attr['pg_blockTitleTag']) . ' class="post-grid-titletag post-grid-titletag-' . $unique_id . '">';
        } else {
            echo '<h4 class="post-grid-titletag post-grid-titletag-' . $unique_id . '">';
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
            echo '<div class="post-grid-author-date-container-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';
    
            if ($showAuthor) {
                echo '<img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="Author Logo" class="post-grid-author-image-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';
                echo '<a class="post-grid-author-span-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '" href="' . esc_url(get_author_posts_url($post_author_id)) . '">';
                echo esc_html($post_author_name);
                echo '</a>';
            }
    
            if ($showDate) {
                echo '<img src="https://cdn-icons-png.flaticon.com/512/2782/2782901.png" alt="Date Image" class="post-grid-date-image-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">';
                echo '<span class="post-grid-date-span-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($post_date) . '</span>';
            }
    
            echo '</div>';
        }
    }
    
    private function render_excerpt() {
        $device_type = $this->get_device_type();
        $excerpt = false; // Default value
        $excerpt_length = 15; // Default value
        $excerpt_selector = '...'; // Default value
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
            echo '<div class=" post-grid-excerpt-view-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . wp_trim_words(get_the_excerpt(), $excerpt_length, $excerpt_selector) . '</div>';
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
            $wrapped_content = '<p class="post-grid-excerpt-view-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . $stripped_content . '</p>';
    
            // Output the wrapped content
            echo $wrapped_content;
        }
    }
    
    private function render_tags($tag_names) {
        $device_type = $this->get_device_type();
        if ($device_type === 'Desktop') {
            $Tags = isset($this->attr['pg_showTags']) ? $this->attr['pg_showTags'] : false;
        } else if ($device_type === 'Tablet') {
           $Tags = isset($this->attr['pg_showTagTablet']) ? $this->attr['pg_showTagTablet'] : false;
        } else if ($device_type === 'Mobile') {
           $Tags = isset($this->attr['pg_showTagMobile']) ? $this->attr['pg_showTagMobile'] : false;
        }
        $numberOftags = isset($this->attr['pg_numberOftags']) ? intval($this->attr['pg_numberOftags']) : 1;

        if ($Tags) {
            echo '<div >';
            foreach (array_slice($tag_names, 0, $numberOftags) as $tag_name) {
                echo '<button class="post-grid-tag-style-new post-grid-tag-style-new-' . esc_attr($this->attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($tag_name) . '</button>';
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
    $renderer = new VayuBlocksPostGrid($attr);
    return $renderer->render();
} 


// function enqueue_my_scripts() {
//     wp_enqueue_script('my-script', plugins_url('./pagination.js', __FILE__), array('jquery'), '1.0', true);
// }

// add_action('wp_enqueue_scripts', 'enqueue_my_scripts');
