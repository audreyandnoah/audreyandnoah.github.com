// JavaScript Document
$(function(){
				$('#maximage').maximage({
					cycleOptions: {
						fx: 'fade',
						speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
						timeout: 0,
						prev: '#arrow_left',
						next: '#arrow_right',
						pause: 1,
						before: function(last,current){
							if(!$.browser.msie){
								// Start HTML5 video when you arrive
								if($(current).find('video').length > 0) $(current).find('video')[0].play();
							}
						},
						after: function(last,current){
							if(!$.browser.msie){
								// Pauses HTML5 video when you leave it
								if($(last).find('video').length > 0) $(last).find('video')[0].pause();
							}
						}
					},
					onFirstImageLoaded: function(){
						jQuery('#cycle-loader').hide();
						jQuery('#maximage').fadeIn('fast');
					}
				});
	
				// Helper function to Fill and Center the HTML5 Video
				jQuery('video,object').maximage('maxcover');
	
				// To show it is dynamic html text
				jQuery('.in-slide-content').delay(1200).fadeIn();
			});
			
$('#accomodation').blurjs({
	source: '#maximage',			//Background to blur
	radius: 5,			//Blur Radius
	overlay: '',			//Overlay Color, follow CSS3's rgba() syntax
	offset: {			//Pixel offset of background-position
		x: 0,
		y: 0
	},
	optClass: '',			//Class to add to all affected elements
	cache: false,			//If set to true, blurred image will be cached and used in the future. If image is in cache already, it will be used.
	cacheKeyPrefix: 'blurjs-',	//Prefix to the keyname in the localStorage object
	draggable: false		//Only used if jQuery UI is present. Will change background-position to fixed
});