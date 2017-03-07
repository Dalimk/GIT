var container = document.getElementById("container");
var xPos = 101;
var speed = 1;
var yPos = 101;

function floatY() {
  if (900 == yPos || 100 == yPos) {
    speed = -speed;
  }

  yPos += speed;
  container.style.top = yPos + "px";
}

function float() {
    if( 1400 == xPos || 100 == xPos) {
      speed = -speed;
    }

    xPos += speed;
    container.style.left = xPos + "px";
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        speed = -speed;
    }
}

setInterval(float,10);
setInterval(floatY,10);
