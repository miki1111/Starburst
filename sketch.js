var x, y, radius, h, k;


function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {

  radius = width/4;

  for (i = 0; i < 360; i+=10) {
    fill(200,20,30);
    x = radius * cos(i);
    y = radius * sin(i);
    
    stroke(255,255,0);
    strokeWeight(2);
    line(width/2,height/2,width/2+x,height/2+y);
  }
}
