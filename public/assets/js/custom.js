/* =====================================
Template Name: Metalpeak
Author Name: Webby Crown
Author URI: 
Description: Metalpeak HTML5 Template.
Version:1.0
========================================*/

// [ js Table of contents ]
// | |
// | |___ 01. navbar
// | |___ 02. mobile menu dropdown
// | |___ 03. search btn
// | |___ 04. our partner slider
// | |___ 05. sticky header
// | |___ 06. team slider
// | |___ 07. home-1 portfolio tab
// | |___ 08. testimonial slider
// | |___ 09. index-two-hero-section-slider
// | |___ 10. testimonial-slider
// | |___ 11. hero-three-slider
// | |___ 12. blog-three-slider
// | |___ 07. testimonial-three-slider
// | |___ 08. services-detail-two-slider
// | |___ 09. services-detail-three-image-slider
// | |___ 10. masonary-image
// | |___ 11. Portfolio Slider
// | |___ 12. faq
// | |___ 08. presantation-inner-page-slider
// | |___ 09. team-popup
// | |___ 10. video-popup
// | |___ 11. ul li categories dropdown
// | |___ 12. animation
// | |___ 09. loader
// | |___ 10. apply popup


$(document).ready(function () {

    // navbar

    jQuery(".wc-navbar .bars-btn").click(function () {
        jQuery(".wc-navbar").toggleClass("active");
        jQuery(".wc-navbar .wc-navlist").slideToggle();
    });


    // mobile menu dropdown

    $(".mobile-navigation div").click(function() {
      $("ul").slideToggle();
      $("ul ul").css("display", "none");
      $(".mobile-navigation .on").toggleClass("on");
  });
    $(".parent-menu").click(function(e) {
      $(this)
      .find("> ul")
      .slideToggle();
      $(this)
      .find("> ul ul")
      .css("display", "none");
      $(this)
      .find("> ul li")
      .removeClass("on");
      $(this).toggleClass("on");
      e.stopPropagation();
  });



        $(".parent-menu").hover(function () {
        var isHovered = $(this).is(":hover");
        if (isHovered) {
            $(this).children(".sub-menu").stop().slideDown(300);
        } else {
            $(this).children(".sub-menu").stop().slideUp(300);
        }
    });


    // search btn

    $(".wc-search a").click(function () {
        $(".wc-search-wrap").addClass("active");
    });
    $(".wc-search-close-btn").click(function () {
        $(".wc-search-wrap").removeClass("active");
    });


    // our partner slider
    var swiper = new Swiper(".partner-image .mySwiper", {
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
        pagination: {
            el: ".partner-image .swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 16,
            },
        }
    });



    // sticky header
    $(window).scroll(function () {
        
        if ($(this).scrollTop() > 100) {
            $('.header, .header-two, .header-three').addClass("sticky");
        }
        else {
            $('.header, .header-two').removeClass("sticky");
        }
    });


    // team slider

    var swiper = new Swiper(".wc-team-image-wrapper .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".wc-team-image-wrapper .swiper-pagination",
            clickable: true,
        },
        breakpoints: {

            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1440: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }
    });


    // home-1 portfolio tab
    // Show the first tab and hide the rest
    $('.portfolio-tab li:first-child').addClass('active');
    $('.portfolio-tab-content').hide();
    $('.portfolio-tab-content:first').show();

    // Click function
    $('.portfolio-tab li').click(function () {
        $('.portfolio-tab  a').removeClass('active');
        $(this).find('a').addClass('active');
        $('.portfolio-tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });


    // testimonial slider
    var swiper = new Swiper(".testimonial-wrapper .mySwiper", {
        pagination: {
            el: ".testimonial-wrapper .swiper-pagination",
            clickable: true,
        },
    });


    // index-two-hero-section
    var swiper = new Swiper(".hero-two .mySwiper", {
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
      effect: 'fade',

  });

    var swiper2 = new Swiper(".hero-two .mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".hero-two .hero-next-btn",
        prevEl: ".hero-two .hero-prev-btn",
    },
    thumbs: {
        swiper: swiper,
    },
});


    // testimonial-slider

    var swiper = new Swiper(".testimonial-two-wrapper .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".testimonial-two-next-btn",
            prevEl: ".testimonial-two-prev-btn",
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 50,
            },
        },
    });


    // hero-three-slider

    var swiper = new Swiper(".hero-three  .mySwiper", {
        loop: true,
        navigation: {
            nextEl: ".hero-three  .hero-next-btn",
            prevEl: ".hero-three  .hero-prev-btn",
        },
    });


    // blog-three-slider
    var swiper = new Swiper(".blog-wrapper .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".blog-wrapper .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        }
    });



    // testimonial-three-slider
    var swiper = new Swiper(".testimonial-wrapper-three .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
            el: ".testimonial-wrapper-three .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 16,
            },
        }
    });


    // services-detail-two-slider
    var swiper = new Swiper(".image-slider-wrapper .mySwiper", {
        navigation: {
            nextEl: ".image-slider-wrapper .swiper-button-next",
            prevEl: ".image-slider-wrapper .swiper-button-prev",
        },
    });



    // services-detail-three-image-slider
    var swiper = new Swiper(".services-detail-three-image-slider .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: ".services-detail-three-image-slider .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 5,
            },
        }
    });


    // masonary-image
    var $grid = $('.portfolio-masonary .grid').masonry({
        itemSelector: '.portfolio-masonary .grid-item',
        percentPosition: true,
        columnWidth: '.portfolio-masonary .grid-sizer',
        gutter: 24
    });


    // Portfolio Slider
    var swiper = new Swiper(".Portfolio-Slider-wrapper .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        pagination: {
            el: ".Portfolio-Slider-wrapper .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".Portfolio-Slider-wrapper .swiper-button-next",
            prevEl: ".Portfolio-Slider-wrapper .swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
        }
    });


    // faq
    $(function () {
        $('.acc-title').click(function (j) {

            var dropDown = $(this).closest('.acc-card').find('.acc-panel');
            $(this).closest('.acc').find('.acc-panel').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                $(this).closest('.acc').find('.acc-title.active').removeClass('active');
                $(this).addClass('active');
            }

            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });
    });



    // presantation-inner-page-slider
    var swiper = new Swiper(".inner-image-slider .mySwiper", {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 20,
        grabCursor: true,
        pagination: {
            el: ".inner-image-slider .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".inner-image-slider .swiper-button-next",
            prevEl: ".inner-image-slider .swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 45,
            },
        }
    });



