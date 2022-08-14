/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

// $(window).load(function() {
//   $('.loader').fadeOut(1000);  // set duration in brackets
// });

// $(document).ready(function() {
//   $('[data-toggle="tooltip"]').tooltip({boundary: 'window'});
// });
$(function() {
  $(window).on("load", function() {
    $('#preloader').fadeOut('slow', function() {
      $(this).remove();
    });
  });
});

$(function () {
  $.nette.init();
  $('[data-toggle="tooltip"]').tooltip();
  $('body').tooltip({ selector: '[data-toggle="tooltip"]' });
  $(".button-collapse").sideNav();
});
