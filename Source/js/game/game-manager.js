define(['config', 'renderer', 'objects', 'globalConstants'], function (config, renderer, GameObjects, GlobalConstants) {
	'use strict';

	var iteration,
		ninja,
		castle,
		objectList = [];

	// Initialize object
	ninja = new GameObjects.Ninja(800, 470, 'img/ninja');
	objectList.push(ninja);

	function init () {
		// Check for user input
		document.addEventListener('keydown', onKeyPress);

		// Update object 
		for (var i = 0; i < objectList.length; i++) {
			objectList[i].update();
		}

		// Clean objects
		renderer.clear();

		// Render screen
		renderer.drawImageObjects(objectList);

		// Repeat game cycle
		iteration = setTimeout(init, config.gameSpeed);
	}	

	// Helper function that stops init 
	function stopIteration () {
		clearTimeout(iteration);
	}

	// User input handler
	function onKeyPress(ev) {
		switch (ev.keyCode) {
			case GlobalConstants.keyCodes.space:
				break;
            case GlobalConstants.keyCodes.left:
            	handleLeftLeftKeyPress();
                break;
			case GlobalConstants.keyCodes.up:
                handleUpKeyPress();
				break;
            case GlobalConstants.keyCodes.right:
                handleRightKeyPress();
                break;
            case GlobalConstants.keyCodes.down:
                handleDownKeyPress();
                break;
		}
	}

	// Key press handlers
	function handleUpKeyPress() {
		ninja.jump();
	}

	function handleLeftLeftKeyPress() {
		ninja.moveLeft();
	}

	function handleRightKeyPress() {
		ninja.moveRight();
	}

    function handleDownKeyPress(){
        ninja.crouch();
    }

	return {
		init: init
	};
});