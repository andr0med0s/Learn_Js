let w = 5;
// let h = 100;
// let h = w / 2;
let h = w * 2;

// let cols = 8;
// let rows = 4;
let cols;
let rows;
/*
let startingCol;
let endingCol;
let startingRow;
let endingRow;
*/
// let c;
/*
let colRange;
let rowRange;
*/
// let grid = [];

// let b;
let blocks = [];
// let num = 5;
let num;

let colors;

let grid = [];

function setup () {
  createCanvas (800, 800);
  cols = width / w;
  rows = height / h;

  num = floor (random (3, 6));

  colors = [
    color (255, 240, 1),
    color (255, 1, 1),
    color (1, 1, 253),
    color (249),
  ];
  /*
  colors = ['a' , 'b', 'c'];

  for (let i=0; i<10; i++) {
    // print(colors[i]);
    print(colors[i % colors.length]);
  }
*/
  for (let i = 0; i < num; i++) {
    // blocks[i] = new Block ();
    // blocks[i] = new Block (color(255, 0, 0));
    blocks[i] = new Block (colors[i % colors.length]);
  }

  // b = new Block();

  /*
  let a = floor (random (0, cols));
  let b = floor (random (0, cols));
  let c = floor (random (0, rows));
  let d = floor (random (0, rows));
*/
  /*
   startingCol = 1;
   endingCol = 4;
   startingRow = 0;
   endingRow = 2; */
  /*
  startingCol = floor (random (0, cols));
  endingCol = floor (random (0, cols));
  startingRow = floor (random (0, rows));
  endingRow = floor (random (0, rows));
*/

  /*
  startingCol = min (a, b);
  endingCol = max (a, b);
  startingRow = min (c, d);
  endingRow = max (c, d);
*/

  // let colRange = randomLengthGen(cols);
  // let rowRange = randomLengthGen(rows);
  //  colRange = randomLengthGen(cols);
  //  rowRange = randomLengthGen(rows);
  /*
  colRange = randomLengthGen (cols + 1);
  rowRange = randomLengthGen (rows + 1);
  

  // print (startingCol, endingCol, startingRow, endingRow);
  print (colRange.x, colRange.y, rowRange.x, rowRange.y);
*/
  /*
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      // grid[i[j]] = new Cell(0, 0, w, h, 1);
      grid[i][j] = new Cell (i * w, j * h, w, h, j);
    }
  }
*/
  /* перенос в Block
  // for (let i = startingCol; i < endingCol; i++) {
  for (let i = colRange.x; i < colRange.y; i++) {
    grid[i] = [];
    // for (let j = startingRow; j < endingRow; j++) {
    for (let j = rowRange.x; j < rowRange.y; j++) {
      // grid[i[j]] = new Cell(0, 0, w, h, 1);
      grid[i][j] = new Cell (i * w, j * h, w, h, j);
    }

    // c = new Cell(0, 0, w, h, 1);
  }
  */

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell (i * w, j * h, w, h, j);
    }
  }
}
function draw () {
  background (220);
  /*
  for (let i = colRange.x; i < colRange.y; i++) {
    for (let j = rowRange.x; j < rowRange.y; j++) {
      grid[i][j].display ();
    }
  }
  */

  // b.display();

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      stroke(255);
      strokeWeight(0.5);
      grid[i][j].displayCell();
    }
  }

  for (let i = 0; i < num; i++) {
    // blocks[i] = new Block();
    blocks[i].display ();
  }

  // c.display();

  /*-----------
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
----------*/
  /*
  for (let i = startingCol; i < endingCol; i++) {
    for (let j = startingRow; j < endingRow; j++) {
      // rect (10, 10, w, h);
      // line (10, 10, 10 + w, 10 + h);

      // rect (i * w, j * h, w, h);


      //  if(j%2==0){
      //    line (i*w, j*h, i*w + w, j*h + h);
      //  } else {
      //    line (i * w + w, j * h, i * w, j * h + h);
      //  }

      // line (i*w, j*h, i*w + w, j*h + h);
      // line (i *  w + w, j * h, i * w, j * h + h);
    }
  }
*/
  // rect(0, 0, w, h);
  // line(0, 0, w, h);
  // rect (10, 10, w, h);
  // line (10, 10, 10 + w, 10 + h);
}
/* перенос в класс Block
function randomLengthGen (length) {
  // let a = floor (random (0, length));
  // let b = floor (random (0, length));
  let a;
  let b;

  do {
    // let a = floor (random (0, length));
    // let b = floor (random (0, length));
    a = floor (random (0, length));
    b = floor (random (0, length));
  } while (abs (a - b) == 0);

  // let startingCol = min (a, b);
  // let endingCol = max (a, b);

  let range = createVector (min (a, b), max (a, b));

  return range;
}
*/
