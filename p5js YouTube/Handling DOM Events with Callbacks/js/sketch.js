let bgcolor;
let button;
//обратный вызов события
function setup () {
  canvas = createCanvas (200, 200);
  bgcolor = color(200);
  button = createButton("go fo go"); 
  button.mousePressed(changeColor);
}

function changeColor(){
  bgcolor = color(random(255));
}

// function mousePressed(){
//   // bgcolor = coor(random(255));
//   changeColor();
// }

function draw () {
  background (bgcolor);
  fill (255, 0, 175);
  rect (100, 100, 50, 50);
}
