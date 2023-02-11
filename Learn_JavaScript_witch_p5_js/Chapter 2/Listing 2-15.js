//ellipse function
function setup(){
    createCanvas(500,300);
    background(200,200,200);
    rectMode(CENTER);
}
/*
function draw(){
    rect(400, 150, 100, 100);
    ellipse(350, 120 100, 100); 
    // первые две координаты это координаты центра
    // вторые две координаты горизонтального и 
    //вертикального радиусов
}
*/
function draw(){
    rect(250, 150, 200, 300);
    ellipse(0,150,300);
    ellipse(500,150,300);
}