/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/block/post-grid/view.js ***!
  \*************************************/
jQuery(function ($) {
  $(document).on('click', '.pagination a', function (e) {
    e.preventDefault();
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
      success: function (response) {
        var $wrapper = $('.th-post-grid-wrapper');
        $wrapper.html(response); // Replace content with loaded posts
      },
      error: function (xhr, status, error) {
        console.error('AJAX Error:', error);
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=view-grid.js.map