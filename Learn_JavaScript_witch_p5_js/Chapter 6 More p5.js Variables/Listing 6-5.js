//Сохранение рисунка на экране
function setup() {
 createCanvas(800, 300);
 background(1, 75, 100);
}
function draw() {
 // объявление переменных
 let x = mouseX;
 let y = mouseY;
 let size = 25;
  // Круг
  fill(237, 34, 93, 100);
  noStroke();
  ellipse(x, y, size, size);
 }