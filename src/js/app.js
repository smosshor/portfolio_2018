/*Needed steps: 
- User clicks a given card  
- load content based on url and save into variable
- 

*/

$(document).ready(function () {});

// Add page load 
$(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({
        'overflow': 'visible'
    });
})


// Add animation classes
$('img').addClass("animated slideInUp wow");
$('col-sm-3').addClass("animated fadeInUp wow");


//Add transitions
$(document).scroll(function () {
    var scrollPosition = $(window).scrollTop();


    if (scrollPosition <= 300) {
        $('.colored-background').addClass('.animal-cop');
        $('.section-description h2').text('AnimalCop Reporting');
        $('img.section-image').attr("src", "src/img/animalCop/report-assets/Mockups/desktopMockup2.png");
        $('.colored-background').css("background-color", "#5C6DBA");
    } else if (scrollPosition > 300 && scrollPosition <= 800) {
        $('.colored-background').addClass('.mindful');
        $('.colored-background').css("background-color", "#AED5D5");
        $('img.section-image').attr("src", "src/img/services_testing.jpg");
        $('.section-description h2').text('Mindful');
    } else if (scrollPosition > 800) {
        $('.colored-background').addClass('.jfogel');
        $('.colored-background').css("background-color", "blue");
        $('img.section-image').attr("src", "src/img/transparent.png");
        $('.section-description h2').text('JF Design & Build');
    }
});




/*Function to control clicking on a card
    $('#cards a').click(function () {
        e.preventDefault();
        
        url(/Users/Sarah/Documents/GitHub/portfolio_2018/src/img/bg2.jpg)

        // save content to load into a variable -- #content-- 
        var toLoad = $(this).attr('href') + '#content';
        loadContent(toLoad);

        //Load content, contains showNewContent
        function loadContent() {
            $('#contentSection').load(toLoad);
        }
    });
    // Function to control clicking OUT of a card

    $('#itemx a').click(function () {
        //hide the content on the currrent page 
        $('#content').hide('fast', loadContent);
    });
    */





/*Function to control clicking on a card
    $('#cards a').click(function () {
        e.preventDefault();
        
        url(/Users/Sarah/Documents/GitHub/portfolio_2018/src/img/bg2.jpg)

        // save content to load into a variable -- #content-- 
        var toLoad = $(this).attr('href') + '#content';
        loadContent(toLoad);

        //Load content, contains showNewContent
        function loadContent() {
            $('#contentSection').load(toLoad);
        }
    });
    // Function to control clicking OUT of a card

    $('#itemx a').click(function () {
        //hide the content on the currrent page 
        $('#content').hide('fast', loadContent);
    });
    */
