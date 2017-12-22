$(document).ready(function () {
    $(".card").addClass("animated fadeInRight wow");

    $(".section").addClass("animated bounceInBottom wow");

    $('.row').masonry({
        itemSelector: '.col-sm-4', // use a separate class for itemSelector, other than .col-
        columnWidth: '.col-sm-4',
        percentPosition: true
    });


    $(".card").addClass("animated fadeInRight wow");

    $(".section1").removeClass('hidden');

});
