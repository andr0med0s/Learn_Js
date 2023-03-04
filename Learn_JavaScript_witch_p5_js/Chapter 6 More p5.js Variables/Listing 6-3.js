//Рисование простого круга на экране
function setup () {
  createCanvas (800, 300);
}

function draw () {
  background (1, 75, 100);
  // объявление переменных
  let x = width / 2;
  let y = height / 2;
  let size = 50;
  // Круг
  fill (237, 34, 93);
  noStroke ();
  ellipse (x, y, size, size);
}