// team-popup
    $(document).ready(function () {
        $('.popup-with-form').magnificPopup({
            type: 'inline',
            preloader: false,
            focus: '#name',

            // When elemened is focused, some mobile browsers in some cases zoom in
            // It looks not nice, so we disable it:
            callbacks: {
                beforeOpen: function () {
                    if ($(window).width() < 700) {
                        this.st.focus = false;
                    } else {
                        this.st.focus = '#name';
                    }
                }
            }
        });
    });



    // video-popup
    $(document).ready(function () {
        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });


     // ul li categories dropdown
     $('.select-dropdown-button').on('click', function(){
        $('.select-dropdown-list').toggleClass('active');
    });
     $('.select-dropdown-list-item').on('click', function(){
        var itemValue = $(this).data('value');
        $('.select-dropdown-button span').text($(this).text()).parent().attr('data-value', itemValue);
        $('.select-dropdown-list').toggleClass('active');
    });



// animation
AOS.init({
    once: true,
    duration: 1200,
});


      // loader
      //After 2s preloader is fadeOut
      $('body, html').addClass('no-scroll');
      $('.loader').delay(2000).fadeOut('slow');
      setTimeout(function() {
      //After 2s, the no-scroll class of the body will be removed
      $('body, html').removeClass('no-scroll');
      }, 2000); //Here you can change preloader time


// apply popup
$(document).ready(function() {
    $('.career-apply .popup-with-form').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#name',

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            beforeOpen: function() {
                if($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = '#name';
                }
            }
        }
    });
});


