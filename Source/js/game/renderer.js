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
	backgroundLayer.setZIndex(0);

	// Setting front layer
	var frontLayer = new Kinetic.Layer();
	stage.add(frontLayer);
	frontLayer.setZIndex(1);

	var infoLayer = new Kinetic.Layer();
	stage.add(infoLayer); 
	infoLayer.setZIndex(2);


	function drawImageObjects (gameObjects) {
		if (!gameObjects) {
			return;
		}

		for (var i = 0; i < gameObjects.length; i++) {
			var currentObject = gameObjects[i];

			var currentImage = new Kinetic.Image({
				x: currentObject.x,
				y: currentObject.y,
				image: currentObject.image,
				width: currentObject.width,
				height: currentObject.height
			});

			frontLayer.add(currentImage);
			frontLayer.draw();
		}
	}

	function drawShurikenObjects (shurikenObjects) {
		if (!shurikenObjects) {
			return;
		}

		for (var i = 0; i < shurikenObjects.length; i++) {
			var currentShurikenObject = shurikenObjects[i];

			var shuriken = new Kinetic.Star({
				x: currentShurikenObject.x,
				y: currentShurikenObject.y,
				numPoints: currentShurikenObject.numPoints,
				innerRadius: currentShurikenObject.innerRadius,
				outerRadius: currentShurikenObject.outerRadius,
				fill: currentShurikenObject.fill,
				stroke: currentShurikenObject.stroke,
				strokeWidth: currentShurikenObject.strokeWidth
			});

			shuriken.rotate(currentShurikenObject.angle);

			frontLayer.add(shuriken);
			frontLayer.draw();

		}
	}

	var damageBar;
	function drawHealthBar() {
		var healthBarBackground = new Kinetic.Rect({
			x: 450,
			y: 50,
			width: 400,
			height: 50,
			fill: 'white',
			stroke: 'black',
			strokeWidth: 5
		});

		damageBar = new Kinetic.Rect({
			x: 450,
			y: 50,
			width: 400,
			height: 50,
			fill: 'red',
			stroke: 'black',
			strokeWidth: 5
		});

		infoLayer.add(healthBarBackground);
		infoLayer.draw();

		infoLayer.add(damageBar);
		infoLayer.draw();
	}

	function updateHealthBar (health) {
		var damage = (health / 100) * 400
		damageBar.size({width: damage})

		infoLayer.draw();
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
		drawShurikenObjects: drawShurikenObjects,
		drawHealthBar: drawHealthBar,
		updateHealthBar: updateHealthBar
	};
});