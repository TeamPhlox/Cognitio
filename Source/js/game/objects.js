define(['globalConstants'], function (Constant) {
	var Castle = (function () {
		function Castle (startX, startY, imagePath) {
			this.x = startX;
			this.y = startY;
			this.width = Constant.castle.width;
			this.height = Constant.castle.height;

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
			this.width = Constant.ninja.width;
			this.height = Constant.ninja.height;
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
		
		Ninja.prototype = {
			jump: function () {
				if (this.y - Constant.ninja.jumpHeight < 0) {
					this.y = 0;
				}
				else {
					this.y -= Constant.ninja.jumpHeight;
	                this.image = images.fall;
				}
			},
			update: function () {
				if (this.y < Constant.boundry.bottom) {
					this.y += Constant.ninja.fallHeight;
				}
			},
			moveLeft: function () {
		        if (this.x > Constant.boundry.left) {
		           this.x -= Constant.ninja.moveDistance;
		        }
			},
			moveRight: function () {
		        if (this.x < Constant.boundry.right) {
		            this.x += Constant.ninja.moveDistance;
		        }
			},
	       	crouch: function () {
          		this.image = images.crouchLeft;
	        },
			shoot: function () {
	            this.image = images.shootLeft;
	        }
		}

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
			this.numPoints = Constant.shuriken.numPoints;
			this.innerRadius = Constant.shuriken.innerRadius;
			this.outerRadius = Constant.shuriken.outerRadius;
			this.fill = Constant.shuriken.fill;
			this.stroke = Constant.shuriken.stroke;
			this.strokeWidth = Constant.shuriken.strokeWidth;
			this.width = Constant.shuriken.width;
			this.height = Constant.shuriken.height;
		}

		Shuriken.prototype = {
			update: function () {
				this.x -= Constant.shuriken.moveDistance;
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
