$(document).ready(() => {
  initPlusResize(fixContentHeight);
});

function initPlusResize(func) {
  func();
  $(window).resize(func);
}

function fixContentHeight() {
  console.log('function')
  var $content = $('#content');
  $content.removeAttr('style');
  var headerHeight = $('header').height() || 0;
  var footerHeight = $('footer').height() || 0;
  var contentHeight = $content.height() || 0;
  var thisHeight = $(this).height();
  if (thisHeight > headerHeight + footerHeight + contentHeight) {
  console.log('can add')
    var newHeight = thisHeight - headerHeight - footerHeight;
  console.log('can footer')
    if (newHeight > footerHeight) {
      $content.height(newHeight);
    }
  }
}
