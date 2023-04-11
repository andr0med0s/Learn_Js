let bubbles = [];

function setup () {
  createCanvas (600, 400);
  for (let i = 0; i < 5; i++) {
    bubbles[i] = new Bubble (random (width), random (height));
  }
}

function draw () {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].update ();
    bubbles[i].display ();
    for (let j = 0; j < bubbles.length; j++) {
      if (i != j && bubbles[i].intersects (bubbles[j])) {
        bubbles[i].changeColor ();
        bubbles[j].changeColor ();
      }
    }
  }
}
