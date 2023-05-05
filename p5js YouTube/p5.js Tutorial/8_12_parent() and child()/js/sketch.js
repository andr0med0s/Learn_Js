// part 1
// function setup () {
//   let canvas = createCanvas (400, 400);
//   canvas.parent('#canvasp');
// }

// function draw () {
//   background (0);
//   ellipse (200, 200, random (100), random (100));
// }
//part 2

let happy = ['rainbow', 'unicorn', 'purple', 'bacteria']

function setup () {
noCanvas();

let button = select('#button');
button.mousePressed(addItem);
}

function addItem (){
    let r = floor(random(0, happy.length )); 
    let li = createElement('li', happy[r]);
    li.parent('happylist');
}
