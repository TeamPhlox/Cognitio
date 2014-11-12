require.config({
	paths: {
		jquery: 'bower_components/jquery/dist/jquery',
		kinetic: 'bower_components/src/kinetic.js',
		raphael: 'bower_components/raphael.js',
		customModule: 'test/test'
	}
});

requirejs(['customModule', 'jquery'], function(human) {
	$('h1').html(human.name);
	$('h2').html(human.age);
});