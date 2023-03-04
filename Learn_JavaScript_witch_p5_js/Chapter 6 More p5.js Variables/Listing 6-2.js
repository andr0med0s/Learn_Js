//Переключить отображение по щелчку мыши
let toggle = true;
function setup () {
  createCanvas (800, 300);
  rectMode (CENTER);
}
function draw () {
  // изменить значение переключения в зависимости от нажатия мыши.
  if (mouseIsPressed === true) {
    toggle = !toggle;
  }
  // отображать другой цвет фона в зависимости от значения переключателя
  if (toggle === true) {
    background (1, 186, 240);
  } else {
    background (250, 150, 50);
  }
  // объявление переменных
  let x = width / 2;
  let y = height / 2;
  let size = 200;
  // Круг
  fill (237, 34, 93);
  noStroke ();
  ellipse (x, y, size, size);
  // Прямоугольник
  fill (255);
  rect (x, y, size * 0.75, size * 0.15);
}