$(document).on('submit','#contact_form', function(e) {
    e.preventDefault(); 

    const $form = $(this);
    var $message = $form.find('.form-message');
    $('.field-error').html('');
    $message.html(''); 
    const formData = new FormData(this);

    $.ajax({
      url: $form.attr('action'),  
      method: 'POST',
      data: formData,
      processData: false, 
      contentType: false, 
      success: function(response) {
        // You get a JSON response from Statamic
        if(response.success) {
          $message.text("Thank you! We'll be in touch shortly.").css('color', '#0e5e6f').fadeIn();
          setTimeout(() => {
            $form[0].reset();
            $message.html(''); 
            $.magnificPopup.close();
          }, 1500);

        } 
      },
      error: function(response) {
        if (response.responseJSON.error) {
         $.each(response.responseJSON.error, function(field, message) {
          const $input = $form.find('[name="' + field + '"]');
          const $errorContainer = $form.find('[data-error-for="' + field + '"]');

          $input.addClass('error');
          $errorContainer.html(Array.isArray(message) ? message.join('<br>') : message);
        });
      }
        
      
      }
    });
  });




$(document).on('click', '.ajax-load-more-grid', function (e) {
    e.preventDefault();

    var $button = $(this);
    var nextPageUrl = $button.attr('href');
    var currentPage = parseInt($('.currentPage').val());
    var lastPage = parseInt($('.lastPage').val());
    var pageNum = 1;
    if (nextPageUrl) {
        var urlParams = new URLSearchParams(nextPageUrl.split('?')[1]);
        pageNum = parseInt(urlParams.get('page')) || 1;
    }

    const appEnv = document.querySelector('meta[name="app-env"]')?.getAttribute('content');
    if (appEnv === 'production') {
        if (nextPageUrl && nextPageUrl.startsWith("http:")) {
            nextPageUrl = nextPageUrl.replace(/^http:/, "https:");
        }
    }
    
    $button.find('img').removeClass('hidden');
    if (!nextPageUrl || currentPage >= lastPage) {
        $button.find('img').addClass('hidden');
        $button.remove();
        return;
    }

    $button.prop('disabled', true).addClass('loading');
    $.ajax({
        url: nextPageUrl,
        type: 'GET',
        dataType: 'html',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        success: function (response) {
            var $response = $('<div>').html(response);
            var $newItems = $response.find('.grid-item-append');
            var $newLoadMoreWrap = $response.find('.load-more-wrap');
            $button.find('img').addClass('hidden');


            if ($newItems.length) {
                $('.grid_append').append($newItems).isotope('appended', $newItems);
                if ($('.portfolio-masonary .grid').find('.grid-sizer').length) {
                    $newItems.imagesLoaded(function () {
                        $grid.masonry('appended', $newItems);
                    });
                }
            }

            if ($newLoadMoreWrap.length) {
                $('.load-more-wrap').html($newLoadMoreWrap.html());
            } else {
                $('.load-more-wrap').remove();
            }

            if (pageNum == lastPage) {
                $('.load-more-wrap').remove(); 
            } 

        },
        error: function (xhr, status, error) {
            $button.find('img').addClass('hidden');
            console.error('Load more error:', error);
        },
        complete: function () {
            $button.prop('disabled', false).removeClass('loading');
        }
    });
});

$(document).on('click', '.team-popup-link', function(e) {
    e.preventDefault();

    var $button = $(this);
    var slug = $button.data('slug');
    var $popup = $('#team-popup');

    // Optional: show temporary loading state
    $popup.html('<div class="loading-message">Loading team details...</div>');

    // Fetch popup content from the server
    $.ajax({
        url: '/team/' + slug + '?type=popup',
        type: 'GET',
        dataType: 'html',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        success: function(response) {
            // Extract only the .team-popups content from the response
            var $response = $('<div>').html(response);
            var $popupContent = $response.find('.team-popups').html();

            if ($popupContent) {
                $popup.html($popupContent);

                // Open the popup after successful content injection
                $.magnificPopup.open({
                    items: {
                        src: '#team-popup'
                    },
                    type: 'inline'
                });
            } else {
                $popup.html('<div class="error-message">No content found for this team member.</div>');
            }
        },
        error: function(xhr, status, error) {
            // Show error message and a retry option
            $popup.html(
                '<div class="error-message">' +
                    '<p>Error loading team member details.</p>' +
                    '<button class="retry-btn">Retry</button>' +
                '</div>'
            );

            // Retry click handler
            $popup.on('click', '.retry-btn', function() {
                $button.trigger('click');
            });
        }
    });
});

