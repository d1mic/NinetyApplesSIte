
/* CUSTOM JAVASCRIPT FILE */

/************************************************************************************ ABOUT US CAROUSEL STARTS */

$(document).ready(function() {
 
  var time = 7; // time in seconds
 
  var $progressBar,
      $bar, 
      $elem, 
      isPause, 
      tick,
      percentTime;
 
    //Init the carousel
    $("#about-carousel").owlCarousel({
      slideSpeed : 500,
      paginationSpeed : 500,
      singleItem : true,
      afterInit : progressBar,
      afterMove : moved,
      startDragging : pauseOnDragging
    });
 
    //Init progressBar where elem is $("#owl-demo")
    function progressBar(elem){
      $elem = elem;
      //build progress bar elements
      buildProgressBar();
      //start counting
      start();
    }
 
    //create div#progressBar and div#bar then prepend to $("#owl-demo")
    function buildProgressBar(){
      $progressBar = $("<div>",{
        id:"progressBar"
      });
      $bar = $("<div>",{
        id:"bar"
      });
      $progressBar.append($bar).prependTo($elem);
    }
 
    function start() {
      //reset timer
      percentTime = 0;
      isPause = false;
      //run interval every 0.01 second
      tick = setInterval(interval, 10);
    };
 
    function interval() {
      if(isPause === false){
        percentTime += 1 / time;
        $bar.css({
           width: percentTime+"%"
         });
        //if percentTime is equal or greater than 100
        if(percentTime >= 100){
          //slide to next item 
          $elem.trigger('owl.next')
        }
      }
    }
 
    //pause while dragging 
    function pauseOnDragging(){
      isPause = true;
    }
 
    //moved callback
    function moved(){
      //clear interval
      clearTimeout(tick);
      //start again
      start();
    }
 
    //uncomment this to make pause on mouseover 
    // $elem.on('mouseover',function(){
    //   isPause = true;
    // })
    // $elem.on('mouseout',function(){
    //   isPause = false;
    // })
 
});


/************************************************************************************ OUR TEAM CAROUSEL STARTS */


$(document).ready(function () {

    //Sort random function

    /*function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }*/

    $("#our-team").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 500,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoHeight: true,
		pagination: false,
		navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        //Call beforeInit callback, elem parameter point to $("#our-team")
       /* beforeInit: function (elem) {
            random(elem);
        }*/

    });

});

/*********************************************************************** OUR TEAM CAROUSEL ENDS */

/************************************************************************************ OUR SERVICES CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $("#our-services").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 500,
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoHeight: true,
		pagination: false,
		navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],
        //Call beforeInit callback, elem parameter point to $("#our-team")
       /* beforeInit: function (elem) {
            random(elem);
        }*/

    });

});


/************************************************************************************ CLIENTS CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $(".clients").owlCarousel({
        autoPlay: 8000,
        slideSpeed: 500,
        items: 5,
        itemsDesktop: [1199, 5],
        itemsDesktopSmall: [979, 4],
        itemsTablet: [768, 3],
        itemsMobile: [479, 2],
        autoHeight: true,
		pagination: false,
		/*navigation: true,
        navigationText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#our-team")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/************************************************************************************ QUOTES CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $(".quotes-p").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        autoHeight: true,
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#our-team")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/************************************************************************************ TESTIMONIALS CAROUSEL STARTS */

$(document).ready(function () {

    //Sort random function

    function random(owlSelector) {
        owlSelector.children().sort(function () {
            return Math.round(Math.random()) - 0.5;
        }).each(function () {
            $(this).appendTo(owlSelector);
        });
    }

    $(".testimonials-p").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
        autoHeight: true,
		/*navigation: true,
        navigationText: [
        "<i class='icon-chevron-left icon-white'></i>",
        "<i class='icon-chevron-right icon-white'></i>"
        ],*/
        //Call beforeInit callback, elem parameter point to $("#our-team")
        beforeInit: function (elem) {
            random(elem);
        }

    });

});

/************************************************************************************ SCROLL TO NAV. STARTS */

$(document).ready(function() {
	$('.nav').onePageNav({
		filter: ':not(.external)',
		begin: function() {
		console.log('start')
		},
		end: function() {
		console.log('stop')
		}
	});

});

/************************************************************************************ STICKY NAV. STARTS */

$(window).load(function(){
          $("#navigation").sticky({ topSpacing: 0 });
		  
        });

/************************************************************************************ BOOTSTRAP LIGHTBOX STARTS */

 $(document).ready(function ($) {
                // delegate calls to data-toggle="lightbox"
                $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
                    event.preventDefault();
                    return $(this).ekkoLightbox({
                        onShown: function() {
                            if (window.console) {
                                return console.log('Checking our the events huh?');
                            }
                        }
                    });
                });

                //Programatically call
                $('#open-image').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });
                $('#open-youtube').click(function (e) {
                    e.preventDefault();
                    $(this).ekkoLightbox();
                });

            });
			

