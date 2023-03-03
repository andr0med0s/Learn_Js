function setup () {
  createCanvas (600, 400);
}
let r = 0;
let g = 0;
let b = 0;

function draw () {
  background (0);
  strokeWeight (4);
  stroke (255);

  // ellipse(0,   200, 25, 25);
  // ellipse(50,  200, 25, 25);
  // ellipse(100, 200, 25, 25);
  // ellipse(150, 200, 25, 25);
  // ellipse(200, 200, 25, 25);
  // ellipse(250, 200, 25, 25);

  // ellipse (x, 200, 25, 25);
  // x = x + 50;

  // ellipse (x, 200, 25, 25);
  // x = x + 50;

  // ellipse (x, 200, 25, 25);
  // x = x + 50;

  // ellipse (x, 200, 25, 25);
  // x = x + 50;

  // ellipse (x, 200, 25, 25);
  // x = x + 50;

  // ellipse (x, 200, 25, 25);
  // x = x + 50;

  let x = 0;

  while (x <= width) {
    // fill (0, 200, 255);
    g = map (x, 0, 600, 0, 255);
    b = map (x, 0, 600, 255, 0);
    fill (0, g, b);

    ellipse (x, 100, 25, 25);
    // x = x + 50;
    x += 50;
  }

  for (let x = 0; x <= width; x += 50) {
    r = map (mouseX, 0, 600, 0, 255);
    b = map (mouseX, 0, 600, 255, 0);
    fill (r, 0, b);
    ellipse (x, 300, 25, 25);
  }
}
