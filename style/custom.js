
//change in and out the color of the character 
function changeRed(){
	document.getElementById("user").src = "img/red.png"
	document.getElementById("green").style.opacity = ".6"
	document.getElementById("blue").style.opacity = ".6"
	document.getElementById("red").style.opacity = "1"
}

function changeGreen(){
	document.getElementById("user").src = "img/down.png"
	document.getElementById("blue").style.opacity = ".6"
	document.getElementById("red").style.opacity = ".6"
	document.getElementById("green").style.opacity = "1"
}

function changeBlue(){
	document.getElementById("user").src = "img/blue.png"
	document.getElementById("blue").style.opacity = "1"
	document.getElementById("red").style.opacity = ".6"
	document.getElementById("green").style.opacity = ".6"
}

var count=100;
var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
function timer()
{ count=count-1;
  if (count <= 0)
  {clearInterval(counter);
   return;
  }
  if (count == 1){ alert ("Good Job "+name+" you collected a total of "+score+" gold pieces!") 
  setTimeout(function(){restart()},0) }
 document.getElementById("timer").innerHTML=count + " s"; // watch for spelling
}
function restart (){
location.reload();
}		








//////////////////////////////random orb movement
function SpawnOrbs(){
xpos = Math.floor(Math.random() * 500+100)
xpos1 = Math.floor(Math.random() * 500+100)
document.getElementById("orb").style.left = xpos + "px"
document.getElementById("orb").style.top = xpos1 + "px"
x1pos = Math.floor(Math.random() * 500+100)
x1pos1 = Math.floor(Math.random() * 500+100)
document.getElementById("orb1").style.left = x1pos + "px"
document.getElementById("orb1").style.top = x1pos1 + "px"
x2pos = Math.floor(Math.random() * 500+100)
x2pos1 = Math.floor(Math.random() * 500+100)
document.getElementById("orb2").style.left = x2pos + "px"
document.getElementById("orb2").style.top = x2pos1 + "px"
x3pos = Math.floor(Math.random() * 500+100)
x3pos1 = Math.floor(Math.random() * 500+100)
document.getElementById("orb3").style.left = x3pos + "px"
document.getElementById("orb3").style.top = x3pos1 + "px"
//setTimeout(function(){SpawnOrbs()},2000)	
}




//////////////////////////////randomize gold output
function SpawnGold(){

ypos1 = Math.floor(Math.random() * 500+100)
ypos = Math.floor(Math.random() * 500+100)
document.getElementById("gold").style.left = ypos + "px"
document.getElementById("gold").style.top =  ypos1 + "px"
//document.getElementById("gold").width = size1 

zpos1 = Math.floor(Math.random() * 500+100)
zpos = Math.floor(Math.random() * 500+100)
document.getElementById("gold2").style.left = zpos + "px"
document.getElementById("gold2").style.top = zpos1 + "px"
//document.getElementById("gold2").width = size2 
apos1 = Math.floor(Math.random() * 500+100)
apos = Math.floor(Math.random() * 500+100)
document.getElementById("gold3").style.left = apos + "px"
document.getElementById("gold3").style.top = apos1 + "px"
//document.getElementById("gold3").width = size3 
bpos1 = Math.floor(Math.random() * 500+100)
bpos = Math.floor(Math.random() * 500+100)
document.getElementById("gold4").style.top = bpos + "px"
document.getElementById("gold4").style.left = bpos1 + "px"
//document.getElementById("gold4").width = size4
cpos1 = Math.floor(Math.random() * 500+100)
cpos = Math.floor(Math.random() * 500+100)
document.getElementById("gold5").style.top = cpos + "px"
document.getElementById("gold5").style.left = cpos1 + "px"
//document.getElementById("gold5").width = size5 
dpos1 = Math.floor(Math.random() * 500+100)
dpos = Math.floor(Math.random() * 500+100)
document.getElementById("gold6").style.top = dpos + "px"
document.getElementById("gold6").style.left = dpos1 + "px"
//document.getElementById("gold6").width = size6
epos1 = Math.floor(Math.random() * 400+100)
epos = Math.floor(Math.random() * 400+100)
document.getElementById("gold7").style.top = epos + "px"
document.getElementById("gold7").style.left = epos1 + "px"
//document.getElementById("gold7").width = size7
fpos1 = Math.floor(Math.random() * 500+100)
fpos = Math.floor(Math.random() * 500+100)
document.getElementById("gold8").style.top = fpos + "px"
document.getElementById("gold8").style.left = fpos1 + "px"
//document.getElementById("gold8").width = size8

//setTimeout(function(){SpawnGold()},1000)
}
