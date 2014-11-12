require.config({
	paths: {
		jquery: 'bower_components/jquery/dist/jquery',
		customModule: 'test/test'
	}
});

requirejs(['customModule', 'jquery'], function(human) {
	$('h1').html(human.name);
	$('h2').html(human.age);
});