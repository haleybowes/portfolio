'use strict';

// hamburger menu

(function () {

    var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),

        doToggle: function doToggle(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };

    hamburger.navToggle.addEventListener('click', function (e) {
        hamburger.doToggle(e);
    });

    // smooth scroll start

    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');$target.focus();
                    };
                });
            }
        }
    });

    // logo button fade in + link

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 600) {
            $("#haleyslogo").fadeIn(200);
        } else {
            $("#haleyslogo").fadeOut(200);
        }
    });

    $(".nav > ul > li > a").on('click touch', function () {
        if ($('.nav').hasClass('expanded')) {
            $('.nav').toggleClass('expanded');
            $('.nav-toggle').toggleClass('expanded');
        }
    });
})();