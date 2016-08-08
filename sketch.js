// Draw a starburst using the equation of a circle,
// by drawing lines from the center (x,y) to a point on the circle.

// Can you change the color of the lines, inside the loop, by using the variable i?

// Can you change the length of the lines of the starburst, inside the loop, by using the variable i?

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {

  var x,y;
  var radius = width/4;

  for (var i = 0; i < 360; i+=10) {
    fill(200,20,30);
    x = radius * cos(i);
    y = radius * sin(i);
    
    stroke(255,255,0);
    strokeWeight(2);
    line(width/2,height/2,width/2+x,height/2+y);
  }
}
