define([], function () {
	var GameObject = (function () {
		function GameObject () {
			this.x;
			this.y;
			this.width;
			this.height;
			this.image;
		}

		return GameObject;
	})();

	var Castle = (function () {
		function Castle () {
					
		}

		Castle.prototype = new GameObject();

		return Castle;
	})();

	var Ninja = (function () {
		function Ninja (startX, startY, imageUrl) {
			this.x = startX;
			this.y = startY;
			this.position = 'front';
			this.image = new Image();
			this.image.src = imageUrl;
		}

		// Ninje.prototype.moveUp = function () {
		// 	this.y += 10;
		// };

		return Ninja;
	})();

	var Wizard = (function () {
		function Wizard (startX, startY) {

		}

		Wizard.prototype = new GameObject();
	})();

	var Shuriken = (function () {
		function Shuriken () {

		}

		Shuriken.prototype = new GameObject();
	})();



	return {
		Castle: Castle,
		Ninja: Ninja
	};
});
