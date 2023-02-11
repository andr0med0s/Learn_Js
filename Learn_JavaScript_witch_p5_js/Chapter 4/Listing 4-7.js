//Использование переменных в функции рисования 
//и объявление глобальных переменных
    let canvasWidth = 800;
    let canvasHeight = 300;
    
    function setup() {

    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
}

function draw() {
    background(1, 186, 240);
//объявление переменных
    let x = canvasWidth / 2;
    let y = canvasHeight / 2;
//круг
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, 200, 200);
//прямоугольник
    fill(255);
    rect(x, y, 150, 30);
}