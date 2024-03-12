// let m;
let molds = [];
let num = 4000;
let d;

function setup () {
  createCanvas (800, 800);
  angleMode (DEGREES);
  d = pixelDensity ();

  //   m = new Mold ();
  for (let i = 0; i < num; i++) {
    molds[i] = new Mold ();
  }
}

function draw () {
//   background (220);
  background (0, 5);
  loadPixels ();

  for (let i = 0; i < num; i++) {
    molds[i].update ();
    molds[i].display ();
}

// m.update ();
// m.display ();
}

