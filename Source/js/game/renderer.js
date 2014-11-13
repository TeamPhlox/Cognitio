define(['kinetic', 'config'], function (Kinetic, config) {
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
	
	var ninjaImageObj = new Image();
	ninjaImageObj.src = 'img/ninja.png';

	stage.add(backgroundLayer); 
	backgroundLayer.moveToBottom();

	stage.add(frontLayer);
	frontLayer.moveToTop();

	backgroundImageObj.addEventListener('load', function () {
		var backgroundImage = new Kinetic.Image({
			image: backgroundImageObj
		});

		backgroundLayer.add(backgroundImage);
		backgroundLayer.draw();
	});

	ninjaImageObj.addEventListener('load', function () {
		var ninjaImage = new Kinetic.Image({
			x: 800,
			y: 450,
			image: ninjaImageObj
		});

		frontLayer.add(ninjaImage);
		frontLayer.draw();
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
		status: 'ok'
	};
});