$(document).ready(function () {

    // add animation classes with javascript 
    $(".card").addClass("animated fadeInRight wow");
    $(".card").addClass("animated fadeInRight wow");


    // Click to show portfolio details, hide when 'X' is clicked
    $("#card1").on('click', function () {
        $("#item1").load("animalcop.html");
        console.log('DONE');

        $("#item1").toggleClass("d-none");
        $("#item1").addClass("animated fadeInUp wow");
    });

    $("#item1 i").on('click', function () {
        $("#item1").toggleClass("d-none");
    });

});
