/*let x = [];
let y = [];
let pts = 100;
let r = 100;
// let f_radius = 50;
let f_radius = [];
let f_amp = 15;
let period = 7;
let rotate = 0;
*/

// let f;
let flowers = [];
let num = 15;

function setup () {
  createCanvas (400, 400);
  angleMode (DEGREES);

  for (let i = 0; i < num; i++) {
/*условие четность*/
    if(i%2 == 0) {

      flowers[i] = new Flower (140 - i * 10, 100, 15, 7, (i + 1) * 0.2);
    } else {
      flowers[i] = new Flower (140 - i * 10, 100, 15, 7, (i + 1) * -0.2);
    }

    // f = new Flower (100, 100, 15, 7, 1);
    // flowers[i] = new Flower (140 - i*10, 100, 15, 7, 1);
    // flowers[i] = new Flower (140 - i * 10, 100, 15, 7, (i + 1) * 0.2);
  }

  // f = new Flower (100, 100, 15, 7, 1);
}

function draw () {
  // background (220);
  background (0);
  translate (width / 2, height / 2);

  for (let i = 0; i < num; i++) {
    // flowers[i] = new Flower (100, 100, 15, 7, 1);
    flowers[i].display ();
  }

  /* копируется в класс
  stroke (0);
  noFill ();
  beginShape ();
  for (let i = 0; i < pts; i++) {
    let angle = i / pts * 360;
    f_radius = f_amp * cos (angle * period);
    x[i] = (r + f_radius) * cos (angle + rotate);
    y[i] = (r + f_radius) * sin (angle + rotate);
    vertex (x[i], y[i]);
  }
  endShape (CLOSE);

  rotate += 1;*/

  /*-------------

  stroke (0);
  beginShape ();
  for (let i = 0; i < pts; i++) {
    let angle = i / pts * 360;
    f_radius = 10 * cos (angle);
    x[i] = r * cos (angle);
    y[i] = r * sin (angle);
    vertex (x[i], y[i]);
  }
  endShape (CLOSE);

  ellipse (0, 0, 10, 10);
*/

  // f.display ();
}
