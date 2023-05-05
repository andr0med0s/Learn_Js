let bgcolor;
let button;
let slider;
let input;
let nameP;

//обратный вызов события
function setup () {
  canvas = createCanvas (200, 200);
  bgcolor = color (200);
  nameP = createP ('Ваше имя: ');
  button = createButton ('go go');
  button.mousePressed (changeColor);

  slider = createSlider (10, 100, 47);
  createP ('');
  input = createInput ('Введите свое имя');
}

function changeColor () {
  bgcolor = color (random (255));
}

// function mousePressed(){
//   // bgcolor = coor(random(255));
//   changeColor();
// }

function draw () {
  background (bgcolor);
  fill (255, 0, 175);
  ellipse (100, 100, slider.value (), slider.value ());
  nameP.html(input.value());
  // text("Привет", 10, 20);
  text (input.value (), 10, 20);
}
