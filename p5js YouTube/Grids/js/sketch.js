let gridSize = 20;

// let patterns = [pattern1, pattern2, pattern3, pattern4];
let patterns = [[pattern1, 1], [pattern2, 10], [pattern3, 0], [pattern4, 1]];

function setup () {
  createCanvas (windowWidth, windowHeight);
}

function draw () {
  background ('black');

  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      // circle(x,y,gridSize); сетка с кругами
      push (); //что бы не перерисовывалось

      translate (x, y);
      // circle(x,y,gridSize*0.3);
      drawPattern ();

      pop ();
    }
  }

  noLoop (); // pause для цикла рисования на первом кадре
}

function drawPattern () {
  strokeWeight (gridSize * 0.2); // то же самое что 20% от размера сетки
  stroke ('white');

  let raffle = [];
  /*
for(let i=0; i<patterns.length; i++) {
  let pattern = pattern[i];
--------------сокрашенная запись*/
  for (let pattern of patterns) {
    //pattrn[0] --> function
    //pattern[1] --> число билетов или "размер" вероятности

    for (let i = 0; i < pattern[1]; i++) {
      raffle.push (pattern[0]);
    }
  }

  // let r = random (1);

  // let selectedPattern;
  // let selectedPattern = random (patterns); 

  /*
  if (r < 0.5) {
    //backward диагональ
    line (0, 0, gridSize, gridSize);
  } else {
    //forward диагональ
    line (0, gridSize, gridSize, 0);
  }
  */
  /*
  if (r < 0.5) patter1();
   else patter2();
*/
  /*
   if (r < 0.5)selectedPattern = pattern1;
   else selectedPattern = pattern2;
*/

  let selectedPattern = random (raffle);

  selectedPattern ();
}

function mousePressed(){
  loop();//unpaused
}

function pattern1 () {
  line (0, 0, gridSize, gridSize);
}

function pattern2 () {
  line (0, gridSize, gridSize, 0);
}

function pattern3 () {
  //half backward diagonal
  line (0, 0, gridSize / 2, gridSize / 2);
}

function pattern4 () {
  //half forward diagonal
  line (0, gridSize, gridSize / 2, gridSize / 2);
}
