function setup () {
  createCanvas (600, 400);
}

function draw () {
  background (50);
  lollipop (10, 20, 20, 3);
  lollipop (150, 70, 40, 5);
  lollipop (300, 200, 80, 10 );
}

function lollipop (x, y, diameter, stemX) {
  fill (0, 200, 255);
  rect (x-2, y, stemX, stemX+100);

  fill (255, 0, 200);
  ellipse (x, y, diameter, diameter);
}
