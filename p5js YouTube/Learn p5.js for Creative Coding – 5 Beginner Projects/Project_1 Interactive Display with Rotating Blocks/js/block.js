class Block {
  constructor (x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = 70;
  }

  display () {
    // translate (width / 2, height / 2);
    // rotate (angle);
    noFill ();
    stroke (this.c);

    push ();
    translate (this.x, this.y);
    rotate (this.angle);

    // rect (0, 0, size, size);

    // rect (0, 0, size - offset, size - offset);

    // let margin = -size / 2;
    // line (
    //   margin + offset / 2,
    //   margin + offset / 2,
    //   margin + size - offset / 2,
    //   margin + size - offset / 2
    // );
    // line (
    //   margin + size - offset / 2,
    //   margin + offset / 2,
    //   margin + offset / 2,
    //   margin + size  - offset / 2
    // );

    if (this.angle > 0 && this.angle < 45) {
      this.drawRect ();
    } else {
      this.drawX ();
    }

    // this.drawX ();
    // this.drawRect();

    pop ();
  }

  move () {
    let distance;

    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist (mouseX, mouseY, this.x, this.y);

      if (distance < distMouse) {
        this.angle += 1;
        this.c = 255;
      }
    }

    // let distance = dist (mouseX, mouseY, width / 2, height / 2);
    // let distance = dist (mouseX, mouseY, this.x, this.y);

    // if (distance < distMouse) {
    //     // angle += 1;
    //     this.angle += 1;
    // }

    //  else {
    if (this.angle > 0 && this.angle < 90) {
      this.angle += 1;
      if (this.c > 70) {
        this.c -= 3;
      }
      // this.c -= 3;
    } else {
      this.angle = 0;
      this.c = 70;
    }
    // }
  }

  drawRect () {
    rect (0, 0, size - offset, size - offset);
  }

  drawX () {
    let margin = -size / 2;
    line (
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2,
      margin + size - offset / 2
    );
    line (
      margin + size - offset / 2,
      margin + offset / 2,
      margin + offset / 2,
      margin + size - offset / 2
    );
  }
}
