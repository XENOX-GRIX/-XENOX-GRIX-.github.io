var size=document.querySelectorAll(".drum").length; 
for(var i=0; i<size; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click",function(){
		let x= this.innerHTML; 
		makesound(x);
		animate(x); 
	})
}
document.addEventListener("keypress", function(evnt) {

  makesound(evnt.key);

  animate(evnt.key);

});
function makesound(k){
	switch(k){
		case 's':
			var x=new Audio("sounds/crash.MP3");
			x.play();
			break;
		case 'd':
			var x=new Audio("sounds/kick-bass.MP3");
			x.play();
			break;
		case 'f':
			var x=new Audio("sounds/snare.MP3");
			x.play();
			break;
		case 'g':
			var x=new Audio("sounds/tom-1.MP3");
			x.play();
			break;
		case 'h':
			var x=new Audio("sounds/tom-2.MP3");
			x.play();
			break;
		case 'j':
			var x=new Audio("sounds/tom-3.MP3");
			x.play();
			break;
		case 'k':
			var x=new Audio("sounds/tom-4.MP3");
			x.play();
			break;
	}
}

function animate(key){
	var x=document.querySelector("."+key); 
	x.classList.add("pressed");
	setTimeout(function(){
		x.classList.remove("pressed");
	},60); 
}
