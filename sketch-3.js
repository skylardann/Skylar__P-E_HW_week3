function setup() {

  createCanvas(400, 400);
}

function draw() {

  background(255)


  for (var x = 2; x <= 400; x += 5) {
    
    line(x, 2, x, (x * 2))
  }
}