/************************************************************************************ APPEAR PLUGIN STARTS */

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function($) {
    $.fn.appear = function(fn, options) {

        var settings = $.extend({

            //arbitrary data to pass to fn
            data: undefined,

            //call fn only on the first appear?
            one: true,

            // X & Y accuracy
            accX: 0,
            accY: 0

        }, options);

        return this.each(function() {

            var t = $(this);

            //whether the element is currently visible
            t.appeared = false;

            if (!fn) {

                //trigger the custom event
                t.trigger('appear', settings.data);
                return;
            }

            var w = $(window);

            //fires the appear event when appropriate
            var check = function() {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                var ax = settings.accX;
                var ay = settings.accY;
                var th = t.height();
                var wh = w.height();
                var tw = t.width();
                var ww = w.width();

                if (y + th + ay >= b &&
                    y <= b + wh + ay &&
                    x + tw + ax >= a &&
                    x <= a + ww + ax) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

            //create a modified fn with some additional logic
            var modifiedFn = function() {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = $.inArray(check, $.fn.appear.checks);
                    if (i >= 0) $.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

            //bind the modified fn to the element
            if (settings.one) t.one('appear', settings.data, modifiedFn);
            else t.bind('appear', settings.data, modifiedFn);

            //check whenever the window scrolls
            w.scroll(check);

            //check whenever the dom changes
            $.fn.appear.checks.push(check);

            //check now
            (check)();
        });
    };

    //keep a queue of appearance checks
    $.extend($.fn.appear, {

        checks: [],
        timeout: null,

        //process the queue
        checkAll: function() {
            var length = $.fn.appear.checks.length;
            if (length > 0) while (length--) ($.fn.appear.checks[length])();
        },

        //check the queue asynchronously
        run: function() {
            if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
            $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
        }
    });

    //run checks when these methods are called
    $.each(['append', 'prepend', 'after', 'before', 'attr',
        'removeAttr', 'addClass', 'removeClass', 'toggleClass',
        'remove', 'css', 'show', 'hide'], function(i, n) {
        var old = $.fn[n];
        if (old) {
            $.fn[n] = function() {
                var r = old.apply(this, arguments);
                $.fn.appear.run();
                return r;
            }
        }
    });

})(jQuery);
 

/************************************************************************************ PAGE ANIMATED ITEMS STARTS */

	jQuery(document).ready(function($) {
	
	'use strict';

    	$('.animated').appear(function() {
	        var elem = $(this);
	        var animation = elem.data('animation');
	        if ( !elem.hasClass('visible') ) {
	        	var animationDelay = elem.data('animation-delay');
	            if ( animationDelay ) {

	                setTimeout(function(){
	                    elem.addClass( animation + " visible" );
	                }, animationDelay);

	            } else {
	                elem.addClass( animation + " visible" );
	            }
	        }
	    });
});	

/************************************************************************************ PRELOADER STARTS */	

 jQuery(window).load(function() {
             $('#preloader').fadeOut('slow'); 
             
         	});
 
 
 /************************************************************************************ TO TOP STARTS */
 
 $(document).ready(function(){ 
         
             $(window).scroll(function(){
                 if ($(this).scrollTop() > 100) {
                     $('.scrollup').fadeIn();
                 } else {
                     $('.scrollup').fadeOut();
                 }
             }); 
         
             $('.scrollup').click(function(){
                 $("html, body").animate({ scrollTop: 0 }, 600);
                 return false;
             });
         
         });	




 /************************************************************************************ SWITCHER CSS STARTS */ 
 
  $(document).ready(function() {
"use strict";
    $("#hide, #show").click(function () {
        if ($("#show").is(":visible")) {
           
            $("#show").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            
            $("#switch").animate({
                "margin-left": "0px"
            }, 500).show();
        } else {
            $("#switch").animate({
                "margin-left": "-500px"
            }, 500, function () {
                $(this).hide();
            });
            $("#show").show().animate({
                "margin-left": "0"
            }, 500);
        }
    });
                      
});

/************************************************************************************ PORTFOLIO DETAIL STARTS */



    $('.items').click(function (event) {
        event.preventDefault();

        if ($('.portfolio-detail').hasClass('open-box')) {
            $('.portfolio-detail').addClass('closed-box');
            $('.portfolio-detail').removeClass('open-box');
        }

        var fileID = $(this).attr('data-project');

        if (fileID != null) {
            $('html,body').animate({
                scrollTop: $('.portfolio-detail').offset().top - 68
            }, 500);

        }

        $.ajax({
            url: fileID
        }).success(function (data) {
            $('.portfolio-detail').addClass('open-box');
            $('.portfolio-detail').html(data);
            $('.portfolio-detail').removeClass('closed-box');

            $('.close-detail').click(function () {
                $('.portfolio-detail').addClass('closed-box');
                $('.portfolio-detail').removeClass('open-box');
                $('html,body').animate({
                    scrollTop: $('#portfolio').offset().top - 68
                }, 500);
                setTimeout(function () {
                    $('.portfolio-detail').html('');
                }, 1000);
            });
        });

    });











