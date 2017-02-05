var x = 10
var y = 10

function setup() {

  createCanvas(400, 400);
  

  while (x < 200 && y < 200) {

    ellipseMode(RADIUS);
    noFill();
    ellipse(200, 200, x, y);

    x = x + 9

    y = y + 9

  }
}

function draw() {

}
