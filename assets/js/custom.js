/**
 * Main JS file for Horace behaviours
 */
(function ($) {
	"use strict";

	var $body = $('body');

	$(document).ready(function(){

		// Responsive video embeds
		$('.post-content').fitVids();

		// Scroll to top
		$('#top-button').on('click', function(e) {
			$('html, body').animate({
				'scrollTop': 0
			});
			e.preventDefault();
		});
		
		// Sidebar
		$('#sidebar-show, #sidebar-hide').on('click', function(e){
			$body.toggleClass('sidebar--opened');
			$(this).blur();
			e.preventDefault();
		});
		$('#site-overlay').on('click', function(e){
			$body.removeClass('sidebar--opened');
			e.preventDefault();
		});

		// Show comments
		var interval = setInterval(function() {
			var disqusHeight = $('#disqus_thread').height();
			if ( disqusHeight > 100 ) {
				$('#comments-area').addClass('comments--loaded');
				clearInterval(interval);
			}
		}, 100);
		$('#comments-overlay, #comments-show').on('click', function(e){
			$('#comments-area').removeClass('comments--loaded').addClass('comments--opened');
			e.preventDefault();
		});

		// var loader;

		// function loadNow(opacity) {
		//     if (opacity <= 0) {
		//         displayContent();
		//     } else {
		//         loader.style.opacity = opacity;
		//         window.setTimeout(function() {
		//             loadNow(opacity - 0.05);
		//         }, 3);
		//     }
		// }

		// function displayContent() {
		//     loader.style.display = 'none';
		//     document.getElementById('content').style.display = 'block';
		// }

		// document.addEventListener("DOMContentLoaded", function() {
		//     loader = document.getElementById('loader');
		//     loadNow(1);
		// });
	// 	$(window).load(function() {
	// 	// Animate loader off screen
	// 	$(".loader").fadeOut("slow");;
	// });
	/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

	$(window).load(function() {
	  $('.loader').fadeOut(1000);  // set duration in brackets
	});

	$(document).ready(function() {
	  $('[data-toggle="tooltip"]').tooltip({boundary: 'window'});
	});


	});

}(jQuery));

/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

// $(window).load(function() {
//   $('.preloader').fadeOut(1000);  // set duration in brackets
// });

// $(document).ready(function() {
//   $('[data-toggle="tooltip"]').tooltip({boundary: 'window'});
// });
