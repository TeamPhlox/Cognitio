define(['config', 'renderer', 'objects', 'globalConstants'], function (config, renderer, GameObjects, Constant) {
	'use strict';

	var iteration,
		ninja,
		castle,
		objectList = [],
		shurikens = [],
		lastFiredShuriken = Date.now();

    // Initialize object
    ninja = new GameObjects.Ninja(Constant.initialPosition.ninja.x, Constant.initialPosition.ninja.y, 'img/ninja');
    castle = new GameObjects.Castle(Constant.initialPosition.castle.x, Constant.initialPosition.castle.y, 'img/castle.png');

    objectList.push(ninja);
    objectList.push(castle);

    renderer.drawHealthBar();

    // Game core loop
	function gameFrame () {
		// Check for user input
		document.addEventListener('keydown', onKeyPress);

		// Update object 
		for (var i = 0; i < objectList.length; i++) {
			objectList[i].update();
		}

		if (shurikens) {
			for (var i = 0; i < shurikens.length; i++) {
				if (hasCollsion(shurikens[i], castle)) 
				{
					shurikens.splice(i, 1);
					renderer.updateHealthBar(5);
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
	}	

	// Helper function that starts and stops game 
	function init() {
		iteration = setInterval(gameFrame, config.gameSpeed);
	}

	function stopIteration () {
		clearTimeout(iteration);
	}

	// User input handler
	function onKeyPress(ev) {
		switch (ev.keyCode) {
			case Constant.keyCode.space:
                handleSpaceKeyPress();
				break;
            case Constant.keyCode.left:
            	handleLeftLeftKeyPress();
                break;
			case Constant.keyCode.up:
                handleUpKeyPress();
				break;
            case Constant.keyCode.right:
                handleRightKeyPress();
                break;
            case Constant.keyCode.down:
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
    	if (Date.now() - lastFiredShuriken > Constant.shuriken.reloadTime) {
    		lastFiredShuriken = Date.now();
			shurikens.push(new GameObjects.Shuriken(ninja.x, ninja.y + 60));
    	}
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