let c1;
let c2;
let c3;
let block = [];
let num = 40;

function setup () {
  createCanvas (400, 400);
  rectMode (CENTER);
  c1 = color ('#617EF1');
  c2 = color ('#56ABAA');
  c3 = color ('#E2E0D4');

  let x = width/num;
  let h = height/num;

  for (let i=0; i<num; i++){
    block[i] = new Block(c1, c2, c3, x*i, h*i, h)
  }

 // b = new Block(c1, c2, c3, 100, 0, 400);
}

function draw () {
  background (220);
  //b.display();
/* let amt = map (mouseX, 0, width, 0, 1);
   let c3 = lerpColor (c1, c2, amt);


    fill(c1);
    square(100, height/2, 80);
    fill(c3);
    square(200, height/2, 80);
    fill(c2);
    square(300, height/2, 80);
 */
/*
  for (let i = 0; i <= width; i++) {
    let amt = map (i, 0, width, 0, 1);
    let c3 = lerpColor (c1, c2, amt);

    stroke(c3);
    line(i, 0, i, height);
  }
*/
// setGradientBlock(0, width, 0, height, c1, c2);
  /*let x = 300;
  setBlockColor(0, x, 0, height, c1, c2, c3);
  setBlockColor(x, width, 0, height, c1, c2, c3);
  */

  for (let i=0; i<num; i++){
    block[i].display();
    block[i].move();
  }

}
/*
function setBlockColor(min, max, y, h, c1, c2, c3){

    let x = 0.5;
    let range = max - min;
    setGradientBlock(min, min + x*range, y, h, c1, c2);
    setGradientBlock(min + x*range, min + max, y, h, c2, c3);
}

function setGradientBlock(min, max, y, h, c1, c2) {
  for (let i = min; i <= max; i++) {
    let amt = map (i, min, max, 0, 1);
    let c3 = lerpColor (c1, c2, amt);

    stroke(c3);
    line(i, y, i, y + h);
  }
}
*/
