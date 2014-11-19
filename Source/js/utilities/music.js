var musicButton = document.getElementById('music');
var soundsButton = document.getElementById('sounds');

var backgroundMusic = document.getElementById('background-music');
var soundsMusic = document.getElementById('sounds-music');

backgroundMusic.volume = 0.5;
//soundsMusic.volume = 0.5;

musicButton.addEventListener('click', function() {
	if(this.className == 'off') {
		this.className = 'on';
		backgroundMusic.play();
	}
	else {
		this.className = 'off';
		backgroundMusic.pause();
	}
});

soundsButton.addEventListener('click', function() {
	if(this.className == 'off') {
		this.className = 'on';
		soundsMusic.play();
	}
	else {
		this.className = 'off';
		soundsMusic.pause();
	}
});