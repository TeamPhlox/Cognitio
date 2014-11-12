define(['kinetic', 'config'], function (Kinetic, config) {
	var stage = new Kinetic.Stage({
		container: 'game-container',
		width: config.screen.width,
		height: config.screen.height
	});

	var backgroundLayer = new Kinetic.Layer(); 
	var backgroundImageObj = new Image();

	// TODO: Preload images or use promises or callbacks
	backgroundImageObj.onload = function () {
		var backgroundImage = new Kinetic.Image({
			image: backgroundImageObj,
		});

		backgroundLayer.add(backgroundImage);
		frontLayer.add(shape);

		// TODO: Remove this ugliness
		stage.add(backgroundLayer); 
		stage.add(frontLayer);
	};

	backgroundImageObj.src = 'img/Castle-field.jpg';

	var frontLayer = new Kinetic.Layer();
	var shape = new Kinetic.Circle({
		x: 1500,
		y: 800,
		radius: 50,
		fill: 'lightblue'
	});

	return {
		status: 'ok'
	};
});