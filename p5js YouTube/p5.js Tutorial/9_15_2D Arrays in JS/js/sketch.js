let cols = 10;
let rows = 10;

let colors = [];
// let colors = new Array[cols]; не используется

function make2Darray(cols,rows) { // функция создания 2d массива
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function setup () {
  createCanvas (300, 300);
    colors = make2Darray(cols,rows);

  for (let i = 0; i < cols; i++) {
    // colors[i] = [];
    // colors[i] = new Array(rows); не используется
    for (let j = 0; j < rows; j++) {
        colors[i][j] = random(255);
    }
  }
}

function draw () {
  background (51);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * 30;
        let y = j * 30;

        fill(colors[i][j]);
        stroke(0);
        // fill(255);
        rect (x, y, 30, 30);
      }
    }
}
