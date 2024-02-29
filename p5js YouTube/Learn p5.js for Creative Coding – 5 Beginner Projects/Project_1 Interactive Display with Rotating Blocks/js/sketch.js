// let angle = 0;
let distMouse = 15;
// let b;
let blocks = [];
let cols;
let rows;
// let cols = 4;
// let rows = 4;
// let size = 100;
// let offset = 40;
let size = 10;
let offset = 4;

function setup () {
  createCanvas (1900, 800);
  rectMode (CENTER);
  angleMode (DEGREES);
  cols = width/size;
  rows = height/size;


  for (let i=0; i<cols; i++) {
    blocks[i] = [];
    for (let j=0; j<rows; j++) {
        // blocks[i][j] = new Block(i*size, j*size);
        blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size);
    }
  }

//   b = new Block(width/2, height/2);
}

function draw () {
  background (0);
//   let distance = dist (mouseX, mouseY, width / 2, height / 2);

// //   print (distance);
// if (distance < distMouse) {
//     angle += 1; 
// }

//   translate (width / 2, height / 2);
//   rotate (angle);
//   rect (0, 0, 100, 50);

//    angle += 1;

// b.move();
// b.display();

for (let i=0; i<cols; i++) {
    
    for (let j=0; j<rows; j++) {
        blocks[i][j].move();
        blocks[i][j].display();
    }
  }


//   print (pmouseX, mouseX, pmouseY, mouseY);

}
