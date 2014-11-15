define([], function () {
	return {
		keyCodes: {
            space: 32,
			left: 37,
			right: 39,
			up: 38,
            down: 40
		},
		jumpHeight: 100,
		fallHeight: 10,
        //limits the player's movement on the stage
        borders: {
            left: 650,
            right: 980,
            bottom: 470
        },
        speed: 7
	};
});
