/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/block/post-grid/view.js ***!
  \*************************************/
console.log("view");

// jQuery(function($) {
//     $(document).on('click', '.pagination a', function(e) {
//         e.preventDefault();

//         var page = $(this).attr('href').split('/').pop(); // Extract page number from the link
//         var data = {
//             action: 'load_posts', // AJAX action name registered in WordPress
//             page: page, // Current page number
//             attr: window.postGridAttributes // Pass your block attributes object here
//         };

//         $.ajax({
//             url: postGridAjax.ajaxurl, // Use the localized AJAX URL from wp_localize_script
//             type: 'POST',
//             data: data,
//             success: function(response) {
//                 $('.th-post-grid-wrapper').html(response); // Replace content with loaded posts
//             },
//             error: function(xhr, status, error) {
//                 console.error(xhr.responseText); // Log any AJAX errors for debugging
//             }
//         });
//     });
// });

jQuery(document).ready(function ($) {
  var page = 2; // Initial page number
  var maxPages = $('#max-pages').val(); // Total number of pages

  $('#load-more-btn').on('click', function (e) {
    e.preventDefault();
    var $btn = $(this);
    $btn.text('Loading...');
    var data = {
      action: 'vayu_blocks_load_posts',
      nonce: vayu_blocks_load_posts.nonce,
      page: page
    };
    $.post(vayu_blocks_load_posts.ajax_url, data, function (response) {
      if (response.success) {
        $('#max-pages').val(response.data.max_pages); // Update max pages

        $('.th-post-grid-wrapper').append(response.data.content); // Append new posts
        $btn.text('Load More');
        page++;
        if (page > maxPages) {
          $btn.hide(); // Hide button when no more posts to load
        }
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view-grid.js.map