class Flower {
  constructor (r, pts, f_amp, period, speed) {
    this.x = [];
    this.y = [];
    this.r = r;
    this.pts=pts;

    this.f_radius = 0;
    // this.f_amp = 10;
    this.f_amp = f_amp;

    this.period = period;
    this.speed = speed;

    this.rot = 0;
  }

  display () {
    push();
    blendMode(DIFFERENCE);
    // stroke (0);
    noStroke (0);
    // noFill ();
    fill (255);
    beginShape ();
    for (let i = 0; i < this.pts; i++) {
      let angle = i / this.pts * 360;
      this.f_radius = this.f_amp * cos (angle * this.period);
      /* x[i] = (r + f_radius) * cos (angle + rotate);
       y[i] = (r + f_radius) * sin (angle + rotate);
       vertex (x[i], y[i]);*/
      this.x[i] = (this.r + this.f_radius) * cos (angle + this.rot);
      this.y[i] = (this.r + this.f_radius) * sin (angle + this.rot);
      vertex (this.x[i], this.y[i]);
    }
    endShape (CLOSE);
    pop();
    // rotate += 1;
    this.rot += this.speed;
  }
}
