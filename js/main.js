(function($) {
        "use strict";
        jQuery(document).on('ready',function(e) {
        // Highlight the top nav as scrolling occurs
        jQuery('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 50
        });
        // Closes the Responsive Menu on Menu Item Click
        jQuery('.navbar-collapse ul li a').click(function(){ 
                jQuery('.navbar-toggle:visible').click();
        });
        // Offset for Main Navigation
        jQuery('#mainnav').affix({
            offset: {
                top: 100
            }
        });
        new WOW().init();
        //doctor owl active
        jQuery(".doctor-owl").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds   
        items : 3,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
        });
        //doctor owl active
        jQuery(".testimonial_slide").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds   
        items : 1,
        itemsDesktop : [1199,1],
        itemsDesktopSmall : [979,1]
        });
    
        //Preloader
        setTimeout(function() {
        jQuery('.preloader').fadeOut('slow', function() {});
        }, 2000);
        });
        //Video 
        $("#video").click(function() {
            $.fancybox({
            'padding'       : 0,
            'autoScale'     : false,
            'transitionIn'  : 'none',
            'transitionOut' : 'none',
            'title'         : this.title,
            'width'         : 640,
            'height'        : 385,
            'href'          : this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
            'type'          : 'swf',
            'swf'           : {
            'wmode'             : 'transparent',
            'allowfullscreen'   : 'true'
            }
        });
        return false;
        });
        jQuery("a.bla-1").YouTubePopUp();
        jQuery("a.bla-1").YouTubePopUp( { autoplay: 0 } ); // Disable autoplay
        //Back To Top
        jQuery(window).on('scroll',function(e) {
        if (jQuery(this).scrollTop() > 350) {
            jQuery('#scroll_top').fadeIn();
        } else {
            jQuery('#scroll_top').fadeOut();
        }
        });
        // scroll body to 0px on click
        jQuery('#scroll_top').on('click', function(e) {
        jQuery('#scroll_top').tooltip('hide');
        jQuery('body,html').animate({
            scrollTop: 0
            }, 1500);
            return false;
        });
        //Smoth Scroll
        jQuery(function() {
        jQuery('a[href*="#"]:not([href="#"])').on('click',function(e) {
        var headheight= jQuery("header").height();
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
            jQuery('html, body').animate({
            scrollTop: target.offset().top-79
            }, 1000);
            return false;
            }
            }
        });
        });  
})(jQuery);// End of use strict
