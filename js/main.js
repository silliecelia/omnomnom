/*menu*/
$( ".hamburger-icon" ).click(function() {
  $( "nav" ).slideDown( 500 );
});

$( ".cancel-icon" ).click(function() {
  $( "nav" ).slideUp( 1000 );
});

/*did you know*/
var $dyk = $('did-you-know-text'),
    cycle;

(cycle = function() {
    $('.text-1').delay(2000).fadeOut('slow');
    $('.text-2').delay(3000).fadeIn('slow');
    $('.text-2').delay(3500).fadeOut('slow');
    $('.text-1').delay(5000).fadeIn('slow', cycle);
/*    $('.text-3').delay(2000).fadeOut('slow');
    $('.text-1').delay(3000).fadeIn('slow', cycle);*/
})();

/*submit button alert*/
$(".submit-btn").click(function(){
    alert("Yay! We received your recipe. You'll see it online sooooon.");
});
