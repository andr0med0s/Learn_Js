let x = 0;

let timer;
let counter = 0;
let interval;
let button;

function setup () {
  createCanvas (200, 200);
  timer = createP ('timer');
  button = createButton ('start timer');
//   button.mousePressed (startTimer);
  button.mousePressed (doTimer);
//   interval = setInterval (timeIt, 500);
}

/*
// function mousePressed() {
// function startTimer () {
function doTimer () {
  // clearInterval(interval);
  interval = setInterval (timeIt, 500);
  button.html('stop timer');
}
*/

function doTimer() {
    if (!interval) {
      interval = setInterval(timeIt, 500);
      button.html('stop timer');
    } else {
      clearInterval(interval);
      interval = false;
      button.html('start timer');
    }
  }

// function stopTimer(){------------случай при создании второй кнопки
//     clearInterval(interval);
// }

function timeIt () {
  timer.html (counter);
  counter++;
}

function draw () {
  // timer.html(frameCount);
  background (51);
  stroke (255);
  line (x, 0, x, height);

  x = x + 3;
  if (x > width) {
    x = 0;
  }
}
