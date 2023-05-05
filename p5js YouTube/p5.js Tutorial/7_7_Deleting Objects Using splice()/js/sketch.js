let bubbles = [];

function setup () {
  createCanvas (600, 400);
}

function mousePressed () {
  let b = new Bubble (mouseX, mouseY);
  bubbles.push (b);
}

function draw () {
  background (0);
  for (let i = bubbles.length - 1; i >= 0; i--) {
    //проход массива с конца
    bubbles[i].update ();
    bubbles[i].display ();
    // if(bubbles[i].lifespan < 0){
    if (bubbles[i].isFinished()) { //проверка состояния теперь находится в объекте
      bubbles.splice (i, 1);
    }
  }
}
