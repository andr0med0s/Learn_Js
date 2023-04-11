let bubbles = [];
let flower = [];

function preload(){

  for (let i = 0; i < 4; i++){
    flower[i] = loadImage('img/pic' + i + '.png');
  }

  // flower[0] = loadImage('img/pic0.png');
  // flower[1] = loadImage('img/pic1.png');
  // flower[2] = loadImage('img/pic2.png');
}

function setup () {
  createCanvas (600, 400);
}

function mousePressed () {
  let r = floor(random(0 , flower.length));
  let b = new Bubble (mouseX, mouseY, flower[r]);
  bubbles.push (b);
}

function draw () {

  for (let i = 0; i < 4; i++){
    flower[i].resize(50, 50);
  }

  // flower[0].resize(50, 50);
  // flower[1].resize(50, 50);
  // flower[2].resize(50, 50);
  background (255);
  for (let i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].update ();
    bubbles[i].display ();
  }
}
