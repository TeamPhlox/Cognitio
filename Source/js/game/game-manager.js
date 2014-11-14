define(['config', 'renderer', 'objects'], function (config, renderer, GameObjects) {
	'use strict';

	var iteration,
		ninja;

	// TODO: Initialize object
	ninja = new GameObjects.Ninja(800, 450, 'img/ninja.png');

	function init () {

		// TODO: Check for user input
		document.addEventListener('keydown', onKeyPress);

		// TODO: Update object 
		ninja.x -= 10;

		// TODO: Clean objects
		renderer.clear();

		// TODO: Render screen
		renderer.drawImageObjects([ninja]);

		iteration = setTimeout(init, config.gameSpeed);
	}	

	// Helper function that stops init 
	function stopIteration () {
		clearTimeout(iteration);
	}

	// User input handler
	function onKeyPress(ev) {
		switch (ev.keyCode) {
			// Space
			case 32: 
				console.log("jump"); // handleJumpCommand();		
				break;
			// Up
			case 38:
				console.log("up");
				break;
			// Down
			case 40:
				console.log("down");
				break;
		}
	}

	return {
		init: init
	};
});