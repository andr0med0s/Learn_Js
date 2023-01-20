//использование переменных для построения
function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);
    // объявление переменной
    var x = 400;
    var y = 150;
    //круг
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, 200, 200);
    // Прямоугольник
    fill(255);
    rect(x, y, 150, 30);
}