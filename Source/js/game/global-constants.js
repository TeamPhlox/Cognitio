define([], function () {
	return {
		keyCode: {
            space: 32,
			left: 37,
			right: 39,
			up: 38,
            down: 40
		},
		initialPosition: {
			ninja: {
				x: 800,
				y: 490
			},
			castle: {
				x: 20,
				y: 20
			}
		},
        boundry: {
            left: 650,
            right: 980,
            bottom: 470
        },
		ninja: {
			jumpHeight: 250,
			fallHeight: 30,
	        moveDistance: 7,
			width: 186,
			height: 185
		},
		castle: {
			width: 537,
			height: 631
		},
		shuriken: {
			numPoints: 5,
			innerRadius: 8,
			outerRadius: 20,
			fill: 'yellow',
			stroke: 'black',
			strokeWidth: 4,
			width: 10,
			height: 10,
			moveDistance: 20,
			reloadTime: 300
		},
	};
});
