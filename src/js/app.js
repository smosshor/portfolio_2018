$(document).ready(function () {
    $(".card").addClass("animated fadeInRight wow");
    $(".card").addClass("animated fadeInRight wow");
    $("#item1").addClass("animated fadeInUp wow");

    var cardArray = {};
    cardArray["#card1"] = "#item1";
    cardArray["#card2"] = "#item2";
    cardArray["#card3"] = "#item3";
    cardArray["#card4"] = "#item4";

    $("#card1").on('click', function () {
        $("#item1").toggleClass("d-none");
    });

    $("#item1 i").on('click', function () {
        $("#item1").toggleClass("d-none");
        $("#item1").hide();
    });

});
