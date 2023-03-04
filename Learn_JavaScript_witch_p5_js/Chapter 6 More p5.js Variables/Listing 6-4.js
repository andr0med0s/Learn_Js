//Использование переменных mouseX и mouseY
function setup() {
 createCanvas(800, 300);
}
function draw() {
  background(1, 75, 100);
  // объявление переменных
  let x = mouseX;
  let y = mouseY;
  let size = 50;
   // Круг
 fill(237, 34, 93);
 noStroke();
 ellipse(x, y, size, size);
}