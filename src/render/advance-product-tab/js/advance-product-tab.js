jQuery(document).ready(function($) {
    
    // Tab link click event
    $('.category-tabs .tab-link').on('click', function() {

        var cat_id = $(this).attr('cat_slug');
        
        // Remove active class from other tabs
        $('.category-tabs .tab-link').removeClass('active');
        
        // Add active class to the clicked tab
        $(this).addClass('active');

        // Show loader
        $('.th-product-block-product-item-wrap').append('<div class="th-block-loader">Loading...</div>');

        // AJAX request to fetch category products
        $.ajax({
            url: advance_product_tab_ajax.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {
                action: 'load_category_products',
                category_id: cat_id,
                attr:advance_product_tab_ajax.attributes
            },
            success: function(response) {
                // Update the product items on the page
                $('.th-product-block-product-content').html(response);
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    });


//     jQuery('.th-pagination').on('click', '.prev-page, .next-page', function(e) {

//         e.preventDefault();
        
//         var page = parseInt(jQuery(this).data('page'));
         
//          // AJAX request to fetch category products
//          $.ajax({
//             url: advance_product_tab_ajax.ajax_url,
//             type: 'POST',
//             dataType: 'html',
//             data: {
//                 action: 'load_pagi',
//                 page: page,
//             },
//             success: function(response) {
//                 // Update the product items on the page
//                 $('.th-product-block-product-content').html(response);
//             },
//             error: function(xhr, status, error) {
//                 console.log(error);
//             }
//         });
    

//     });



});



// (function ($) {
//     $(document).ready(function () {
//         var currentPage = 1;

//         function loadCategoryProducts(page) {
//             var categoryID = $('.category-tabs li.active').attr('cat_id');
//             $.ajax({
//                 url: advance_product_tab_ajax.ajax_url,
//                 type: 'POST',
//                 data: {
//                     action: 'load_category_products',
//                     category_id: categoryID,
//                     page: page,
//                 },
//                 beforeSend: function () {
//                     // Show loading indicator
//                     $('.th-product-block-product-content').addClass('loading');
//                 },
//                 success: function (response) {
//                     // Update product content
//                     $('.th-product-block-product-content').html(response);
//                     // Hide loading indicator
//                     $('.th-product-block-product-content').removeClass('loading');
//                 },
//                 error: function (xhr, ajaxOptions, thrownError) {
//                     console.log(xhr.responseText);
//                 },
//             });
//         }

//         // Load initial category products
//         loadCategoryProducts(currentPage);

//         // Handle tab click event
//         $(document).on('click', '.category-tabs li', function () {
//             currentPage = 1;
//             $('.category-tabs li').removeClass('active');
//             $(this).addClass('active');
//             loadCategoryProducts(currentPage);
//         });

//         // Handle previous page button click event
//         $(document).on('click', '.th-pagination .prev-page', function () {
//             if (currentPage > 1) {
//                 currentPage--;
//                 loadCategoryProducts(currentPage);
//             }
//         });

//         // Handle next page button click event
//         $(document).on('click', '.th-pagination .next-page', function () {
//             currentPage++;
//             loadCategoryProducts(currentPage);
//         });
//     });
// })(jQuery);
