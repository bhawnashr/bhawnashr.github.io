$(window).on("load",function(){

    'use strict';
    
    $("#pageloader").delay(1200).fadeOut("slow");
    $(".loader-item").delay(700).fadeOut();

});
/* ==============================================
Custom Javascript
=============================================== */

$(document).ready(function() {  
  'use strict'

    // On Scroll Animation
    new WOW().init();

    $('select').niceSelect();

  	// Dropdown Menu For Mobile
	$('.dropdown-menu a.dropdown-toggle-mob').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');

      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });

      return false;
    });

    $('[data-toggle="tooltip"]').tooltip();


	// On Scroll Header Style One
	$(window).on("scroll",function(){
        if ($(this).scrollTop() > 100) {
            $('.header-fullpage').addClass('fixed animated fadeInDown');
        } else {
            $('.header-fullpage').removeClass('fixed animated fadeInDown');
        }
    });

    $('#search_home, .overlay-close').on( "click", function($e) {
      $e.preventDefault();
      $(".overlay").toggleClass("open");     
   });

	// On Scroll Back To Top Arrow
    $(window).on("scroll",function(){
        if ($(this).scrollTop() > 100) {
            $('#mkdf-back-to-top').addClass('on');
        } else {
            $('#mkdf-back-to-top').removeClass('on');
        }
    });

   	$('#mkdf-back-to-top').on( "click", function($e) {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    // Flickr Photostream
    $('#basicuse').jflickrfeed({
        limit: 9,
        qstrings: {
            id: '52617155@N08'
        },
        itemTemplate: '<li><a href="{{image_b}}"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
    });

    // Bootstrap Collapse
    // $('.collapse').on('shown.bs.collapse', function(){
    //     $(this).parent().find(".icofont-rounded-down").removeClass("icofont-rounded-down").addClass("icofont-rounded-up");
    //     }).on('hidden.bs.collapse', function(){
    //     $(this).parent().find(".icofont-rounded-up").removeClass("icofont-rounded-up").addClass("icofont-rounded-down");
    // });

    $('.toggle').on("click", function ($e) {

        // alert();

        $('.toggle').removeClass("arrow-down");

        if (!$(this).next().hasClass('show')) {
            $(this).parent().children('.collapse.show').collapse('hide');
            $(this).toggleClass('arrow-down');

        }
        $(this).next().collapse('toggle');


    });
    
    // Animated Skill Bars      
    $('.skillbar').appear();
        $('.skillbar').on('appear', function () {           
        $(this).find('.skillbar-bar').animate({
            width: $(this).attr('data-percent')
        }, 3000);           
    });

    $('.chart').easyPieChart({
        easing: 'easeInSine',
        barColor: "#232135",
        lineCap: 'round',
        scaleColor: false,
        size: '100',
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    // Twitter Feed
    $(".tweet-stream").tweet({
        username: "envato",
        modpath: "twitter/",
        count: 1,
        template: "{text}{time}",
        loading_text: "loading twitter feed..."
    });

    // Open Video
    jQuery('.play-video').on('click', function(e) {
        var videoContainer = jQuery('.video-box');
        videoContainer.prepend('<iframe src="http://player.vimeo.com/video/7449107" width="500" height="281" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
        videoContainer.fadeIn(300);
        e.preventDefault();
    });
    // Close Video
    jQuery('.close-video').on('click', function(e) {
        jQuery('.video-box').fadeOut(400, function() {
            jQuery("iframe", this).remove().fadeOut(300);
        });
    });

    $("#home-client-testimonials").owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: true,
        slideBy: 1,
        dots: false,
        center: false,
        autoplay: true,
        autoheight: true,
        navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
        responsive: {
            320: {
                items: 1,
            },
            480: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
                loop: true,
            },
            1200: {
                items: 2,
                loop: true,
            }
        }
    }); 

    $("#client-testimonials-bg").owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        nav: true,
        slideBy: 1,
        dots: false,
        center: false,
        autoplay: true,
        autoheight: true,
        navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>']
    }); 

    $("#home-clients").owlCarousel({
        items: 2,
        margin: 30,
        loop: true,
        nav: false,
        slideBy: 1,
        dots: false,
        center: false,
        autoplay: true,
        autoheight: true,
        navText: ['<i class="icofont-thin-left"></i>', '<i class="icofont-thin-right"></i>'],
        responsive: {
            320: {
                items: 2,
            },
            600: {
                items: 3,
            },
            767: {
                items: 4,
            },
            1000: {
                items: 4,
                loop: true,
            },
            1200: {
                items: 6,
                loop: true,
            }
        }
    }); 

    /* Conter */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // Google Map
    $("#map_extended").gMap({
        markers: [{
            address: "",
            html: '<h4>Office</h4>' +
                '<address>' +
                '<div>' +
                '<div><b>Address:</b></div>' +
                '<div>Envato Pty Ltd, 13/2<br> Elizabeth St Melbourne VIC 3000,<br> Australia</div>' +
                '</div>' +
                '<div>' +
                '<div><b>Phone:</b></div>' +
                '<div>+1 (408) 786 - 5117</div>' +
                '</div>' +
                '<div>' +
                '<div><b>Fax:</b></div>' +
                '<div>+1 (408) 786 - 5227</div>' +
                '</div>' +
                '<div>' +
                '<div><b>Email:</b></div>' +
                '<div><a href="mailto:info@logzee.com">info@logzee.com</a></div>' +
                '</div>' +
                '</address>',
            latitude: -33.87695388579145,
            longitude: 151.22183918952942,
            icon: {
                image: "./assets/images/pin.png",
                iconsize: [35, 48],
                iconanchor: [17, 48]
            }
        }, ],
        icon: {
            image: "./assets/images/pin.png",
            iconsize: [35, 48],
            iconanchor: [17, 48]
        },
        latitude: -33.87695388579145,
        longitude: 151.22183918952942,
        zoom: 16
    });

    jQuery("#contactusForm").validate({
        meta: "validate",
        /* */
        rules: {
            name: "required",

            lastname: "required",
            // simple rule, converted to {required:true}
            email: { // compound rule
                required: true,
                email: true
            },
            phone: {
                required: true,
            },
            cment: {
                required: true
            },
            subject: {
                required: true
            }
        },
        messages: {
            name: "Please enter your name.",
            lastname: "Please enter your last name.",
            email: {
                required: "Please enter email.",
                email: "Please enter valid email"
            },
            phone: "Please enter a phone.",
            subject: "Please enter a subject.",
            cment: "Please enter a comment."
        },
    }); /*========================================*/
    
    // init cubeportfolio
    $('#js-grid-juicy-projects').cubeportfolio({
        filters: '#js-filters-juicy-projects',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'quicksand',
        gapHorizontal: 35,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 3,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
            }
        }],
        caption: 'zoom',
        displayType: 'sequentially',
        displayTypeSpeed: 80,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageCallback: function(url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
            var t = this;

            $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'html',
                    timeout: 30000
                })
                .done(function(result) {
                    t.updateSinglePage(result);
                })
                .fail(function() {
                    t.updateSinglePage('AJAX Error! Please refresh the page!');
                });
        },

        plugins: {
            loadMore: {
                element: '#js-loadMore-juicy-projects',
                action: 'click',
                loadItems: 3,
            }
        },
    });

    $('#js-grid-masonry').cubeportfolio({
        filters: '#js-filters-masonry',
        layoutMode: 'grid',
        defaultFilter: '*',
        animationType: 'slideDelay',
        gapHorizontal: 30,
        gapVertical: 30,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1500,
            cols: 4,
        }, {
            width: 1100,
            cols: 3,
        }, {
            width: 800,
            cols: 2,
        }, {
            width: 480,
            cols: 2,
            options: {
                caption: '',
            }
        }],
        caption: 'zoom',
        displayType: 'bottomToTop',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
    });

    $("#js-styl2-mosaic").cubeportfolio({
        filters: "#js-filters-styl2-mosaic",
        loadMore: "#js-loadMore-styl2-mosaic",
        loadMoreAction: "click",
        layoutMode: "mosaic",
        sortToPreventGaps: !0,
        defaultFilter: "*",
        animationType: "quicksand",
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: "responsive",
        mediaQueries: [{
            width: 1500,
            cols: 5
        }, {
            width: 1100,
            cols: 4
        }, {
            width: 800,
            cols: 3
        }, {
            width: 480,
            cols: 2
        }, {
            width: 320,
            cols: 1
        }],
        caption: "zoom",
        displayType: "fadeIn",
        displayTypeSpeed: 400
    });

    $('#js-grid-slider-testimonials').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: true,
        showPagination: true,
        rewindNav: true,
        scrollByPage: false,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 0,
            cols: 1,
        }],
        gapHorizontal: 0,
        gapVertical: 0,
        caption: '',
        displayType: 'default',
    });

    // init cubeportfolio
    $('#js-grid-slider-team').cubeportfolio({
        layoutMode: 'slider',
        drag: true,
        auto: false,
        autoTimeout: 5000,
        autoPauseOnHover: true,
        showNavigation: false,
        showPagination: true,
        rewindNav: true,
        scrollByPage: true,
        gridAdjustment: 'responsive',
        mediaQueries: [{
            width: 1680,
            cols: 5,
        }, {
            width: 1350,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 2,
        }],
        gapHorizontal: 0,
        gapVertical: 45,
        caption: '',
        displayType: 'fadeIn',
        displayTypeSpeed: 400,
    });

    $(".btn-settings").on("click", function() {
        $(this).parent().toggleClass("active");
    });
    $(".color-list div").on("click", function() {
        if ($(this).hasClass("active")) return;
        $("link.color-scheme-link").remove(), $(this).addClass("active").siblings().removeClass("active");
        var e = $(this).attr("data-src"),
            i = $('<link class="color-scheme-link" rel="stylesheet" />');
        i.attr("href", e).appendTo("head")
    }), $(".reset").on("click", function() {
        if ($(".color-list div").removeClass("active"), $(this).hasClass("active")) return !1;
        $("link.color-scheme-link").remove();
        var e = $(this).attr("data-src"),
            i = $('<link class="color-scheme-link" rel="stylesheet" />');
        i.attr("href", e).appendTo("head")
    }), $(".reset span").on("click", function() {
        var e = $(this).attr("class");
        $("body").attr("class", e)
    });
    
});
