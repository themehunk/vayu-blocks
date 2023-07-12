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
            },
            success: function(response) {
                // Update the product items on the page
                $('.th-product-block-product-item-wrap').html(response);
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    });
});
