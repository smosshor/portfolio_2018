/*Needed steps: 
- User clicks a given card  
- load content based on url and save into variable
- 

*/

$(document).ready(function () {

    $('.portfolioItem1').css("background", red);

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.portfolioItem1').css("background", red);
        }
    });
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
