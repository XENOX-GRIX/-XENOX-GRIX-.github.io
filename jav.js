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
})
