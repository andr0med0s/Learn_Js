let x = 0;
let timer1;
let timer2;
// let counter = 0;

function setup() {
    createCanvas(200, 200);
    timer1 = createP('timer 1');
    timer2 = createP('timer 2');

    // makeTimer(timer1);
    // // makeTimer();
    // makeTimer(timer2);

    makeTimer(timer1, 500);
    makeTimer(timer2, 312);

    // setInterval(timeIt, 500);
}

// function makeTimer (elt){
function makeTimer (elt, wait){
    let counter = 0;
    // setInterval(timeIt, 500);
    setInterval(timeIt, wait);

    function timeIt(){
        // timer1.html(counter);
        // timer2.html(counter);
        elt.html(counter);
        counter++;
    }
}

// function timeIt(){
//     timer1.html(counter);
//     timer2.html(counter);
//     counter++;
// }

function draw() {
    // timer.html(frameCount);
    background (51);
    stroke (255);
    line (x, 0, x, height);
  
    x = x + 3;
    if (x > width) {
      x = 0;
    }
} 

