/*-------------------------------------------------------------------------------
  PRE LOADER
-------------------------------------------------------------------------------*/

$(window).load(function() {
  $('.loader').fadeOut(1000);  // set duration in brackets
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip({boundary: 'window'});
});