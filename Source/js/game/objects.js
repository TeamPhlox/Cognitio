define(['globalConstants'], function (GlobalConstants) {
	var Castle = (function () {
		function Castle () {
					
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
			}
		};

		Ninja.prototype.update = function () {
			if (this.y < GlobalConstants.borders.bottom) {
				this.y += GlobalConstants.fallHeight;
				this.image = images.fall;
			}
			else {
				this.image = images.straight;
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

		return Ninja;
	})();

	var Wizard = (function () {
		function Wizard (startX, startY) {

		}

		return Wizard;
	})();

	var Shuriken = (function () {
		function Shuriken () {

		}

		return Shuriken;
	})();

	return {
		Castle: Castle,
		Ninja: Ninja
	};
});
