let circle = {
  x:0,
  y:200,
  diameter:50
};

let col = 0;

function setup(){
  createCanvas(600, 400);
}

function draw(){
  //background
  background(col);
  //ellipse
  fill(250, 118, 222);

  ellipse(mouseX,circle.y,circle.diameter, circle.diameter) ;

 
}
