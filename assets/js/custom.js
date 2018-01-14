/* ================================================================
    Author       : WPxpart
    Template Name: Halda - Personal Portfolio HTML Template
    Tags: One Page portfolio, Creative Template,  professional, landing, HTML 
    Version      : 1.0
=================================================================*/
(function ($) {
    "use strict";
    //   Active mixiup
    $('.portfolio-items').mixItUp();
    // Active parallax
    $('.mid-header-area').parallax("50%", -.1);
    jQuery(".user-quote").YTPlayer();

    /*
        slider add
    */
    $('#slides').superslides({
        animation: 'fade',
        play: 3000
    });
    /*==================================================
            magnific Popup js
 ===================================================*/
    var magnifPopup = function () {
        $('.popup').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it
                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function
                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function (openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    };
    // Call the functions 
    magnifPopup();
    /*===========================================
    Add smooth scrolling to all links
=============================================*/
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top + 80
            }, 1200, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    /*============================================
            add sticky class
==================================================*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 0) {
            $('.site-header').addClass('sticky');
        } else {
            $('.site-header').removeClass('sticky');
        }
    });
    /*==============================================
            responsive menu
========================================================*/
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
    $(".toggle-btn").on("click", function () {
        $(this).toggleClass("active");
        $(".site-header").toggleClass("active");
    });
    /*=====================================
           PRELOADER JS
==========================================*/
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.preloader');
        var preloaderArea = jQuery('.preloader-area');
        preloader.fadeOut();
        preloaderArea.delay(500).fadeOut('slow');
    });
})(jQuery);
