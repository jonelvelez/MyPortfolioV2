(function ($) {
  'use strict';

  var junjun_window = $(window);

  // *********************
  // :: 1.0 Preloader 
  // :: ES6 For Short Code Hehehe
  // *********************

  junjun_window.on('load', () => $('#preloader').fadeOut('1000', () => $(this).remove()));

  // *******************************
  // :: 2.0 Header menuBar &
  // :: mobileNav Function 
  // *******************************

  if ($.fn.bgmenuNav) {
      $('#junjunNav').bgmenuNav();
  }

  // *********************************
  // :: 3.0 Welcome Slides 
  // :: Button Arrow Function
  // *********************************

  if ($.fn.owlCarousel) {
      var welcomeSlider = $('.welcome-slides');
      welcomeSlider.owlCarousel({
          items: 1,
          loop: true,
          autoplay: true,
          smartSpeed: 1000,
          autoplayTimeout: 10000,
          nav: true,
          navText: [('<i class="ti-arrow-left"></i>'), ('<i class="ti-arrow-right"></i>')]
      })

      // Mag A-Arrow Function Ulit Ako. 
      welcomeSlider.on('translate.owl.carousel', () => { var layer = $("[data-animation]");
          layer.each(() => {
              var anim_name = $(this).data('animation');
              $(this).removeClass('animated ' + anim_name).css('opacity', '0');
          });
      });

      $("[data-delay]").each(() => {
          var anim_del = $(this).data('delay');
          $(this).css('animation-delay', anim_del);
      });

      $("[data-duration]").each(() => {
          var anim_dur = $(this).data('duration');
          $(this).css('animation-duration', anim_dur);
      });

      welcomeSlider.on('translated.owl.carousel', () => {
          var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
          layer.each(() => {
              var anim_name = $(this).data('animation');
              $(this).addClass('animated ' + anim_name).css('opacity', '1');
          });
      });
  }

  // ************************************
  // :: 4.0 Slides odarbeImg Function
  // ************************************

  if ($.fn.owlCarousel) {
      var odarbeImgFeedSlider = $('.odarbeImg-feed-area');
      odarbeImgFeedSlider.owlCarousel({
          items: 6,
          loop: true,
          autoplay: true,
          smartSpeed: 1000,
          autoplayTimeout: 3000,
          responsive: {
              0: {
                  items: 2
              },
              576: {
                  items: 3
              },
              768: {
                  items: 4
              },
              992: {
                  items: 5
              },
              1200: {
                  items: 6
              }
          }
      })
  }

  // *********************************
  // :: 5.0 3n3$t0 M 0d6rb3 Gallery Active Code
  // *********************************

  if ($.fn.imagesLoaded) {
      $('.junjun-portfolio').imagesLoaded(function () {
          // filter items on button click
          $('.portfolio-menu').on('click', 'button', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({
                  filter: filterValue
              });
          });
          // init Isotope
          var $grid = $('.junjun-portfolio').isotope({
              itemSelector: '.single_gallery_item',
              percentPosition: true,
              masonry: {
                  columnWidth: '.single_gallery_item'
              }
          });
      });
  }

  // ***********************************
  // :: 6.0 Portfolio Button Active Code
  // ***********************************
  
  $('.portfolio-menu button.btn').on('click', function () {
      $('.portfolio-menu button.btn').removeClass('active');
      $(this).addClass('active');
  })

  // *********************************
  // :: 8.0 For Scroll Down & Up From  
  // :: Header Hover Function
  // *********************************

  junjun_window.on('scroll', () => {
      if (junjun_window.scrollTop() > 0) {
          $('.main-header-area').addClass('sticky');
      } else {
          $('.main-header-area').removeClass('sticky');
      }
  });

  // *********************************
  // :: 9.0 Gallery Function Button
  // *********************************
  if ($.fn.magnificPopup) {
      $('.video-play-btn').magnificPopup({
          type: 'iframe'
      });
      $('.portfolio-img').magnificPopup({
          type: 'image',
          gallery: {
              enabled: true,
              preload: [0, 2],
              navigateByImgClick: true,
              tPrev: 'Previous',
              tNext: 'Next'
          }
      });
  }

  // **************************
  // :: 10.0 Tooltip Active Code
  // **************************
  if ($.fn.tooltip) {
      $('[data-toggle="tooltip"]').tooltip();
  }

  // ***********************
  // :: 11.0 WOW Active Code
  // ***********************
  if (junjun_window.width() > 767) {
      new WOW().init();
  }

  // ****************************
  // :: 12.0 Jarallax Active Code
  // ****************************
  if ($.fn.jarallax) {
      $('.jarallax').jarallax({
          speed: 0.5
      });
  }

  // ****************************
  // :: 13.0 Scrollup Button
  // :: Backtotop Function
  // ****************************
  if ($.fn.scrollUp) {
      junjun_window.scrollUp({
          scrollSpeed: 1000,
          scrollText: '<i class="arrow_carrot-up"</i>'
      });
  }

  // *********************************
  // :: 14.0 Prevent Default 'a' Click
  // *********************************
  $('a[href="#"]').on('click', ($) => {
      $.preventDefault();
  });

})(jQuery);