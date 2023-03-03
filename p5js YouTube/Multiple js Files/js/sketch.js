let bubbles = [];

function setup () {
  createCanvas (600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random (width);
    let y = random (height);
    bubbles.push (new Bubble (x, y));
  }
}

function draw () {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move ();
    bubbles[i].display ();
  }
}


