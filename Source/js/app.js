require.config({
	paths: {
		// Libraries
		jquery: 'bower_components/jquery/dist/jquery',
		kinetic: 'bower_components/kineticjs//kinetic',
		raphael: 'bower_components/raphael',

		// Modules
		renderer: 'game/renderer',
		config: 'game/config'
	}
});

requirejs(['renderer'], function(renderer) {
	console.log(renderer.status);
});