var bounce = document.createElement("DIV");
bounce.setAttribute("id","bounce");
document.body.appendChild(bounce);
//initiliasing bounce position
var i = window.innerWidth/2-50;
var j = window.innerHeight/2-50;
var clickFlag=true;
bounce.style.left=i+"px";
bounce.style.top = j+"px";
//random direction
var x=Boolean(Math.floor(Math.random() * 2));
var y=Boolean(Math.floor(Math.random() * 2));
//function for move bounce
function move(flagX,flagY){
  if(flagX){
    i+=3;
  } else {
    i-=3;
  }
  if(flagY){
    j++;
  } else {
    j--;
  }
  bounce.style.left = i+"px";
  bounce.style.top = j+"px";
}
//function for detect borders
function detect(){
  var position = bounce.getBoundingClientRect();
  if(position.left<=0){
    x = true;
  }
  if(position.bottom>=window.innerHeight){
    y=false;
  }
  if(position.right>=window.innerWidth){
    x=false;
  }
  if(position.top<=0){
    y=true;
  }
  console.log(x+" "+y);
   move(x,y);
}
  var moving;
function bodyClick(){//function that detects clicks on body
  console.log("I'm run!");
  if(clickFlag){
    clickFlag=false
    moving =setInterval(detect,1);
  } else{
    clickFlag=true;
    clearInterval(moving);
  }
}
document.addEventListener("click", function(){bodyClick()},true);
