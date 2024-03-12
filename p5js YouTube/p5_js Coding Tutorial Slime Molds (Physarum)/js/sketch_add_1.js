let x;
let y;

function setup () {
  createCanvas (400, 400);
  x = 0;
  y = height / 2;
}

function draw () {
  background (220);
  ellipse (x, y, 10, 10);
  // x = x % width;
  x = (x + width) % width;
  x += 1;
  // print(x);
  print (-1 % width);
}
