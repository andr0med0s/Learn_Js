let x = 0;
let speed = 3;
function setup () {
  createCanvas (600, 400);
}
function draw () {
  background (0);
  stroke (255);
  strokeWeight (4);
  noFill ();

  ellipse(x, 200, 100, 100);
  if(x > width || x < 0){// одно из условий должно быть true
    speed = speed * -1; 
  }
  x = x + speed;

  /*
  if (mouseX > 250) { // как только первое условие true , другие условия в else if игнорируются
    // fill (255, 2, 200);
    ellipse (300, 200, 100, 100);
  // }else if (mouseX > 150){
  //   rect(300, 200, 100, 100);
  // }else if (mouseX > 50){
  //   line(0, 0, width, height);
  // }else {
  //   point(300, 200);
  // }
} if (mouseX > 150){ // если везде if то выполняются независимо
  rect(300, 200, 100, 100);
} if (mouseX > 50){
  line(0, 0, width, height);
} 
*/
/*
  if (mouseX > 300 && mouseX < 400) {
    fill(255, 0, 200);
  }
  rect(300, 200, 100, 100);
*/
}
