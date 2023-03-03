let bubbles = [];

function setup () {
  createCanvas (600, 400);
  // for (let i = 0; i < 200; i++) {
  //   bubbles[i] = new Bubble (random(width), random(height));
  // }
}

// function mousePressed () {
function mouseDragged () {
  bubbles.push (new Bubble (mouseX, mouseY));
}

// function keyPressed() {
//   bubbles.splice(0, 1);
// }

function draw () {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move ();
    bubbles[i].display ();
  }

  if (bubbles.length > 50) {
    bubbles.splice (0, 1);
  }
}

function Bubble (x, y) {
  this.x = x;
  this.y = y;

  this.display = function () {
    stroke (255);
    // noFill ();
    fill (255, 0, 150, 50);
    ellipse (this.x, this.y, 24, 24);
  };

  this.move = function () {
    this.x = this.x + random (-1, 1);
    this.y = this.y + random (-1, 1);
  };
}

/*
    bubbles[i] = {
      x: random(0, width),
      y: random(0, height),
      display: function () {
        stroke (255);
        noFill ();
        ellipse (this.x, this.y, 24, 24);
      },
      move: function () {
        this.x = this.x + random (-1, 1);
        this.y = this.y + random (-1, 1);
      },
    };
*/
