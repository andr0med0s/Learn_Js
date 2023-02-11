//Использование переменной frameCount
function setup() {
    createCanvas(800, 300);
    rectMode(CENTER);
   }
   function draw() {
    background(1, 186, 240);
   //объявление переменных
    let x = width / 2;
    let y = height / 2;
    //увеличиваем размер с текущим значением frameCount
    let size = 200 + frameCount;
    //круг
    fill(237, 34, 93);
    noStroke();
    ellipse(x, y, size, size);
    // Прямоугольник
    fill(255);
    rect(x, y, size*0.75, size*0.15);
   }