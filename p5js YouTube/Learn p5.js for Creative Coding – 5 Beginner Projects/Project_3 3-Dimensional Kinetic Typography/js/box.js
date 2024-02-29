class Box {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.isLetter = false;
    this.angle = 0;
    this.depth = 0;
  }

  display () {
    stroke(255,100);
    noFill();
    // let x = map (mouseX, 0, width, 0, 360);

    if (this.isLetter == true) {
      stroke (255);
      this.angle += 1;
      this.depth += sin(this.angle);
    } else {
    //   fill (255);
      this.angle += -1;
    }

    // fill (255);
    push ();

    // translate (
    //   size / 2 + i * size - size * cols / 2,
    //   size / 2 + j * size - size * rows / 2
    // );

    // rotateX (x);
    // rotateY (x);

    // let z = map (mouseX, 0, width, 0, 100);

    // translate (this.x, this.y);
    // translate (this.x, this.y, z);
    translate (this.x, this.y, this.depth);

    rotateX (this.angle);
    rotateY (this.angle);
    // rotateZ (x);

    // box (size);
    box (size - 1 / 3 * size);
    pop ();
  }
}
