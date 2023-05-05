let bubbles = [];

function setup () {
  createCanvas (600, 400);

  for (let i = 0; i < 4; i++) {
    // let bubble = {
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
  }
  //  console.log(bubbles);
}
function draw () {
  background (0);
  for (let i = 0; i < bubbles.length; i++) {
    // bubbles[0].move ();
    // bubbles[0].display ();
    bubbles[i].move ();
    bubbles[i].display ();
  }
}
