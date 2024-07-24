jQuery(function($) {
    $(document).on('click', '.pagination a', function(e) {
        e.preventDefault();
          // Remove old pagination controls
        $('.pagination').remove();
    
        var href = $(this).attr('href');
        var pageMatch = href.match(/page\/(\d+)/);
        var page = pageMatch ? parseInt(pageMatch[1]) : 1;

        var data = {
            action: 'load_posts',
            page: page,
            attr: postGridAttributes // Pass attributes to the AJAX request
        };

        $.ajax({
            url: postGridAjax.ajaxurl,
            type: 'POST',
            data: data,
            success: function(response) {
                var $response = $(response); // Parse response into jQuery object
                var $newContent = $response.find('.th-post-grid-wrapper').html(); // Extract new posts
                var $newPagination = $response.find('.pagination').html(); // Extract new pagination
                
                // Replace content with loaded posts
                $('.th-post-grid-wrapper').html($newContent);

                // Replace pagination controls with new pagination
                $('.pagination').html($newPagination);
                
                // Move the updated pagination outside of the wrapper div
                $('.pagination').insertAfter('.th-post-grid-wrapper');
            },
            error: function(xhr, status, error) {
              
                console.error('AJAX Error:', error);
            }
        });
    });
});
