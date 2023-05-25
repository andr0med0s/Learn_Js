// let grid = [[1, 1, 1],
//             [1, 1, 1],
//             [1, 1, 1]]; // двумерный массив

let grid;
let next;

let dA = 1;
let dB = 0.5;
let feed = 0.055;
let k = 0.062;

function setup () {
  createCanvas (200, 200);
  pixelDensity (1);
  /*
  Описание Устанавливает масштабирование пикселей для дисплеев 
  с высокой плотностью пикселей. По умолчанию плотность пикселей 
  соответствует плотности отображения, вызовите pixelDensity(1),
  чтобы отключить это. Вызов pixelDensity() без аргументов 
  возвращает текущую плотность пикселей эскиза.
  */

  grid = [];
  next = [];
  for (let x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (let y = 0; y < height; y++) {
      // grid[x][y] = { a: 0, b: 0 };
      // grid[x][y] = { a: random(1), b: random(1) };
      grid[x][y] = { a: 1, b: 0 };
      next[x][y] = { a: 1, b: 0 };
    }
  }

  for (let i = 100; i < 110; i++){
    for (let j = 100; j < 110; j++){
      grid[i][j].b = 1;
    }
  }

}

function draw () {
  background (51);
  
  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
    for (let x = 1; x < width - 1; x++) {
      for (let y = 1; y < height - 1; y++) {
      // next[x][y].a = grid[x][y].a * 0.95;
      // next[x][y].b = grid[x][y].b * 1.01;
      let a = grid[x][y].a;
      let b = grid[x][y].b;
      next[x][y].a = a + 
                    //  (dA *  laplaceA() * a) -
                    //  (dA *  laplaceA())  -
                     (dA *  laplaceA(x, y)) -
                     (a * b * b) +
                     (feed * (1 - a));
      next[x][y].b = b + 
                    //  (dB  *  laplaceB() * b) -
                    //  (dB  *  laplaceB()) -
                     (dB  *  laplaceB(x, y)) +
                     (a * b * b) -
                     ((k + feed) * b);
      next[x][y].a = constrain(next[x][y].a, 0, 1)
      next[x][y].b = constrain(next[x][y].b, 0, 1)
    
    }
  }

  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
    
      // let c = color(255, 0, 100);
      let pix = (x + y * width) * 4;
      let a = next[x][y].a;
      let b = next[x][y].b;
      let c = floor((a - b) * 255);
      c = constrain( c, 0, 255);
      // pixels[pix + 0] = 255;
      // pixels[pix + 0] = floor(grid[x][y].a*255);
      // pixels[pix + 0] = floor(next[x][y].a*255);
      pixels[pix + 0] = c;
      // pixels[pix + 1] = 0;
      pixels[pix + 1] = c;
      // pixels[pix + 2] = 100;
      // pixels[pix + 2] = floor(grid[x][y].b*255);
      // pixels[pix + 2] = floor(next[x][y].b*255);
      pixels[pix + 2] = c;
      pixels[pix + 3] = 255;
    
    }
  }

  updatePixels();

  swap();

}

function laplaceA(x, y){
  let sumA = 0;

  sumA += grid[x][y].a * -1;
  sumA += grid[x - 1][y].a * 0.2;
  sumA += grid[x + 1][y].a * 0.2;
  sumA += grid[x][y + 1].a * 0.2;
  sumA += grid[x][y - 1].a * 0.2;
  sumA += grid[x - 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y - 1].a * 0.05;
  sumA += grid[x + 1][y + 1].a * 0.05;
  sumA += grid[x - 1][y + 1].a * 0.05;

  // return 1;
  return sumA;
}

// function laplaceB(){
//   return 1;
// }

function laplaceB(x, y){
  let sumB = 0;

  sumB += grid[x][y].b * -1;
  sumB += grid[x - 1][y].b * 0.2;
  sumB += grid[x + 1][y].b * 0.2;
  sumB += grid[x][y + 1].b * 0.2;
  sumB += grid[x][y - 1].b * 0.2;
  sumB += grid[x - 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y - 1].b * 0.05;
  sumB += grid[x + 1][y + 1].b * 0.05;
  sumB += grid[x - 1][y + 1].b * 0.05;

  // return 1;
  return sumB;
}

function swap() {
  let temp = grid;
  grid = next;
  // next = grid;
  next = temp;

}