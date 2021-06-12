var x= Math.floor((Math.random() * 6) + 1);
var y= Math.floor((Math.random() * 6) + 1);
var xs="images/dice" + x + ".png";
var ys="images/dice" + y + ".png";
var img1= document.getElementById("img1");
img1.setAttribute("src",xs);
var img2= document.getElementById("img2");
img2.setAttribute("src",ys);

if(x>y){
	document.getElementById("ref").innerHTML = "Player 1 Wins "+'<i class="fas fa-trophy"></i>';
}
if(x<y){
	document.getElementById("ref").innerHTML = "Player 2 Wins "+'<i class="fas fa-trophy"></i>';
}
else if(x==y){
	document.getElementById("ref").innerHTML = "Draw " + '<i class="fas fa-ellipsis-h"></i>';
}
