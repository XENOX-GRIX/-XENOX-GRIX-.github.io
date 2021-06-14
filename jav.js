var big = document.getElementById("big");
var moon = document.getElementById("moon");
var mountain = document.getElementById("mountain");
var road = document.getElementById("road");
var txt = document.getElementById("ame");
window.addEventListener('scroll', function(){
	var val=window.scrollY; 
	big.style.top=val*0.5 +'px';
	moon.style.left=-val*0.7 +'px';
	mountain.style.top=val*0.4 +'px';
	road.style.top=val*0.15 +'px';
	txt.style.top=val*0.8+'px';
});
var audio = new Audio( 'sounds/bg-music.mp3' );
audio.play();
window.setTimeout( function ( ) {
	audio.volume = 0.06;
},0);


// let music = new Audio({
//     loop: true,
//     src: []
// });
// music.volume=0.000001;
// music.play(); 

// alert(music.volume);