/*Needed steps: 
- User clicks a given card  
- load content based on url and save into variable
- 

*/

$(document).ready(function () {


    // Function to control clicking on a card
    $('#cards a').click(function () {
        e.preventDefault();

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




});
