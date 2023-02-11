//Делаем анимацию условной
let size;

function setup () {
  createCanvas (800, 300);
  rectMode (CENTER);
  size = 200;
}
function draw () {
  background (1, 186, 240);
  //объявление переменных
  let x = width / 2;
  let y = height / 2;
  let size = 200;
  // if (frameCount < 30) {
  //   size = size + frameCount;
  // } else {
  //   size = size + 30;
  // }
  // if (20 < frameCount && frameCount < 30) { // Listing 5-11 Использование оператора  и
  //   size = size + frameCount;
  //  }
  if (frameCount < 30 || frameCount > 120) { // Listing 5-12 Использование оператора  или
    size = size + frameCount;
   }
   else {
      size = size + 30;
    }
  // Эллипс
  fill (237, 34, 93);
  noStroke ();
  ellipse (x, y, size, size);
  // Прямоугольник
  fill (255);
  rect (x, y, size * 0.75, size * 0.15);
}
