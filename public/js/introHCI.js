// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initCamera();
 	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	// add gestures listener here
	$(function(){
		$(".judge-img").bind("taphold",tapholdHandler);
		function tapholdHandler(event){
			//get the ide of the even source 
			var targetIDPrefix = event.target.id;
			console.log("got prefix: "+targetIDPrefix);
			//show bio
			$("#"+targetIDPrefix+"-bio").show();
		}
	})
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
}