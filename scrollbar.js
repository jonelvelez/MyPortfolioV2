

var $translateY_elements = $('.scroll-anime-translateY');
var $translateX_r_elements = $('.scroll-anime-translateX-right');
var $translateX_l_elements = $('.scroll-anime-translateX-left');
var $scale_elements = $('.scroll-anime-scale');
var $number_elements = $('.scroll-anime-number');
var $scrollspy_elements = $('.scroll-anime-scrollspy');

var $window = $(window);
var scroll_anime_tY;
var scroll_anime_tX_left;
var scroll_anime_tX_right;
var scroll_anime_scale;
var scroll_anime_number;
var scroll_anime_scrollspy;
var el_offset;

if ($(window).width() < 1024) {
  el_offset = 0;
} else {
  el_offset = 80;
}

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);

  if ($translateY_elements.length) {
    $.each($translateY_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      //check to see if this current container is within viewport
      // 320 = offset bottom


      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {

        if (!$element.hasClass('in-view')) {
          $element.addClass('in-view');
          scroll_anime_tY = anime({
            targets: $element[0],
            translateY: ['100px', '0px'],
            opacity: [0, 1],
            loop: false,
            duration: 1500,
            delay: function (el, i) {
              return i * 1500;
            },
            easing: 'easeOutExpo',
          });
        }
      }
      // else {
      //   $element.removeClass('in-view');
      // }

    })
  };


  if ($translateX_l_elements.length) {
    $.each($translateX_l_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      //check to see if this current container is within viewport
      // 320 = offset bottom
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if (!$element.hasClass('in-view')) {
          $element.addClass('in-view');
          scroll_anime_tX_left = anime({
            targets: $element[0],
            translateX: ['-100px', '0px'],
            opacity: [0, 1],
            loop: false,
            duration: 1500,
            delay: function (el, i) {
              return i * 1500;
            },
            easing: 'easeOutExpo',
          });
        }
      }
      // else {
      //   $element.removeClass('in-view');
      // }
    })
  };

  if ($translateX_r_elements.length) {
    $.each($translateX_r_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      //check to see if this current container is within viewport
      // 320 = offset bottom
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if (!$element.hasClass('in-view')) {
          $element.addClass('in-view');
          scroll_anime_tX_right = anime({
            targets: $element[0],
            translateX: ['100px', '0px'],
            opacity: [0, 1],
            loop: false,
            duration: 1500,
            delay: function (el, i) {
              return i * 1500;
            },
            easing: 'easeOutExpo',
          });
        }
      }
      // else {
      //   $element.removeClass('in-view');
      // }
    })
  };

  if ($scale_elements.length) {
    $.each($scale_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      //check to see if this current container is within viewport
      // 320 = offset bottom
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if (!$element.hasClass('in-view')) {
          $element.addClass('in-view');
          scroll_anime_scale = anime({
            targets: $element[0],
            scale: [0.8, 1],
            opacity: [0, 1],
            loop: false,
            duration: 1500,
            delay: function (el, i) {
              return i * 1500;
            },
            easing: 'easeOutExpo',
          });
        }
      }
      // else {
      //   $element.removeClass('in-view');
      // }
    })
  };

  if ($number_elements.length) {
    $.each($number_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var valuefinal = this.max
      //check to see if this current container is within viewport
      // 320 = offset bottom
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if (!$element.hasClass('in-view')) {
          $element.addClass('in-view');
          scroll_anime_number = anime({
            targets: this,
            value: [0, valuefinal],
            round: 1,
            easing: 'easeInOutExpo'
          });
        }
      }
      // else {
      //   $element.removeClass('in-view');
      // }
    })
  };

  if ($scrollspy_elements.length) {
    $.each($scrollspy_elements, function () {
      var $element = $(this);
      var element_height = $element.outerHeight();
      var element_top_position = $element.offset().top;
      var element_bottom_position = (element_top_position + element_height);
      var valuefinal = this.max
      //check to see if this current container is within viewport
      // 320 = offset bottom
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if ($element.hasClass('first-scrollspy')) {
          $("#scrollspy-first-bullet").addClass('active');
          $("#scrollspy-second-bullet").removeClass('active');
          $("#scrollspy-third-bullet").removeClass('active');
          $("#scrollspy-fourth-bullet").removeClass('active');
        }
      }
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if ($element.hasClass('second-scrollspy')) {
          $("#scrollspy-first-bullet").removeClass('active');
          $("#scrollspy-second-bullet").addClass('active');
          $("#scrollspy-third-bullet").removeClass('active');
          $("#scrollspy-fourth-bullet").removeClass('active');

        }
      }
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if ($element.hasClass('third-scrollspy')) {
          $("#scrollspy-first-bullet").removeClass('active');
          $("#scrollspy-second-bullet").removeClass('active');
          $("#scrollspy-third-bullet").addClass('active');
          $("#scrollspy-fourth-bullet").removeClass('active');

        }
      }
      if ((element_bottom_position >= window_top_position) && (element_top_position <= (window_bottom_position - el_offset))) {
        if ($element.hasClass('fourth-scrollspy')) {
          $("#scrollspy-first-bullet").removeClass('active');
          $("#scrollspy-second-bullet").removeClass('active');
          $("#scrollspy-third-bullet").removeClass('active');
          $("#scrollspy-fourth-bullet").addClass('active');

        }
      }
      // else {
      //   $element.removeClass('in-view');
      // }
    })
  };
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');





