var $ = jQuery;

  if (typeof controllers == 'undefined') {
      controllers = {};
  }
 
  $(document).ready(function() {
      $('img[data-src]').each(function(i, img) {
          var src = $(img).data('src');
          $(img).attr('src', src);
      });
  });