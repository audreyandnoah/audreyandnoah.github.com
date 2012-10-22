function theRotator() {

// The images are placed in a directory called 'images.' The name of the directory can be your choice but make sure you

// enter the correct path in the source attribute of the <img> in the HTML part.

//The opacity of all the images are set to 0 so that no image is loaded in the beginning until the entire page loads.

$('div.rotator ul li').css({opacity: 0.0});

//Display the first image by setting its opacity to 1

$('div.rotator ul li:first').css({opacity: 1.0});

//To change the background image every two seconds, call the change()

//function every 2000 milliseconds. The time argument takes time in terms of

//milliseconds and you can set it to your need.

setInterval('change()',2000);

}

function change() {

//This part of the code gets the first image.

var current = ($('div.rotator ul li.show')? $('div.rotator ul li.show') : $('div.rotator ul li:first'));

if ( current.length == 0 ) current = $('div.rotator ul li:first');

//Now get the next image and when you reach the last image, point it back to

//the first image

var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div.rotator ul li:first') :current.next()) : $('div.rotator ul li:first'));

//The fade-in effect is used for the next image and to display the image

//with a higher z-index

next.css({opacity: 0.0})

.addClass('show')

.animate({opacity: 1.0}, 1000);

//This part of the code hides the current image so that the next image is seen.

current.animate({opacity: 0.0}, 1000)

.removeClass('show');

};

$(document).ready(function() {

//Load the slideshow

theRotator();

$('div.rotator').fadeIn(1000); // works for all the browsers other than IE

$('div.rotator ul li').fadeIn(1000); // IE tweak

});