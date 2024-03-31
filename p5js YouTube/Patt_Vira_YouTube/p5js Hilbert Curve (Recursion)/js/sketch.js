let size = 1080;
let order = 7;

function setup () {
  createCanvas (size, size);
  angleMode(DEGREES);
}

function draw () {
  background (220); 
  /* 
    только для построения 
    // translate(size/2, size/2);

    // ellipse(-size/4, -size/4, 10, 10);
    // ellipse(-size/4, size/4, 10, 10);
    // ellipse(size/4, size/4, 10, 10);
    // ellipse(size/4, -size/4, 10, 10);
    
    
        line(-size/4, -size/4, size/4, -size/4);
        line(-size/4, -size/4, -size/4, size/4);
        line(size/4, -size/4, size/4, size/4);
    */

  // hilbertCurve();
  // hilbertCurve (size / 2, size / 2, size, order);
  hilbertCurve (size / 2, size / 2, size, order, 0);
  noLoop()
}

// function hilbertCurve () {
function hilbertCurve (cx, cy, size, order, angle) {
  // translate (size / 2, size / 2);
  push ();
  translate (cx, cy);
  rotate(angle);

  if (order > 1) {
    // hilbertCurve (-size / 4, -size / 4, size / 2, order - 1);
    // hilbertCurve (size / 4, -size / 4, size / 2, order - 1);
    // hilbertCurve (-size / 4, size / 4, size / 2, order - 1);
    // hilbertCurve (size / 4, size / 4, size / 2, order - 1);
    hilbertCurve (-size / 4, -size / 4, size / 2, order - 1, 0);
    hilbertCurve (size / 4, -size / 4, size / 2, order - 1, 0);
    hilbertCurve (-size / 4, size / 4, size / 2, order - 1, 90);
    hilbertCurve (size / 4, size / 4, size / 2, order - 1, -90);
  }

  let n = pow (2, order + 1);

  // line (-size / 4, -size / 4, size / 4, -size / 4);
  line (-size / n, -size / n, size / n, -size / n);
  // line (-size / 4, -size / 4, -size / 4, size / 4);
  line (-(size / 2 - size / n), -size / n, -(size / 2 - size / n), size / n);
  // line (size / 4, -size / 4, size / 4, size / 4);
  line ((size / 2 - size / n), -size / n, (size / 2 - size / n), size / n);
  pop ();
}
