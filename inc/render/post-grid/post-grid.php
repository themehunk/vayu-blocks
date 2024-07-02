<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function vayu_blocks_post_grid_render_callback($attr) {
 
    $default_attr = array(
        'pg_authorImageScale' => 0.7,
        'pg_authorTextColor' => 'gray',
        'pg_authorTextSize' => 14,
        'pg_backgroundColor' => '#F4F3F3',
        'pg_backgroundType' => 'solid',
        'pg_blockTitleColor' => '#333',
        'pg_blockTitleSize' => 24,
        'pg_blockTitleTag' => 'h2',
        'pg_categoryBackgroundColor' => '#808080',
        'pg_categoryPaddingTop' => 8,
        'pg_categoryPaddingRight' => 10,
        'pg_categoryPaddingBottom' => 8,
        'pg_categoryPaddingLeft' => 10,
        'pg_categoryTextColor' => '#333',
        'pg_categoryTextSize' => 12,
        'pg_categoryBorderRadius' => 2,
        'pg_categoryBorderColor' => 'white',
        'pg_categoryBorder' => 1,
        'pg_dateTextSize' => 14,
        'pg_dateColor' => 'gray',
        'pg_showDateMenu' => false,
        'pg_excerptSelector' => '[...]',
        'pg_excerptWords' => 15,
        'pg_gap' => 20,
        'pg_gapup' => 37,
        'pg_imageBorderRadius' => 4,
        'pg_layoutBorder' => 1,
        'pg_layoutBorderColor' => '#D3D3D3',
        'pg_layoutPaddingTop' => 2,
        'pg_layoutPaddingRight' => 2,
        'pg_layoutPaddingBottom' => 2,
        'pg_layoutPaddingLeft' => 2,
        'buttonpaddingUnit' => 'px',
        'pg_lineHeight' => 1.4,
        'pg_numberOfRow' => 2,
        'pg_postBorderRadius' => 5,
        'pg_postLayoutColumns' => 3,
        'pg_posts' => array(),
        'pg_selectedCategory' => 0,
        'pg_selectedTag' => '',
        'pg_showAuthor' => true,
        'pg_showCategories' => true,
        'pg_showCategoriesOnImage' => true,
        'pg_showDate' => true,
        'pg_showExcerpt' => false,
        'pg_showFeaturedImage' => true,
        'pg_showFullContent' => false,
        'pg_showTags' => false,
        'pg_showcategoriesMenu' => false,
        'pg_showTagsMenu' => false,
        'pg_showAuthorMenu' => true,
        'pg_tagBackgroundColor' => '#808080',
        'pg_tagPaddingTop' => 8,
        'pg_tagPaddingRight' => 10,
        'pg_tagPaddingBottom' => 8,
        'pg_tagPaddingLeft' => 10,
        'tagpaddingUnit' => 'px',
        'pg_tagTextColor' => '#D3D3D3',
        'pg_tagTextSize' => 12,
        'pg_textColor' => '#808080',
        'pg_textSize' => 16,
        'pg_tagBorderRadius' => 2,
        'pg_tagBorderColor' => 'white',
        'pg_tagBorder' => 1,
        'buttonpaddingUnit' => 'px',
        'layoutborderType' => 'solid',
        'categoryborderType' => 'solid',
        'tagborderType' => 'solid',
        'layout_backgroundType' => 'solid',
        'layout_backgroundColor' => '',
        'layout_backgroundImage' => null,
        'layout_backgroundGradient' => '',
        'layout_backgroundPosition' => null,
        'layout_backgroundAttachment' => 'scroll',
        'layout_backgroundRepeat' => 'no-repeat',
        'layout_backgroundSize' => 'cover',
        'category_backgroundType' => 'solid',
        'category_backgroundColor' => '',
        'category_backgroundImage' => null,
        'category_backgroundGradient' => '',
        'category_backgroundPosition' => null,
        'category_backgroundAttachment' => 'scroll',
        'category_backgroundRepeat' => 'no-repeat',
        'category_backgroundSize' => 'cover',
        'tag_backgroundType' => 'solid',
        'tag_backgroundColor' => '',
        'tag_backgroundImage' => null,
        'tag_backgroundGradient' => '',
        'tag_backgroundPosition' => null,
        'tag_backgroundAttachment' => 'scroll',
        'tag_backgroundRepeat' => 'no-repeat',
        'tag_backgroundSize' => 'cover',
        'pg_categoryBorderRadius' => 2,
        'pg_categoryBorderColor' => 'white',
        'pg_categoryBorder' => 1,
        'pg_dateTextSize' => 14,
        'pg_dateColor' => 'gray',
        'pg_showDateMenu' => false,
        'pg_excerptSelector' => '[...]',
        'pg_excerptWords' => 15,
        'pg_gap' => 20,
        'pg_gapup' => 37,
        'pg_imageBorderRadius' => 4,
        'pg_layoutBorder' => 1,
        'pg_layoutBorderColor' => '#D3D3D3',
        'pg_layoutPaddingTop' => 2,
        'pg_layoutPaddingRight' => 2,
        'pg_layoutPaddingBottom' => 2,
        'pg_layoutPaddingLeft' => 2,
        'buttonpaddingUnit' => 'px',
        'pg_lineHeight' => 1.4,
        'pg_numberOfRow' => 2,
        'pg_postBorderRadius' => 5,
        'pg_postLayoutColumns' => 3,
        'pg_posts' => array(),
        'pg_selectedCategory' => 0,
        'pg_selectedTag' => '',
        'pg_showAuthor' => true,
        'pg_showCategories' => true,
        'pg_showCategoriesOnImage' => true,
        'pg_showDate' => true,
        'pg_showExcerpt' => false,
        'pg_showFeaturedImage' => true,
        'pg_showFullContent' => false,
        'pg_showTags' => false,
        'pg_showcategoriesMenu' => false,
        'pg_showTagsMenu' => false,
        'pg_showAuthorMenu' => true,
        'pg_tagBackgroundColor' => '#808080',
        'pg_tagPaddingTop' => 8,
        'pg_tagPaddingRight' => 10,
        'pg_tagPaddingBottom' => 8,
        'pg_tagPaddingLeft' => 10,
        'tagpaddingUnit' => 'px',
        'pg_tagTextColor' => '#D3D3D3',
        'pg_tagTextSize' => 12,
        'pg_textColor' => '#808080',
        'pg_textSize' => 16,
        'pg_tagBorderRadius' => 2,
        'pg_tagBorderColor' => 'white',
        'pg_tagBorder' => 1,
        'buttonpaddingUnit' => 'px',
        'layoutborderType' => 'solid',
        'categoryborderType' => 'solid',
        'tagborderType' => 'solid',
        'layout_backgroundType' => 'solid',
        'layout_backgroundColor' => '',
        'layout_backgroundImage' => null,
        'layout_backgroundGradient' => '',
        'layout_backgroundPosition' => null,
        'layout_backgroundAttachment' => 'scroll',
        'layout_backgroundRepeat' => 'no-repeat',
        'layout_backgroundSize' => 'cover',
        'category_backgroundType' => 'solid',
        'category_backgroundColor' => '',
        'category_backgroundImage' => null,
        'categorypaddingUnit' => 'px',
        'category_backgroundGradient' => '',
        'category_backgroundPosition' => null,
        'category_backgroundAttachment' => 'scroll',
        'category_backgroundRepeat' => 'no-repeat',
        'category_backgroundSize' => 'cover',
        'tag_backgroundType' => 'solid',
        'tag_backgroundColor' => '',
        'tag_backgroundImage' => null,
        'tag_backgroundGradient' => '',
        'tag_backgroundPosition' => null,
        'tag_backgroundAttachment' => 'scroll',
        'tag_backgroundRepeat' => 'no-repeat',
        'tag_backgroundSize' => 'cover',
        'layout_backgroundType' => 'solid',
        'layout_backgroundColor' => '',
        'layout_backgroundImage' => null,
        'layout_backgroundGradient' => '',
        'layout_backgroundPosition' => null,
        'layout_backgroundAttachment' => 'scroll',
        'layout_backgroundRepeat' => 'no-repeat',
        'layout_backgroundSize' => 'cover',
        'category_backgroundType' => 'solid',
        'category_backgroundColor' => '',
        'category_backgroundImage' => null,
        'category_backgroundGradient' => '',
        'category_backgroundPosition' => null,
        'category_backgroundAttachment' => 'scroll',
        'category_backgroundRepeat' => 'no-repeat',
        'category_backgroundSize' => 'cover',
        'tag_backgroundType' => 'solid',
        'tag_backgroundColor' => '',
        'tag_backgroundImage' => null,
        'tag_backgroundGradient' => '',
        'tag_backgroundPosition' => null,
        'tag_backgroundAttachment' => 'scroll',
        'tag_backgroundRepeat' => 'no-repeat',
        'tag_backgroundSize' => 'cover',

        'widthType' => 'default',
        'customWidthUnit' => 'px',
        'customWidth' => 0,
        'paddingUnit' => 'px',
        'paddingTop' => 0,
        'paddingBottom' => 0,
        'paddingLeft' => 0,
        'paddingRight' => 0,
        'marginUnit' => 'px',
        'marginTop' => 0,
        'marginBottom' => 0,
        'marginLeft' => 0,
        'marginRight' => 0,
        'position' => 'relative',
        'horizontalOrientation' => 'left',
        'horizontalOrientationOffsetUnit' => 'px',
        'horizontalOrientationOffsetRightUnit' => 'px',
        'horizontalOrientationOffset' => 0,
        'horizontalOrientationOffsetRight' => 0,
        'verticalOrientation' => 'top',
        'verticalOrientationOffsetTopUnit' => 'px',
        'verticalOrientationOffsetBottomUnit' => 'px',
        'verticalOrientationOffsetTop' => 0,
        'verticalOrientationOffsetBottom' => 0,
        'zIndex' => 0,
        'selfAlign' => 'start',
        'order' => 'start',
        'customOrder' => 0,
        'flexSize' => 'none',
        'flexGrow' => 1,
        'flexShrink' => 1,
        'borderRadiusType' => 'none',
        'borderRadiusTop' => 4,
        'borderRadiusBottom' => 4,
        'borderRadiusLeft' => 4,
        'borderRadiusRight' => 4,
        'borderType' => 'none',
        'borderWidthUnit' => 'px',
        'borderWidthTop' => 0,
        'borderWidthBottom' => 0,
        'borderWidthLeft' => 0,
        'borderWidthRight' => 0,
        'borderColor' => '',
        'boxShadow' => false,
        'boxShadowColor' => '',
        'boxShadowColorOpacity' => 50,
        'boxShadowBlur' => 5,
        'boxShadowSpread' => 1,
        'boxShadowHorizontal' => 0,
        'boxShadowVertical' => 0,
        'borderHvrType' => 'none',
        'borderWidthHvrUnit' => 'px',
        'borderWidthHvrTop' => 0,
        'borderWidthHvrBottom' => 0,
        'borderWidthHvrLeft' => 0,
        'borderWidthHvrRight' => 0,
        'borderColorHvr' => '',
        'borderRadiusHvrUnit' => 'px',
        'borderRadiusHvrTop' => 0,
        'borderRadiusHvrBottom' => 0,
        'borderRadiusHvrLeft' => 0,
        'borderRadiusHvrRight' => 0,
        'boxShadowHvr' => false,
        'boxShadowColorHvr' => '',
        'boxShadowColorOpacityHvr' => 50,
        'boxShadowBlurHvr' => 5,
        'boxShadowSpreadHvr' => 1,
        'boxShadowHorizontalHvr' => 0,
        'boxShadowVerticalHvr' => 0,
        'backgroundType' => '',
        'backgroundColor' => '',
        'backgroundImage' => null,
        'backgroundGradient' => '',
        'backgroundPosition' => array('x' => 0.5, 'y' => 0.5),
        'backgroundAttachment' => 'scroll',
        'backgroundRepeat' => 'no-repeat',
        'backgroundSize' => 'cover',
        'backgroundTypeHvr' => 'color',
        'backgroundColorHvr' => '',
        'backgroundImageHvr' => null,
        'backgroundGradientHvr' => 'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
        'backgroundPositionHvr' => array('x' => 0.5, 'y' => 0.5),
        'backgroundAttachmentHvr' => 'scroll',
        'backgroundRepeatHvr' => 'no-repeat',
        'backgroundSizeHvr' => 'cover',
        'transitionAll' => 0,
        'desktopBorderRadiusHvrType' => '',
        'borderRadiusUnit' => 'px'
    );
    
   // $attr = wp_parse_args($attr, $default_attr);
    
    $args = array(
        'post_type' => 'post',
        'posts_per_page' => 6,
        'paged' => 1,
        'posts_per_page' => $attr['pg_postLayoutColumns'] * $attr['pg_numberOfRow'],
        'post_status'    => 'publish',
    );

    if (!empty($attr['pg_selectedCategory'])) {
        $args['cat'] = $attr['pg_selectedCategory'];
    }

    if (!empty($attr['pg_selectedTag'])) {
        $args['tag_id'] = $attr['pg_selectedTag'];
    }
    

     $parent_styles = generate_inline_styles($attr);
     //print_r($parent_styles);
     print_r($attr['backgroundGradientHvr'], "jucvgwvc");
    // Query posts
    $query = new WP_Query($args);
    ob_start();


    $animated = isset($attr['className'])?$attr['className']:'';

    if ($query->have_posts()) {
        echo '<div class="th-post-grid-wrapper th-post-grid-wrapper-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' '.$animated .' ">';

        while ($query->have_posts()) {
            $query->the_post();
    
            // Get necessary post data
            $post_id = get_the_ID();
            $post_title = get_the_title();
            $post_permalink = get_permalink();
            $post_date = get_the_date();
            $post_author_id = get_the_author_meta('ID');
            $post_author_name = get_the_author();
    
            // Get categories
            $categories = get_the_category();
            $category_names = !empty($categories) ? wp_list_pluck($categories, 'name') : array();
    
            // Get tags
            $tags = get_the_tags();
            $tag_names = !empty($tags) ? wp_list_pluck($tags, 'name') : array();
    
            // Featured image
    
            // Output the post markup
      
            echo '<div class="th-post-grid-inline th-post-grid-inline-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . '" >';
    
            if (!isset($attr['pg_showFeaturedImage']) && has_post_thumbnail()) {

                $featured_image_url = get_the_post_thumbnail_url($post_id, 'full');

                echo '<div class="post-grid-featured-image">
                        <img src="' . esc_url($featured_image_url) . '" class="post-grid-image" style=" border-radius: ' . esc_attr($attr['pg_imageBorderRadius']) . 'px;  display: block;
                        width: 100%; 
                        height: auto;">
                      </div>';
    
                if (!isset($attr['pg_showCategories']) && !isset($attr['pg_showCategoriesOnImage'])) {
                    echo '<div class="post-grid-category-onimage" >';
                    foreach ($category_names as $category_name) {
                        echo '<a class="post-grid-category-styles post-grid-category-styles-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . ' ">' . esc_html($category_name) . '</a>';
                    }
                    echo '</div>';
                }
            }
    
            if ($attr['pg_showCategories'] && (!$attr['pg_showFeaturedImage'] || !$attr['pg_showCategoriesOnImage'])) {
                echo '<div class="post-grid-only-category-not-image" style="color: ' . esc_attr($attr['pg_categoryTextColor']) . ';  display: flex; 
                gap: 10px; 
                margin-bottom: 10px;">';
                foreach ($category_names as $category_name) {
                    echo '<button class="post-grid-category-style-new post-grid-category-style-new' . esc_attr($attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($category_name) . '</button>';
                }
                echo '</div>';
            }
    
            echo '<div class="post-grid-titletag" >
                <' . esc_attr($attr['pg_blockTitleTag']) . ' style="
                color: ' . esc_attr($attr['pg_blockTitleColor']) . ';
                font-size: ' . esc_attr($attr['pg_blockTitleSize']) . 'px;">';
            echo '<a href="' . esc_url($post_permalink) . '" style="text-decoration: none; 
            color: inherit;">' . esc_html($post_title) . '</a>';
            echo '</' . esc_attr($attr['pg_blockTitleTag']) . '>';
            echo '</div>';
    

            if ($attr['pg_showAuthor'] || $attr['pg_showDate']) {
                echo '<div class="post_grid_author-and-date" style="font-size: 14px;margin-bottom: 10px;display: flex;flex-direction: column;">';
    
                if (!$attr['pg_showAuthor'] && $attr['pg_showDate']) {
                    echo '<span style="font-size: ' . esc_attr($attr['pg_dateTextSize']) . 'px; color: ' . esc_attr($attr['pg_dateColor']) . '; margin-bottom: 8px;">' . esc_html($post_date) . '</span>';
                }
    
                if ($attr['pg_showAuthor']) {
                    echo '<div style="display: flex; align-items: center; margin-bottom: 8px;margin-top:10px;">
                            <div style="margin-right: 8px; font-size: ' . esc_attr($attr['pg_authorTextSize']) . 'px; color: ' . esc_attr($attr['pg_authorTextColor']) . '; width: 32px; height: 32px; border-radius: 50%; overflow: hidden; scale: ' . esc_attr($attr['pg_authorImageScale']) . ';">
                                <img src="https://tinyurl.com/4tu8dsee" alt="Author Logo" style="width: 100%; height: 100%; object-fit: cover;">
                            </div>
                            <div style="display: flex; flex-direction: column;">
                                <a href="' . esc_url(get_author_posts_url($post_author_id)) . '" style="text-decoration: none; font-size: ' . esc_attr($attr['pg_authorTextSize']) . 'px; color: ' . esc_attr($attr['pg_authorTextColor']) . ';">' . esc_html($post_author_name) . '</a>';
    
                    if ($attr['pg_showDate']) {
                        echo '<span style="font-size: ' . esc_attr($attr['pg_dateTextSize']) . 'px; color: ' . esc_attr($attr['pg_dateColor']) . '; margin-left: 65px; margin-top: -25px;">' . esc_html($post_date) . '</span>';
                    }
    
                    echo '</div>
                        </div>';
                }
    
                echo '</div>';
            }
    
            if ($attr['pg_showExcerpt']) {
                echo '<div>' . wp_trim_words(get_the_excerpt(), esc_attr($attr['pg_excerptWords']), '...') . '</div>';
            }
    
            if ($attr['pg_showFullContent']) {
                echo '<div>' . get_the_content() . '</div>';
            }

            if ($attr['pg_showTags'] && !empty($tag_names)) {
                echo '<div  style=" min-width: 50px;max-width: 200px; min-height: 10px;max-height: 30px;box-sizing: border-box; display: flex; gap: 10px;flex-wrap: wrap; padding-left: 5px; padding-right: 2px; margin-bottom:2px;" >';
                foreach ($tag_names as $tag_name) {
                    echo '<a class="post-grid-tag-style-new post-grid-tag-style-new-' . esc_attr($attr['pg_posts'][0]['uniqueID']) . '">' . esc_html($tag_name) . '</a>';
                }
                echo '</div>';
            }
    
            echo '</div>'; // Close post div
        }
    
        echo '</div>'; // Close parent div
    } else {
        echo '<p>' . esc_html__('No posts found.', 'plugin-textdomain') . '</p>';
    }
   
    

    wp_reset_postdata();

    return ob_get_clean();
}


//CSS 

function generate_inline_styles($attr) {
    $css = '';
    // Generate unique ID
    $uniqueId = $attr['pg_posts'][0]['uniqueID'];

    $css .= ".th-post-grid-wrapper-{$uniqueId} {";

        // Box-sizing
        $css .= "box-sizing: border-box;";

        if (isset($attr['widthType']) && $attr['widthType'] === 'fullwidth') {
            $css .= "width: 100%; max-width: 100%!important; display: flex;";
        } elseif (isset($attr['widthType']) && $attr['widthType'] === 'inlinewidth') {
            $css .= "width: auto; display: inline-flex;";
        } elseif (isset($attr['widthType']) && $attr['widthType'] === 'customwidth') {
            $customWidthUnit = isset($attr['customWidthUnit']) ? $attr['customWidthUnit'] : 'px';
            $css .= isset($attr['customWidth']) ? "width: {$attr['customWidth']}{$customWidthUnit};" : '';
            $css .= "display: flex;";
        } else {
            $css .= "width: 100%;";
        }

        // Padding
        $paddingUnit = isset($attr['paddingUnit']) ? $attr['paddingUnit'] : 'px';
        $css .= isset($attr['paddingTop']) ? "padding-top: " . esc_attr($attr['paddingTop']) . $paddingUnit . ";" : '';
        $css .= isset($attr['paddingBottom']) ? "padding-bottom: " . esc_attr($attr['paddingBottom']) . $paddingUnit . ";" : '';
        $css .= isset($attr['paddingLeft']) ? "padding-left: " . esc_attr($attr['paddingLeft']) . $paddingUnit . ";" : '';
        $css .= isset($attr['paddingRight']) ? "padding-right: " . esc_attr($attr['paddingRight']) . $paddingUnit . ";" : '';

        // Margin
        $marginUnit = isset($attr['marginUnit']) ? $attr['marginUnit'] : 'px';
        $css .= isset($attr['marginTop']) ? "margin-top: " . esc_attr($attr['marginTop']) . $marginUnit . ";" : '';
        $css .= isset($attr['marginBottom']) ? "margin-bottom: " . esc_attr($attr['marginBottom']) . $marginUnit . ";" : '';
        $css .= isset($attr['marginLeft']) ? "margin-left: " . esc_attr($attr['marginLeft']) . $marginUnit . ";" : '';
        $css .= isset($attr['marginRight']) ? "margin-right: " . esc_attr($attr['marginRight']) . $marginUnit . ";" : '';

        // Position and Z-index
        $css .= isset($attr['position']) ? "position: " . esc_attr($attr['position']) . ";" : '';
        $css .= isset($attr['zIndex']) ? "z-index: " . esc_attr($attr['zIndex']) . ";" : '';

        // Alignment and Order
        $css .= isset($attr['selfAlign']) ? "align-self: " . esc_attr($attr['selfAlign']) . ";" : '';
        $css .= isset($attr['order']) && $attr['order'] === 'custom' ? "order: " . esc_attr($attr['customOrder']) . ";" : '';

        // Flex properties
        $css .= isset($attr['flexSize']) ? "flex-basis: " . esc_attr($attr['flexSize']) . ";" : '';
        $css .= isset($attr['flexGrow']) ? "flex-grow: " . esc_attr($attr['flexGrow']) . ";" : '';
        $css .= isset($attr['flexShrink']) ? "flex-shrink: " . esc_attr($attr['flexShrink']) . ";" : '';

        // Border
        $borderWidthUnit = isset($attr['borderWidthUnit']) ? $attr['borderWidthUnit'] : '';
        $css .= isset($attr['borderType']) ? "border-style: " . esc_attr($attr['borderType']) . ";" : '';
        $css .= isset($attr['borderWidthTop']) ? "border-top-width: " . esc_attr($attr['borderWidthTop']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderWidthBottom']) ? "border-bottom-width: " . esc_attr($attr['borderWidthBottom']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderWidthLeft']) ? "border-left-width: " . esc_attr($attr['borderWidthLeft']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderWidthRight']) ? "border-right-width: " . esc_attr($attr['borderWidthRight']) . $borderWidthUnit . ";" : '';
        $css .= isset($attr['borderColor']) ? "border-color: " . esc_attr($attr['borderColor']) . ";" : '';

        //Border-radius
        $borderRadiusUnit = isset($attr['borderRadiusUnit']) ? $attr['borderRadiusUnit'] : '';
        $borderRadiusTop = isset($attr['borderRadiusTop']) ? esc_attr($attr['borderRadiusTop']) : '0';
        $borderRadiusRight = isset($attr['borderRadiusRight']) ? esc_attr($attr['borderRadiusRight']) : '0';
        $borderRadiusBottom = isset($attr['borderRadiusBottom']) ? esc_attr($attr['borderRadiusBottom']) : '0';
        $borderRadiusLeft = isset($attr['borderRadiusLeft']) ? esc_attr($attr['borderRadiusLeft']) : '0';
        
        $css .= "border-radius: {$borderRadiusTop}{$borderRadiusUnit} {$borderRadiusRight}{$borderRadiusUnit} {$borderRadiusBottom}{$borderRadiusUnit} {$borderRadiusLeft}{$borderRadiusUnit};";
        
        // Box-shadow
        if (isset($attr['boxShadow']) && $attr['boxShadow']) {
            $boxShadowColor = 'rgba(' . implode(', ', [
                hexdec(substr($attr['boxShadowColor'], 1, 2)), // Red
                hexdec(substr($attr['boxShadowColor'], 3, 2)), // Green
                hexdec(substr($attr['boxShadowColor'], 5, 2))  // Blue
            ]) . ', ' . ((float) $attr['boxShadowColorOpacity'] / 100) . ')';
            $css .= "box-shadow: " . esc_attr($attr['boxShadowHorizontal']) . 'px ' .
                                    esc_attr($attr['boxShadowVertical']) . 'px ' .
                                    esc_attr($attr['boxShadowBlur']) . 'px ' .
                                    esc_attr($attr['boxShadowSpread']) . 'px ' .
                                    $boxShadowColor . ";";
        } else {
            $css .= "box-shadow: none;";
        }

        // $css .= "background: " . esc_attr($attr['backgroundColor']) . ";";

       // Background
       if (isset($attr['backgroundType'])) {
        if ($attr['backgroundType'] === 'color' && isset($attr['backgroundColor'])) {
            $css .= "background: " . esc_attr($attr['backgroundColor']) . ";";
        } elseif ($attr['backgroundType'] === 'gradient' && isset($attr['backgroundGradient'])) {
            $css .= "background: " . esc_attr($attr['backgroundGradient']) . ";";
        } elseif (isset($attr['backgroundImage']) && isset($attr['backgroundImage']['url'])) {
            $css .= "background: url(" . esc_url($attr['backgroundImage']['url']) . ");";
        } else {
            $css .= "background: none;";
        }
        } elseif(isset($attr['backgroundColor'])) { 
        $css .= "background: " . esc_attr($attr['backgroundColor']) . ";";
        }
    
        // Background properties
        $css .= isset($attr['backgroundPosition']) ? "background-position: " . esc_attr($attr['backgroundPosition']['x']) . ',' . esc_attr($attr['backgroundPosition']['y']) . ";" : 'background-position: 50%, 50%;';
        $css .= isset($attr['backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['backgroundAttachment']) . ";" : '';
        $css .= isset($attr['backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['backgroundRepeat']) . ";" : '';
        $css .= isset($attr['backgroundSize']) ? "background-size: " . esc_attr($attr['backgroundSize']) . ";" : '';

        // Transition
        $css .= isset($attr['transitionAll']) ? "transition: all " . esc_attr($attr['transitionAll']) . "s ease-in-out;" : '';

        // Grid properties
        $css .= "display: grid;";
        $gridTemplateColumns = isset($attr['pg_postLayoutColumns']) ? esc_attr($attr['pg_postLayoutColumns']) : 'auto-fit';
        $css .= "grid-template-columns: repeat({$gridTemplateColumns}, 1fr);";
        $css .= "max-width: 100%;";
        $gridGapUp = isset($attr['pg_gapup']) ? esc_attr($attr['pg_gapup']) . "px" : '16px'; // Default value '16px' or whatever default you prefer
        $gridGap = isset($attr['pg_gap']) ? esc_attr($attr['pg_gap']) . "px" : '16px'; // Default value '16px' or whatever default you prefer
        $css .= "grid-gap: {$gridGapUp} {$gridGap};";
                $css .= "grid-auto-rows: minmax(100px, auto);";
        // Font
        $css .= "font-family: gilroy;";

    $css .= "}";

    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} {";  
        $css .= isset($attr['pg_layoutPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_layoutPaddingTop']) . (isset($attr['buttonpaddingUnit']) ? esc_attr($attr['buttonpaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_layoutPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_layoutPaddingBottom']) . (isset($attr['buttonpaddingUnit']) ? esc_attr($attr['buttonpaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_layoutPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_layoutPaddingLeft']) . (isset($attr['buttonpaddingUnit']) ? esc_attr($attr['buttonpaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_layoutPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_layoutPaddingRight']) . (isset($attr['buttonpaddingUnit']) ? esc_attr($attr['buttonpaddingUnit']) : 'px') . ";" : '';
        
        // Display
        $css .= "display: grid;";
   
        // Background
        $css .= isset($attr['layout_backgroundColor']) ? "background: " . esc_attr($attr['layout_backgroundColor']) . ";" : '';
   
        // Border radius
        $css .= isset($attr['pg_postBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_postBorderRadius']) . "px;" : '';
   
        // Font size
        $css .= isset($attr['pg_textSize']) ? "font-size: " . esc_attr($attr['pg_textSize']) . "px;" : '';
   
        // Border
        $css .= isset($attr['layoutborderType']) && isset($attr['pg_layoutBorder']) && isset($attr['pg_layoutBorderColor']) ? 
            "border: " . esc_attr($attr['layoutborderType']) . ' ' . esc_attr($attr['pg_layoutBorder']) . "px " . esc_attr($attr['pg_layoutBorderColor']) . ";" : '';
   
        // Text color
        $css .= isset($attr['pg_textColor']) ? "color: " . esc_attr($attr['pg_textColor']) . ";" : '';
   
        // Position
        $css .= "position: relative;";
   
        // Background image
        $css .= isset($attr['layout_backgroundImage']) && $attr['layout_backgroundImage'] ? "background-image: url(" . esc_url($attr['layout_backgroundImage']['url']) . ");" : '';
   
        // Background attachment, repeat, size
        $css .= isset($attr['layout_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['layout_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['layout_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['layout_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['layout_backgroundSize']) ? "background-size: " . esc_attr($attr['layout_backgroundSize']) . ";" : '';
   
    $css .= "}";

    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-category-styles-{$uniqueId} {";

        // Padding
        $css .= isset($attr['pg_categoryPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_categoryPaddingTop']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_categoryPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_categoryPaddingBottom']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_categoryPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_categoryPaddingLeft']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
        $css .= isset($attr['pg_categoryPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_categoryPaddingRight']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
        
        // Text color
        $css .= isset($attr['pg_categoryTextColor']) ? "color: " . esc_attr($attr['pg_categoryTextColor']) . ";" : '';

        // Background
        $css .= isset($attr['category_backgroundColor']) ? "background: " . esc_attr($attr['category_backgroundColor']) . ";" : '';
        $css .= isset($attr['category_backgroundImage']) && $attr['category_backgroundImage'] ? "background-image: url(" . esc_url($attr['category_backgroundImage']['url']) . ");" : '';
        $css .= isset($attr['category_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['category_backgroundAttachment']) . ";" : '';
        $css .= isset($attr['category_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['category_backgroundRepeat']) . ";" : '';
        $css .= isset($attr['category_backgroundSize']) ? "background-size: " . esc_attr($attr['category_backgroundSize']) . ";" : '';

        // Font size
        $css .= isset($attr['pg_categoryTextSize']) ? "font-size: " . esc_attr($attr['pg_categoryTextSize']) . "px;" : '';

        // Border radius
        $css .= isset($attr['pg_categoryBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_categoryBorderRadius']) . "px;" : '';

        // Border
        $css .= isset($attr['categoryborderType']) && isset($attr['pg_categoryBorder']) && isset($attr['pg_categoryBorderColor']) ? 
            "border: " . esc_attr($attr['categoryborderType']) . ' ' . esc_attr($attr['pg_categoryBorder']) . "px " . esc_attr($attr['pg_categoryBorderColor']) . ";" : '';
    $css .= "}";

    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-category-style-new-{$uniqueId} {";
         // Padding
         $css .= isset($attr['pg_categoryPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_categoryPaddingTop']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
         $css .= isset($attr['pg_categoryPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_categoryPaddingBottom']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
         $css .= isset($attr['pg_categoryPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_categoryPaddingLeft']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
         $css .= isset($attr['pg_categoryPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_categoryPaddingRight']) . (isset($attr['categorypaddingUnit']) ? esc_attr($attr['categorypaddingUnit']) : 'px') . ";" : '';
         
         // Border radius
         $css .= isset($attr['pg_categoryBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_categoryBorderRadius']) . "px;" : '';
 
         // Border
         $css .= isset($attr['categoryborderType']) && isset($attr['pg_categoryBorder']) && isset($attr['pg_categoryBorderColor']) ? 
             "border: " . esc_attr($attr['categoryborderType']) . ' ' . esc_attr($attr['pg_categoryBorder']) . "px " . esc_attr($attr['pg_categoryBorderColor']) . ";" : '';
 
         // Text color
         $css .= isset($attr['pg_categoryTextColor']) ? "color: " . esc_attr($attr['pg_categoryTextColor']) . ";" : '';
 
         // Background
         $css .= isset($attr['category_backgroundColor']) ? "background: " . esc_attr($attr['category_backgroundColor']) . ";" : '';
         $css .= isset($attr['category_backgroundImage']) && $attr['category_backgroundImage'] ? "background-image: url(" . esc_url($attr['category_backgroundImage']['url']) . ");" : '';
         $css .= isset($attr['category_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['category_backgroundAttachment']) . ";" : '';
         $css .= isset($attr['category_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['category_backgroundRepeat']) . ";" : '';
         $css .= isset($attr['category_backgroundSize']) ? "background-size: " . esc_attr($attr['category_backgroundSize']) . ";" : '';
 
         // Font size
         $css .= isset($attr['pg_categoryTextSize']) ? "font-size: " . esc_attr($attr['pg_categoryTextSize']) . "px;" : '';
 
    $css .= "}";

    $css .= ".th-post-grid-wrapper-{$uniqueId} .th-post-grid-inline-{$uniqueId} .post-grid-tag-style-new-{$uniqueId} {";
          // Display
          $css .= "display: inline-block;";

          // Padding
          $css .= isset($attr['pg_tagPaddingTop']) ? "padding-top: " . esc_attr($attr['pg_tagPaddingTop']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : '') . ";" : '';
          $css .= isset($attr['pg_tagPaddingBottom']) ? "padding-bottom: " . esc_attr($attr['pg_tagPaddingBottom']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : '') . ";" : '';
          $css .= isset($attr['pg_tagPaddingLeft']) ? "padding-left: " . esc_attr($attr['pg_tagPaddingLeft']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : '') . ";" : '';
          $css .= isset($attr['pg_tagPaddingRight']) ? "padding-right: " . esc_attr($attr['pg_tagPaddingRight']) . (isset($attr['tagpaddingUnit']) ? esc_attr($attr['tagpaddingUnit']) : '') . ";" : '';
          
          // Border radius
          $css .= isset($attr['pg_tagBorderRadius']) ? "border-radius: " . esc_attr($attr['pg_tagBorderRadius']) . "px;" : '';
  
          // Text color
          $css .= isset($attr['pg_tagTextColor']) ? "color: " . esc_attr($attr['pg_tagTextColor']) . ";" : '';
  
          // Background
          $css .= isset($attr['tag_backgroundColor']) ? "background: " . esc_attr($attr['tag_backgroundColor']) . ";" : '';
          $css .= isset($attr['tag_backgroundImage']) && $attr['tag_backgroundImage'] ? "background-image: url(" . esc_url($attr['tag_backgroundImage']['url']) . ");" : '';
          $css .= isset($attr['tag_backgroundAttachment']) ? "background-attachment: " . esc_attr($attr['tag_backgroundAttachment']) . ";" : '';
          $css .= isset($attr['tag_backgroundRepeat']) ? "background-repeat: " . esc_attr($attr['tag_backgroundRepeat']) . ";" : '';
          $css .= isset($attr['tag_backgroundSize']) ? "background-size: " . esc_attr($attr['tag_backgroundSize']) . ";" : '';
  
          // Font size
          $css .= isset($attr['pg_tagTextSize']) ? "font-size: " . esc_attr($attr['pg_tagTextSize']) . "px;" : '';
  
          // Border
          $css .= isset($attr['tagborderType']) && isset($attr['pg_tagBorder']) && isset($attr['pg_tagBorderColor']) ? 
              "border: " . esc_attr($attr['tagborderType']) . ' ' . esc_attr($attr['pg_tagBorder']) . "px " . esc_attr($attr['pg_tagBorderColor']) . ";" : '';
  
    
    $css .= "}";
    
    $css .= ".th-post-grid-wrapper-{$uniqueId}:hover {";

        // Border styles
        $css .= isset($attr['borderHvrType']) ? "border-style: " . esc_attr($attr['borderHvrType']) . ";" : '';
        $css .= isset($attr['borderWidthHvrTop']) && isset($attr['borderWidthHvrUnit']) ? "border-top-width: " . esc_attr($attr['borderWidthHvrTop']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrBottom']) && isset($attr['borderWidthHvrUnit']) ? "border-bottom-width: " . esc_attr($attr['borderWidthHvrBottom']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrLeft']) && isset($attr['borderWidthHvrUnit']) ? "border-left-width: " . esc_attr($attr['borderWidthHvrLeft']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderWidthHvrRight']) && isset($attr['borderWidthHvrUnit']) ? "border-right-width: " . esc_attr($attr['borderWidthHvrRight']) . esc_attr($attr['borderWidthHvrUnit']) . ";" : '';
        $css .= isset($attr['borderColorHvr']) ? "border-color: " . esc_attr($attr['borderColorHvr']) . ";" : '';

                
            // Border radius
        $css .= isset($attr['borderRadiusHvrTop']) && isset($attr['borderRadiusHvrUnit']) ? "border-top-left-radius: " . esc_attr($attr['borderRadiusHvrTop']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';
        $css .= isset($attr['borderRadiusHvrLeft']) && isset($attr['borderRadiusHvrUnit']) ? "border-top-right-radius: " . esc_attr($attr['borderRadiusHvrLeft']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';
        $css .= isset($attr['borderRadiusHvrBottom']) && isset($attr['borderRadiusHvrUnit']) ? "border-bottom-right-radius: " . esc_attr($attr['borderRadiusHvrBottom']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';
        $css .= isset($attr['borderRadiusHvrRight']) && isset($attr['borderRadiusHvrUnit']) ? "border-bottom-left-radius: " . esc_attr($attr['borderRadiusHvrRight']) . esc_attr($attr['borderRadiusHvrUnit']) . ";" : '';

        // Box-shadow
       // Box-shadow
        if (isset($attr['boxShadowHvr']) && $attr['boxShadowHvr']) {
            // Ensure the boxShadowColorHvr and boxShadowColorOpacityHvr keys are set
            if (isset($attr['boxShadowColorHvr'], $attr['boxShadowColorOpacityHvr'])) {
                $boxShadowColor = 'rgba(' . implode(', ', [
                    hexdec(substr($attr['boxShadowColorHvr'], 1, 2)), // Red
                    hexdec(substr($attr['boxShadowColorHvr'], 3, 2)), // Green
                    hexdec(substr($attr['boxShadowColorHvr'], 5, 2))  // Blue
                ]) . ', ' . ((float) $attr['boxShadowColorOpacityHvr'] / 100) . ')';
            } else {
                $boxShadowColor = 'rgba(0, 0, 0, 0)'; // Default value in case of missing color
            }

            // Ensure each box shadow dimension key is set, use a default value if not
            $boxShadowHorizontal = isset($attr['boxShadowHorizontalHvr']) ? esc_attr($attr['boxShadowHorizontalHvr']) : '0';
            $boxShadowVertical = isset($attr['boxShadowVerticalHvr']) ? esc_attr($attr['boxShadowVerticalHvr']) : '0';
            $boxShadowBlur = isset($attr['boxShadowBlurHvr']) ? esc_attr($attr['boxShadowBlurHvr']) : '0';
            $boxShadowSpread = isset($attr['boxShadowSpreadHvr']) ? esc_attr($attr['boxShadowSpreadHvr']) : '0';

            $css .= "box-shadow: " . $boxShadowHorizontal . 'px ' .
                                    $boxShadowVertical . 'px ' .
                                    $boxShadowBlur . 'px ' .
                                    $boxShadowSpread . 'px ' .
                                    $boxShadowColor . ";";
        } else {
            $css .= "box-shadow: none;";
        }

        //print_r($attr['backgroundTypeHvr'],$attr['backgroundGradientHvr']);
         // Background
       if (isset($attr['backgroundTypeHvr'])) {
        if ($attr['backgroundTypeHvr'] === 'color' && isset($attr['backgroundColorHvr'])) {
            $css .= "background: " . esc_attr($attr['backgroundColorHvr']) . ";";
        } elseif ($attr['backgroundTypeHvr'] === 'gradient' && isset($attr['backgroundGradientHvr'])) {
            $css .= "background: " . esc_attr($attr['backgroundGradientHvr']) . ";";
        } elseif (isset($attr['backgroundImageHvr']) && isset($attr['backgroundImageHvr']['url'])) {
            $css .= "background: url(" . esc_url($attr['backgroundImageHvr']['url']) . ");";
        } else {
            $css .= "background: none;";
        }
        } elseif(isset($attr['backgroundColorHvr'])) { 
        $css .= "background: " . esc_attr($attr['backgroundColorHvr']) . ";";
        }
        
        // Background position, attachment, repeat, size
        $css .= isset($attr['backgroundPositionHvr']) ? "background-position: " . esc_attr($attr['backgroundPositionHvr']['x'] . ',' . $attr['backgroundPositionHvr']['y']) . ";" : '';
        $css .= isset($attr['backgroundAttachmentHvr']) ? "background-attachment: " . esc_attr($attr['backgroundAttachmentHvr']) . ";" : '';
        $css .= isset($attr['backgroundRepeatHvr']) ? "background-repeat: " . esc_attr($attr['backgroundRepeatHvr']) . ";" : '';
        $css .= isset($attr['backgroundSizeHvr']) ? "background-size: " . esc_attr($attr['backgroundSizeHvr']) . ";" : '';
        
        // Transition
        $css .= "transition: all 0.3s ease-in-out;";
        
    $css .= "}";
         

    return $css;
}



