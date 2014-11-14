define(['kinetic', 'config'], function (Kinetic, config) {
	// var objectDictionary = {};

	var stage = new Kinetic.Stage({
		container: 'game-container',
		width: config.screen.width,
		height: config.screen.height
	});

	var backgroundLayer = new Kinetic.Layer();
	var backgroundImageObj = new Image();
	backgroundImageObj.src = 'img/background.jpg';

	var frontLayer = new Kinetic.Layer();
	var castleImageObj = new Image();
	castleImageObj.src = 'img/castle.png';

	stage.add(backgroundLayer); 
	backgroundLayer.moveToBottom();

	stage.add(frontLayer);
	frontLayer.moveToTop();

	function drawImageObjects(gameObjects) {
		for (var i = 0; i < gameObjects.length; i++) {
			var currentObject = gameObjects[i];

			var currentImage = new Kinetic.Image({
				x: currentObject.x,
				y: currentObject.y,
				image: currentObject.image
			});

			frontLayer.add(currentImage);
			frontLayer.draw();
		}
	}

	function clear() {
		frontLayer.destroyChildren();
	}


	backgroundImageObj.addEventListener('load', function () {
		var backgroundImage = new Kinetic.Image({
			image: backgroundImageObj
		});

		backgroundLayer.add(backgroundImage);
		backgroundLayer.draw();
	});

	castleImageObj.addEventListener('load', function () {
		var castleImage = new Kinetic.Image({
			x: 20,
			y: 20,
			image: castleImageObj
		});

		frontLayer.add(castleImage);
		frontLayer.draw();
	});


	return {
		drawImageObjects: drawImageObjects,
		clear: clear
	};
});