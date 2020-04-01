$(document).ready(function () {
  $('#range-slider-body').slider({
    range : true,
    min: 0,
    max: 15000,
    values: [ 5000, 10000 ],
    slide: function( event, ui ) {
      $( "#amount-slider-price" ).val( ui.values[ 0 ] + "₽" + " - " + ui.values[ 1 ] + "₽" );
    }
  });
  $( "#amount-slider-price" ).val( "" + $( "#range-slider-body" ).slider( "values", 0 ) + "₽" +
      " - " + $( "#range-slider-body" ).slider( "values", 1 ) + "₽" );
});