$(document).ready(function () {

    // add animation classes with javascript 
    $(".card").addClass("animated fadeInRight wow");

    // Click to show portfolio details, hide when 'X' is clicked
    $("#card1").on('click', function () {
        $("#item1").load("animalcop.html");
        $("#item1").toggleClass("d-none");
        $("#item1").addClass("animated fadeInUp wow");
    });

    $("#item1x").on('click', function () {
        $("a#item1").toggleClass("d-none");
        alert('Cancel action occurs!');
    });

});
