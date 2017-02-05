function setup() {

  createCanvas(600, 600);

}

function draw() {

  background(100, 33, 31, random);
  stroke(232, 33.34, 3);
  noFill();
  rectMode(CENTER);

  for (var x = 0; x <= 400; x += 100) {
    for (var y = 20; y <= 80; y += 20) {
      rect(100 + x, 300, y, y);
    }
  }
}
