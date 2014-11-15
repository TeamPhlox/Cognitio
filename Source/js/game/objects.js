define(['globalConstants'], function (GlobalConstants) {
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
		
		Ninja.prototype.jump = function () {
			if (this.y - GlobalConstants.jumpHeight < 0) {
				this.y = 0;
			}
			else {
				this.y -= GlobalConstants.jumpHeight;
			}
		}

		Ninja.prototype.update = function () {
			if(this.y < 450) {
				this.y += GlobalConstants.fallHeight;
			}
		}

		Ninja.prototype.moveLeft = function () {
	        var moveDistance = 5;

	        if (this.x > 650) {
	           this.x -= moveDistance;
	        }
		}

		Ninja.prototype.moveRight = function () {
	        var moveDistance = 5;

	        if (this.x < 980) {
	            this.x += moveDistance;
	        }
		}

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
