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