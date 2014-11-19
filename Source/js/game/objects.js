define(['globalConstants'], function (GlobalConstants) {
	var Castle = (function () {
		function Castle (startX, startY, imagePath) {
			this.x = startX;
			this.y = startY;
			this.width = 300;
			this.height = 600;

			this.position = 'back';

			this.image = new Image();
			this.image.src = imagePath;
		}

		return Castle;
	})();

	var Ninja = (function () {
		var images = {
			straight: new Image(),
			crouchLeft: new Image(),
			crouchRight: new Image(),
			shootLeft: new Image(),
			shootRight: new Image(),
			fall: new Image()
		};

		function Ninja (startX, startY, imagePath) {
			this.x = startX;
			this.y = startY;
			this.position = 'front';

			// Initialize images
			images.straight.src = imagePath + "/Ninja-Straight.png";
			images.crouchLeft.src = imagePath + "/Ninja-Crouch-Left.png";
			images.crouchRight.src = imagePath + "/Ninja-Crouch-Right.png";
			images.shootLeft.src = imagePath + "/Ninja-Shoot-Left.png";
			images.shootRight.src = imagePath + "/Ninja-Shoot-Right.png";
			images.fall.src = imagePath + "/Ninja-Fall.png";

			// Initial object image
			this.image = images.straight;
		}
		
		Ninja.prototype.jump = function () {
			if (this.y - GlobalConstants.jumpHeight < 0) {
				this.y = 0;
			}
			else {
				this.y -= GlobalConstants.jumpHeight;
                this.image = images.fall;
			}
		};

		Ninja.prototype.update = function () {
			if (this.y < GlobalConstants.borders.bottom) {
				this.y += GlobalConstants.fallHeight;
			}
		};

		Ninja.prototype.moveLeft = function () {
	        var moveDistance = GlobalConstants.speed;

	        if (this.x > GlobalConstants.borders.left) {
	           this.x -= moveDistance;
	        }
		};

		Ninja.prototype.moveRight = function () {
	        var moveDistance = GlobalConstants.speed;

	        if (this.x < GlobalConstants.borders.right) {
	            this.x += moveDistance;
	        }
		};

        Ninja.prototype.crouch = function () {
            this.image = images.crouchLeft;
        };

        Ninja.prototype.shoot = function () {
            this.image = images.shootLeft;
        };

		return Ninja;
	})();

	var Wizard = (function () {
		function Wizard (startX, startY) {

		}

		return Wizard;
	})();

	var Shuriken = (function () {
		function Shuriken (startX, startY) {
			this.x = startX;
			this.y = startY;
			this.numPoints = 5;
			this.innerRadius = 8;
			this.outerRadius = 20;
			this.fill = 'yellow';
			this.stroke = 'black';
			this.strokeWidth = 4;
			this.width = 20;
			this.height = 20;
		}

		Shuriken.prototype = {
			update: function () {
				this.x -= 20;
			}
		};

		return Shuriken;
	})();

	return {
		Castle: Castle,
		Ninja: Ninja,
		Shuriken: Shuriken
	};
});
