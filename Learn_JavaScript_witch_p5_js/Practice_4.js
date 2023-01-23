
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;
let x5 = 0;
let direction = 1;
let direction2 = 2;
let direction3 = 3;
let direction4 = 4;
let direction5 = 5;

let angle = 0.0;
let offset = 50;
let offset1 = 105;
let offset2 = 160;
let offset3 = 215;
let offset4 = 270;
let offset5 = 325;
let scalar = 40;
let speed = 0.025;

function setup () {
    createCanvas (480, 320);
    rectMode(CENTER);
}

function draw () {
    background(222, 111, 111);

//-----------------
    // 1 прямоугольник
    fill(0,0,255);
    y1 = offset + sin(angle) * scalar;
    rect(x1 , y1, 50, 50);
    if(x1 > width+50 || x1 < -50){
        direction = direction * -1;
    }
    x1 = x1 + direction ;
    angle += speed;

//-----------------
    // 2 прямоугольник
    fill(0,0,255);
    y2 = offset1 + sin(angle + 0.4) * scalar;
    rect(x2, y2, 50, 50);
    if(x2 > width+50 || x2 < -50){
        direction2 = direction2 * -1;
    }
    x2 = x2 + direction2 ;

//-----------------
    // 3 прямоугольник
    fill(0,0,255);
    y3 = offset2 + sin(angle + 0.8) * scalar;
    rect(x3, y3, 50, 50);
    if(x3 > width+50 || x3 < -50){
        direction3 = direction3 * -1;
    }
    x3 = x3 + direction3 ;

//-----------------
    // 4 прямоугольник
    fill(0,0,255);
    y4 = offset3 + sin(angle + 0.8) * scalar;
    rect(x4, y4, 50, 50);
    if(x4 > width+50 || x4 < -50){
        direction4 = direction4 * -1;
    }
    x4 = x4 + direction4 ;

//-----------------
    // 5 прямоугольник
    fill(0,0,255);
    y5 = offset4 + sin(angle + 1) * scalar;
    rect(x5, y5, 50, 50); 
    if(x5 > width+50 || x5 < -50){
        direction5 = direction5 * -1;
    }
    x5 = x5 + direction5 ;

}