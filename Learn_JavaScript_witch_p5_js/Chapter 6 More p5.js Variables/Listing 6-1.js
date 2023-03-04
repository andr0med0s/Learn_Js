//Условно отображать прямоугольник внутри круга
function setup () {
  createCanvas (800, 300);
  rectMode (CENTER);
}
function draw () {
  background (1, 186, 240);
  // объявление переменных
  let x = width / 2;
  let y = height / 2;
  let size = 200; // контролировать размер фигур
// круг
  fill (237, 34, 93);
  noStroke ();
  ellipse (x, y, size, size);
  // условно отображать прямоугольник при нажатии мыши
  if (mouseIsPressed === true) {
    fill (255);
    rect (x, y, size * 0.75, size * 0.15);
  }
}
