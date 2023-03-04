//Использование случайной функции
function setup() {
  createCanvas(800, 300);
  textAlign(CENTER, CENTER);
  fill(237, 34, 93);
  frameRate(1);
 }
 function draw() {
  let random_0 = random();
  let random_1 = random(10);
  let random_2 = random(100, 1000);
  let offset = 40;
  textSize(24);
  background(255);
  text(random_0, width/2, height/2-offset);
  text(random_1, width/2, height/2-0);
  text(random_2, width/2, height/2+offset);
 }