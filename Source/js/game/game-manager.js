define(['config'], function (config) {
	var iteration;
	// TODO: Initialize object

	function init () {

		// TODO: Check for user input

		// TODO: Update object 

		// TODO: Clean objects

		// TODO: Render screen
		
		iteration = setTimeout(init, config.gameSpeed);
	}	

	document.addEventListener('keydown', stopIteration);

	function stopIteration () {
		clearTimeout(iteration);
	}

	return {
		inits: init
	};
});