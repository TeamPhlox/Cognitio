define(['kinetic', 'config'], function (Kinetic, config) {
	'use strict';

	// Kinetic setup
	var stage = new Kinetic.Stage({
		container: 'game-container',
		width: config.screen.width,
		height: config.screen.height
	});

	// Setting background layer
	var backgroundLayer = new Kinetic.Layer();
	var backgroundImageObj = new Image();
	backgroundImageObj.src = 'img/background.jpg';

	stage.add(backgroundLayer); 
	backgroundLayer.moveToBottom();

	// Setting front layer
	var frontLayer = new Kinetic.Layer();
	stage.add(frontLayer);
	frontLayer.moveToTop();

	function drawImageObjects (gameObjects) {
		if (!gameObjects) {
			return;
		}

		for (var i = 0; i < gameObjects.length; i++) {
			var currentObject = gameObjects[i];

			var currentImage = new Kinetic.Image({
				x: currentObject.x,
				y: currentObject.y,
				image: currentObject.image
			});

			if(currentObject.position == 'back') {
				backgroundLayer.add(currentImage);
				backgroundLayer.draw();
			}
			else {
				frontLayer.add(currentImage);
				frontLayer.draw();
			}
		}
	}

	function drawShurikenObjects (shurikenObjects) {
		if (!shurikenObjects) {
			return;
		}

		for (var i = 0; i < shurikenObjects.length; i++) {
			var currentShurikenObject = shurikenObjects[i];

			var shuriken = new Kinetic.Star(currentShurikenObject);

			frontLayer.add(shuriken);
			frontLayer.draw();
		}
	}

	function clear() {
		frontLayer.destroyChildren();
	}

	// Adding the background image
	backgroundImageObj.addEventListener('load', function () {
		var backgroundImage = new Kinetic.Image({
			image: backgroundImageObj
		});

		backgroundLayer.add(backgroundImage);
		backgroundLayer.draw();
	});

	return {
		drawImageObjects: drawImageObjects,
		clear: clear,
		drawShurikenObjects: drawShurikenObjects
	};
});