$('.progressbar .bar').each(function () {
    var $this = $(this);
    var percentage = $this.find('h6').text().replace('%', '').trim();

    $this.animate({
        width: percentage + '%'
        }, 800); // 800ms animation
});


$(document).on('submit','.get-free-quote-form', function(e) {
      e.preventDefault(); 
      const $form = $(this);  
      const email = $form.find('#email').val();
      var $message = $form.find('.form-message');

      const successColor = $message.data('success-color') || '#01452C';

      $.ajax({
        url: newsLetterUrl,  
        method: 'get',
        data: {
          email:email
        },
        dataType: 'json',
        success: function(response) {
        // You get a JSON response from Statamic
          if (response.status === true) {
            $message.text(response.message).css('color', successColor).fadeIn();
              setTimeout(() => {
                $form[0].reset();
              }, 1000);
          } else {
            $message.text(response.message).css('color', '#df5243').fadeIn();           
          }
        },
        error: function(response) {
         
        }
      });
    });

$(document).on('click', '.pagination a', function(e) {
    e.preventDefault();
    let url = $(this).attr('href'); // ✅ use `let`, not `const`
    const appEnv = document.querySelector('meta[name="app-env"]')?.getAttribute('content');

    if (appEnv === 'production') {
        if (url && url.startsWith("http:")) {
            url = url.replace(/^http:/, "https:"); // ✅ now valid
        }
    }
    $('.grid_append').load(url + ' .grid_append > *');
    $('.pagination-part').load(url + ' .pagination-part > *');
});


$(document).on('click', '.search-btn', function (e) {
    e.preventDefault();
    const query = $('#blog-search-input').val();

    if (currentPage == 'blog-detail-two' || currentPage == 'blog-detail-three') {
        window.location.href = blogPageRedirect+'?s='+encodeURIComponent(query);
    }

    if (currentPage == 'blog-classic') {
        window.location.href = blogClassicPageRedirect+'?s=' + encodeURIComponent(query);
    }
});

const $input = $('#site-search-input');
    const $resultBox = $('#combined-search-results');
    const $loader = $('#search-loader');
    const $svg = $('#search-loader svg');
    const $viewAllBtns = $('.toggle-view-btn');
    let angle = 0;
    let rotateInterval;

    function rotate() {
        rotateInterval = setInterval(() => {
            angle = (angle + 6) % 360;
            $svg.css('transform', `rotate(${angle}deg)`);
        }, 16); // ~60fps
    }

    rotate();

    if (!$input.length || !$resultBox.length || !$loader.length) return;

    let timeout;

    $input.on('keypress', function (e) {
        if (e.which === 13) {
            e.preventDefault();
            const query = $.trim($input.val());
            if (query.length > 0) {
                window.location.href = `/blog?s=${encodeURIComponent(query)}`;
            }
        }
    });

    $input.on('keyup', function () {
        const query = $.trim($input.val());
        clearTimeout(timeout);


        if (query.length < 2) {
            $resultBox.html('').removeClass('show');
            $loader.addClass('hidden').css('display', 'none');
            $resultBox.addClass('hidden');
            $viewAllBtns.each(function () {
                const type = $(this).data('type');
                $(this).attr('href', `/${type}?s=`);
            });
            
            return;
        }



        $loader.removeClass('hidden').css('display', 'flex');

        timeout = setTimeout(() => {
            
            $.ajax({
                url: headerSearch + `?s=${encodeURIComponent(query)}`,
                method: 'GET',
                success: function (html) {
                    $resultBox.removeClass('hidden');
                    $resultBox.html(html).addClass('show');


                    $('.toggle-view-btn').each(function () {
                        const type = $(this).data('type');
                        if (type) {
                            $(this).attr('href', `/${type}?s=${encodeURIComponent(query)}`);
                            $(this).attr('data-query', query);
                        }
                    });

                },
                error: function () {
                    $resultBox.html('<p class="text-red-600">Error loading results.</p>').addClass('show');
                },
                complete: function () {
                    $loader.addClass('hidden').css('display', 'none');
                }
            });
        }, 500);
    });

    $(document).on('click','.close-search-log',function () {        
        $("#combined-search-results").addClass("hidden");
        $("#combined-search-results").removeClass("open");
        $('#site-search-input').val('');
    });

});