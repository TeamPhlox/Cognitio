define(['config', 'renderer', 'objects', 'globalConstants'], function (config, renderer, GameObjects, GlobalConstants) {
	'use strict';

	var iteration,
		ninja,
		castle,
		objectList = [],
		shurikens = [];

    // Initialize object
    ninja = new GameObjects.Ninja(800, 490, 'img/ninja');
    castle = new GameObjects.Castle(20, 20, 'img/castle.png');

    objectList.push(ninja);
    objectList.push(castle);

    // Game core loop
	function init () {
		// Check for user input
		document.addEventListener('keydown', onKeyPress);

		// Update object 
		for (var i = 0; i < objectList.length; i++) {
			if (objectList[i].position == 'front') {
				objectList[i].update();
			}
		}

		if (shurikens) {
			for (var i = 0; i < shurikens.length; i++) {
				if (hasCollsion(shurikens[i], castle)) 
				{
					shurikens.splice(i, 1);
				}
				else {
					shurikens[i].update();
				}
			}
		}

		// Clean objects
		renderer.clear();

		// Render screen
		renderer.drawImageObjects([ninja, castle]);
		renderer.drawShurikenObjects(shurikens);

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
                handleSpaceKeyPress();
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

    function handleSpaceKeyPress(){
        ninja.shoot();
        createShuriken();
    }

    // Object creation
    function createShuriken() {
		shurikens.push(new GameObjects.Shuriken(ninja.x, ninja.y));
    }

    // Collision Detection
    function hasCollsion(firstObject, secondObject) {
    	if (firstObject.x < secondObject.x + secondObject.width &&
	    		firstObject.x + firstObject.width > secondObject.x &&
	    		firstObject.y < secondObject.y + secondObject.height &&
	    		firstObject.y + firstObject.height > secondObject.y) {
			return true;
    	}

    	return false;
    }

	return {
		init: init
	};
});