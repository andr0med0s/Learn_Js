let bubble = {
  x: 300,
  y: 200,
  display: function () {
    stroke (255);
    strokeWeight (4);
    noFill ();
    ellipse (this.x, this.y, 24, 24);
  },
  move: function () {
    this.x = this.x + random (-1, 1);
    this.y = this.y + random (-1, 1);
  },
};

function setup () {
  createCanvas (600, 400);
}

function draw () {
  background (0);
  // move ();
  // display ();
  bubble.move ();
  bubble.display ();
}

// function move(){
//   bubble.x = bubble.x + random(-1, 1);
//   bubble.y = bubble.y + random(-1, 1);

// }

// function display(){
//   stroke(255);
//   strokeWeight(4);
//   noFill();
//   ellipse(bubble.x,bubble.y, 24, 24);
// }
