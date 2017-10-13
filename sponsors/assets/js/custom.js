$(document).ready(function() {
	$(".tlt").textillate({
		in: {
			// set the effect name
			effect: 'fadeInLeftBig',

			// set the delay factor applied to each consecutive character
			delayScale: 1.5,

			// set the delay between each character
			delay: 50,

			// set to true to animate all the characters at the same time
			sync: false,

			// randomize the character sequence
			// (note that shuffle doesn't make sense with sync = true)
			shuffle: true,

			// reverse the character sequence
			// (note that reverse doesn't make sense with sync = true)
			reverse: false,

			// callback that executes once the animation has finished
			callback: function () {}
		}
	});

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'assets/particles.json', function() {
		console.log("Load complete.")
	});
	
	/* Reveal smoothly */
	window.sr = ScrollReveal();
	var sections = ['about', 'prev-sponsors', 'event-details', 'sponsorship', 'in-kind', 'prizes', 'gallery', 'contact-us'];
	for(var i = 0; i < sections.length; i++) {
		var sectionId = '#' + sections[i];
		sr.reveal(sectionId);
	}
	
	/* Smooth scroll function */
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});
});