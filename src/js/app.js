$(document).ready(function () {});
// Add page load 
$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

// Add animation classes
$('img').addClass("animated slideInUp wow");
//$('col-sm-3').addClass("animated fadeInUp wow");
