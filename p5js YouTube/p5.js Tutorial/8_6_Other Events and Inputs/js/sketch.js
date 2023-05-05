let bgcolor;
let button;
let slider;
let nameInput;
let nameP;

//обратный вызов события
function setup () {
  canvas = createCanvas (200, 200);

  canvas.mouseOver(overpara);
  canvas.mouseOut(outpara);
  canvas.mousePressed(changeColor);

  bgcolor = color (200);
  nameP = createP ('Ваше имя: ');

  nameP.mouseOver(overpara); 
  nameP.mouseOut(outpara);

  button = createButton ('go go');
  button.mousePressed (changeColor);

  slider = createSlider (10, 100, 47);
  createP ('');
  nameInput = createInput ('Введите свое имя');

  // input.changed(updateText);
  nameInput.input(updateText);
}

function updateText(){
  nameP.html(nameInput.value());
}

function overpara(){
  nameP.html('Указатель здесь!! (over)');
}

function outpara(){
  nameP.html('Нет указателя (out)');
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
  //nameP.html(input.value());
  // text("Привет", 10, 20);
  text (nameInput.value (), 10, 20);
}
