define(['config', 'renderer', 'objects'], function (config, renderer, GameObjects) {
	'use strict';

	var iteration,
		ninja,
		castle;

	// TODO: Initialize object
	ninja = new GameObjects.Ninja(800, 490, 'img/ninja.png');

	function init () {

		// TODO: Check for user input
		document.addEventListener('keydown', onKeyPress);

		// TODO: Update object 
		//ninja.x -= 3;
		ninjaPhysics();

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
				console.log("jump");
				handleJumpCommand();		
				break;
            case 37:
                moveLeft();
                console.log("left");
                break;
			case 38:
				console.log("up");
				break;
            case 39:
                moveRight();
                console.log("right");
                break;
//			case 40:
//				console.log("down");
//				break;
		}
	}

    function moveLeft(){
        var moveDistance = 5;

        if(ninja.x > 650){
            ninja.x -= moveDistance;
        }
    }

    function moveRight(){
        var moveDistance = 5;

        if(ninja.x < 980){
            ninja.x += moveDistance;
        }
    }

	function handleJumpCommand() {
		var jumpHeight = 100;
	
		if(ninja.y - jumpHeight < 0) {
			ninja.y = 0;
		}
		else {
			ninja.y -= jumpHeight;
		}
	}
	
	function ninjaPhysics() {
		var fallHeight = 10;
	
		if(ninja.y < 450) {
			ninja.y += fallHeight;
		}
	}

	return {
		init: init
	};
});