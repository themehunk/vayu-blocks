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
                var $wrapper = $('.th-post-grid-wrapper');
                $wrapper.html(response); // Replace content with loaded posts
                  
                // Add new pagination controls
               var $newPagination = $('.pagination');
               $newPagination.html(data.pagination);
  
                // Move the updated pagination outside of the wrapper div
                $newPagination.each(function() {
                   $(this).insertAfter('.th-post-grid-wrapper');
               });


            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', error);
            }
        });
    });
});
