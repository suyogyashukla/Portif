jQuery(document).ready(function($) {
  $(window).scroll(function() {
      var nav = $('#main-nav');
      var top = 200;
      if ($(window).scrollTop() >= top) {
          nav.addClass('navbar-shadow');
      } else {
          nav.removeClass('navbar-shadow');
      }
  });
});
