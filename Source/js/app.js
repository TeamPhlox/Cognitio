require.config({
	paths: {
		// Libraries
		jquery: 'bower_components/jquery/dist/jquery',
		kinetic: 'bower_components/kineticjs//kinetic',
		raphael: 'bower_components/raphael',

		// Modules
		renderer: 'game/renderer',
		config: 'game/config',
		objects: 'game/objects'
	}
});

requirejs(['renderer', 'objects'], function(renderer, GameObjects) {
	console.log(renderer.status);
	var ninja = new GameObjects.Ninja();
	console.log(ninja);
});