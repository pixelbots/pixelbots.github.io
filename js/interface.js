$(document).ready(function() {

        // Scroll functions
        var scrolled = false;
        var scrollPos;

        $(window).scroll(function() {
            scrolled = true;
        });

        setInterval(function() {
            if (scrolled) {
                scrolled = false;
                scrollPos = $(window).scrollTop();
                suchScroll();
            }
        }, 10);

        function suchScroll() {
            $('[data-js="suchScroll"]').each(function() {
                var scrollObj = $(this); // assigning the object
                var fadeScreen = $(this).find('.fade-screen');

                // Set background y-position
                var yPos = (scrollPos / (100 / scrollObj.data('speed'))); 

                // Set screen alpha
                var alpha = (scrollPos / (scrollObj.height() * 1.5));
                 
                // Put together our final background position
                var coords = '50% '+ yPos + 'px';

                // Move the background
                scrollObj.css({ backgroundPosition: coords });

                // Fade out
                fadeScreen.css('opacity' , alpha);
            }); 
        }

    });