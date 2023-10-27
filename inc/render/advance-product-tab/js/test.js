jQuery(document).ready(function($) {

    console.log(advance_product_tab_ajax.attributes);

    var currentPage = 1;
    var totalPages = $('.th-pagination').attr('total-page');

    // Tab link click event
    $('.category-tabs .tab-link').on('click', function() {
        var cat_id = $(this).attr('cat_slug');

        // Remove active class from other tabs
        $('.category-tabs .tab-link').removeClass('active');

        // Add active class to the clicked tab
        $(this).addClass('active');

        // Show loader
        $('.th-product-block-product-item-wrap').append('<div class="th-block-loader"></div>');

        // AJAX request to fetch category products
        $.ajax({
            url: advance_product_tab_ajax.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {
                action: 'load_category_products',
                category_id: cat_id,
                attr: advance_product_tab_ajax.attributes,
            },
            success: function(response) {
                
                // Update the product items on the page
                $('.th-product-block-product-content').html(response);

                // Update the total pages after content changes
                totalPages = $('.th-pagination').attr('total-page');
                $('.th-pagination button.prev').prop('disabled', currentPage == 1);
                $('.th-pagination button.next').prop('disabled', currentPage == parseInt(totalPages));
                // Remove the loader
                $('.th-block-loader').remove();
            },
            error: function(xhr, status, error) {
                console.log(error);
            },
        });
    });

    // Event delegation for pagination buttons
    $(document).on('click', '.th-pagination button', function() {
        if ($(this).hasClass('prev')) {
            if (currentPage > 1) {
                currentPage--;
            }
        } else if ($(this).hasClass('next')) {
            if (currentPage < totalPages) {
                currentPage++;
            }
        }
        // Load products for the current page using AJAX
        loadProducts(currentPage);
    });

    // Function to load products for the specified page
    function loadProducts(page) {
        // Show loader
        $('.th-product-block-product-item-wrap').append('<div class="th-block-loader"></div>');
        $.ajax({
            url: advance_product_tab_ajax.ajax_url,
            type: 'POST',
            dataType: 'html',
            data: {
                action: 'load_category_products',
                category_id: $('.category-tabs .tab-link.active').attr('cat_slug'),
                attr: advance_product_tab_ajax.attributes,
                page: page,
            },
            success: function(response) {

                // Update the product items on the page

                $('.th-product-block-product-content').html(response);

                currentPage = page;
                
                // Disable/enable prev/next buttons based on current page

                $('.th-pagination button.prev').prop('disabled', currentPage == 1);
                $('.th-pagination button.next').prop('disabled', currentPage == parseInt(totalPages));

                
                // Remove the loader
                $('.th-block-loader').remove();
            },
            error: function(xhr, status, error) {
                console.log(error);
            },
        });
    }

    // Load initial products
    //loadProducts(currentPage);

});