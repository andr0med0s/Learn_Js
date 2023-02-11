//Использование переменной частоты кадров
function setup() {
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);
    frameRate(6); //делаем анимацию медленнее
}
function draw() {
    background(220);
    fill(237, 34, 93);
    textSize(36);
    text("frameCount: " + frameCount, width/2, height/2);
}