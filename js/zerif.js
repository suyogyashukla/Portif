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

particlesJS.load('particles-js', './js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
