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
});

// Add animation classes
$('img').addClass("animated slideInUp wow");
$('col-sm-3').addClass("animated fadeInUp wow");



//Function to control clicking on a card
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
