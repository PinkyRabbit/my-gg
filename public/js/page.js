$(document).ready(() => {
  initPlusResize(fixContentHeight);
});

function initPlusResize(func) {
  func();
  $(window).on('resize', func).trigger('resize');
}

function fixContentHeight() {
  var $header = $('header');
  var $footer = $('footer');
  var $content = $('#content');
  var height = $(this).height() - $header.height() - $footer.height();
  if (height > $footer.height()) {
    $content.height(height);
  }
}
