window.onload = function(){
	var flag = document.getElementById('flag');
	drawFlag( flag, 320, 0, 40 );
	flag.style.marginLeft = -(flag.width/2)+'px';
	flag.style.marginTop  = -(flag.height/2)+'px';
	var timer = waveFlag( flag, 20, 10, 150, 200, -0.1 );
};
