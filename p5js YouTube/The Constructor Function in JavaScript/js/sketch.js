let bubbles = [];

function setup () {
  createCanvas (600, 400);
  for (let i = 0; i < 40; i++) {
    bubbles[i] = new Bubble ();
  }
}
function draw () {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move ();
    bubbles[i].display ();
  }
}

function Bubble () {
  this.x = random (0, width);
  this.y = random (0, height);

  this.display = function () {
    stroke (255);
    noFill ();
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
