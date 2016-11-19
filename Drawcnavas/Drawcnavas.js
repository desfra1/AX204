// alert("It's working");

var c=document.getElementById("myCanvas1");
var ctx=c.getContext("2d");

var tumblr = new Image();
tumblr.src="tumblr.png"
// Drawing sprite onto canvas
tumblr.onload=function(){
	ctx4.drawImage(tumblr,200,200,150,90);
}

var ghost = new Image();
ghost.src="ghost.png"
ghost.onload=function(){
	ctx4.drawImage(ghost,100,100,90,90);
}

var fry = new Image();
fry.src="fry.png"
fry.onload=function(){
	ctx4.drawImage(fry,350,350,70,90)
}

// start drawing
ctx.beginPath();
// set drawing style
ctx.strokeStyle="purple";
// move your pen to the starting point
ctx.moveTo(75,0);
// draw line
ctx.lineTo(150,75);
// draw line2
ctx.lineTo(75,150);
// draw line3
ctx.lineTo(0,75);
// draw line back to starting point
ctx.closePath();
// actually drawing
ctx.stroke();
// set fill color
ctx.fillStyle="purple";
// actually fill the shape
ctx.fill();

var c2=document.getElementById("myCanvas2");
var ctx2=c2.getContext("2d");
// start drawing
ctx2.beginPath();
// set drawing style
ctx2.strokeStyle="blue";
// move you pen to the starting point
ctx2.moveTo(0,0);
// draw line
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300);
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle="blue";
ctx2.fill();

var c3=document.getElementById("myCanvas3");
var ctx3=c3.getContext("2d");

ctx3.beginPath();
// draw circle- 5 parameters: centerx, centery, radius, 0,6.28
ctx3.arc(150,150,30,0,6.28);
ctx3.closePath();
ctx3.stroke();
ctx3.fillStyle="pink";
ctx3.fill();

// Set up svenery
var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
// Sky and Land
ctx4.fillStyle = "green";
ctx4.fillRect(0,350,800,150);
ctx4.fillStyle = "cyan";
ctx4.fillRect(0,0,800,350);
// Sun
ctx4.beginPath();
ctx4.arc(100,100,50,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "yellow";
ctx4.fill();
// Road
ctx4.beginPath();
ctx4.moveTo(300,500);
ctx4.lineTo(450,500);
ctx4.lineTo(400,350);
ctx4.lineTo(350,350);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "grey";
ctx4.fill();

// Line in road
ctx4.moveTo(375,500);
ctx4.lineTo(375,350);
ctx4.stroke();

// Building
ctx4.fillRect(100,250,200,100);
ctx4.clearRect(130,310,20,20);
ctx4.clearRect(170,310,20,20);
ctx4.clearRect(210,310,20,20);
ctx4.clearRect(250,310,20,20);
ctx4.clearRect(130,270,20,20);
ctx4.clearRect(170,270,20,20);
ctx4.clearRect(210,270,20,20);
ctx4.clearRect(250,270,20,20);

// House
ctx4.fillRect(560,250,200,100);
// Window
ctx4.clearRect(575,265,40,40);
ctx4.strokeStyle = "black"
ctx4.moveTo(595,265);
ctx4.lineTo(595,305);
ctx4.moveTo(575,285);
ctx4.lineTo(615,285);
ctx4.stroke();
// Door
ctx4.fillStyle = "brown";
ctx4.fillRect(700,265,30,85);
ctx4.beginPath();
ctx4.arc(720,310,5,0,6.28);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle = "orange";
ctx4.fill();
// Roof
ctx4.beginPath();
ctx4.moveTo(535,250);
ctx4.lineTo(660,200);
ctx4.lineTo(785,250);
ctx4.closePath();
ctx4.fillStyle = "peru";
ctx4.fill();