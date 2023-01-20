let x = 0;
let x1 = 0;
let x2 = 10;
let x3 = 20;
let x4 = 30;
let x5 = 40;
let direction = 1;
let move = 0.55;


function setup () {
    createCanvas (480, 320);
    rectMode(CENTER);
}

function draw () {
    background(222, 111, 111);
    let y = 50;

    // 1 прямоугольник
    fill(0,0,255);
    rect(x1 , y, 50, 50);

    if(x1 > width || x1 < -50){
        direction = direction * -1;
    }

    x1 = x1 + (direction * 2 );

    // 2 прямоугольник
    fill(0,0,255);
    rect(x2, y + 55, 50, 50);



    x2 = (x1 - (direction * 2)) * move;

    // 3 прямоугольник
    fill(0,0,255);
    rect(x3, y + 110, 50, 50);

    x3 =( x2 + direction ) * move;

    // 4 прямоугольник
    fill(0,0,255);
    rect(x4, y + 165, 50, 50);

    x4 = x1 * move * 2.3;


    // 5 прямоугольник
    fill(0,0,255);
    rect(x5, y + 220, 50, 50); 

    x5 = x2 * move * 2.3;

    
}