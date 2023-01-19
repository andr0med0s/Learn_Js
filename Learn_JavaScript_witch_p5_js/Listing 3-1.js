//Заливка, обводка, ширина обводки
function setup() {
    createCanvas(800,400);
}
function draw(){
    background(220);
    
    let sizeCircle = mouseX ;
    //circle 01
    fill(51,51,51);
    strokeWeight(2);
    stroke(75);
    ellipse(400, 200, sizeCircle);

    //circle 02
    stroke(0);
    fill(255,53,139);
    ellipse(400, 200,sizeCircle - 25);

    //circle 03
    fill(1,176,240);
    ellipse(400, 200, sizeCircle - 50);

    //circle 04
    fill(174, 238,0);
    ellipse(400, 200, sizeCircle / 2);
}
/*
noFill(); -- без заливки
noStroke();-- без обводки
*/