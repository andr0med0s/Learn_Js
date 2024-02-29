let size = 50;
/*let cols = 6;
let rows = 6;*/
let cols;
let rows;

// let b;

let boxes = [];

let font;
let msg = 'H';
let points = [];
let fontX = -140;
let fontY = 130;
let fontSize = 400;

function preload () {
  font = loadFont ('fonts/Anta/Anta-Regular.ttf');
}

function setup () {
  createCanvas (600, 600, WEBGL);
  angleMode (DEGREES);
  cols = width / size;
  rows = height / size;
  // b = new Box(0, 0);

  points = font.textToPoints (msg, fontX, fontY, fontSize);

  for (let i = 0; i < cols; i++) {
    boxes[i] = [];
    for (let j = 0; j < rows; j++) {
      boxes[i][j] = new Box (
        size / 2 + i * size - size * cols / 2,
        size / 2 + j * size - size * rows / 2
      );
    }
  }
}

function draw () {
  background (0,0,139);

  // b.display ();

  let x = map (mouseX, 0, width, 0, 360);
  // rotateX(x);
  // rotateY(x);

  /*rotateX(x);
  rotateY(x); 
  rotateZ(x);*/

  /* fill (255, 0, 0);
  box (50);*/

  let distance;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      for (let k = 0; k < points.length; k++) {
        distance = dist (
          points[k].x,
          points[k].y,
          boxes[i][j].x,
          boxes[i][j].y
        );

        if (distance < 20) {
          boxes[i][j].isLetter = true;
        }
        //  else {
        //   boxes[i][j].isLetter = false;
        // }
      }

      boxes[i][j].display ();
    }
  }

  /*
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
     /*
      fill (255);
      push ();
      // translate (size, size);
      // translate (i * size, j * size);
      // translate (i * size - size*cols/2, j * size - size*rows/2);
      translate (
        size / 2 + i * size - size * cols / 2,
        size / 2 + j * size - size * rows / 2
      );
      box (size);
      pop ();
    }
  }
  */

  /*fill (255);
  push ();
  // fill (255);
  translate (50, 50);
  box (50);
  pop ();

  translate (-50, -50);
  box (50);

  fill (255, 0, 0);
  box (50);*/

  /* точечный контур
  fill(255,0,0);
  for (let i=0; i<points.length; i++){
    ellipse(points[i].x, points[i].y, 10, 10);
  }
  */
}
