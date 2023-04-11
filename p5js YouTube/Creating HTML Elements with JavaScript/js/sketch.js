function setup () {
  createCanvas (400, 400);
  createElement('h1', 'My favorite numbers below.');
}

function mousePressed() {
  createP(" Lorem ipsum dolor sit amet consectetur " + random(0, 10));
}

function draw () {
  background (0);
  fill (255, 0, 0);
  rect (100, 100, 50, 50);
}
