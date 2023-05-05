let b1;
let b2;

function setup () {
  createCanvas (600, 400);
  b1 = new Bubble (250, 200);
  b2 = new Bubble (350, 200);
}

function draw () {
  background (0);

  b1.update ();
  b2.update ();
  b1.display ();
  b2.display ();

  if(b1.intersects(b2)){
    b1.changeColor ();
    b2.changeColor ();
  }

  // let d = dist (b1.x, b1.y, b2.x, b2.y);

  // if (d < b1.r + b2.r) {
  //   b1.changeColor ();
  //   b2.changeColor ();
  // }
}
