 //jQuery to collapse the navbar on scroll
 $(window).scroll(function() {
    if ($(".navbar-default").offset().top > 200) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } 
    else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function(event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  $('.header-button a').bind('click', function(event) {
    var $anchor = $(this);
    var button = $($anchor.attr('href'));
    if (button.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });
