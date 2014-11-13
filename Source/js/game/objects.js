define([], function () {
	var GameObject = (function () {
		function GameObject () {
			this.x = 10;
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
		function Ninja () {

		}

		Ninja.prototype = new GameObject();

		return Ninja;
	})();

	return {
		Castle: Castle,
		Ninja: Ninja
	};
});
