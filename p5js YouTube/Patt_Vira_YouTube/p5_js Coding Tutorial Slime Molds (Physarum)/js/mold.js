class Mold {
  constructor () {
    // this.x = width / 2;
    // this.x = 100;
    this.x = random (width);
    // this.y = height / 2;
    this.y = random (height);
    // this.r = 5;
    this.r = 0.5;

    // this.heading = -180;
    this.heading = random (360);
    this.vx = cos (this.heading);
    this.vy = sin (this.heading);
    this.rotAngle = 45;

    // this.sensorPos = createVector (0, 0);
    this.rSensorPos = createVector (0, 0);
    this.lSensorPos = createVector (0, 0);
    this.fSensorPos = createVector (0, 0);
    this.sensorAngle = 45;
    this.sensorDist = 10;
  }

  update () {
    this.vx = cos (this.heading);
    this.vy = sin (this.heading);

    // this.x = this.x + this.vx;
    // this.y = this.y + this.vy;
    this.x = (this.x + this.vx + width) % width;
    this.y = (this.y + this.vy + height) % height;

    this.getSensorPos (this.rSensorPos, this.heading + this.sensorAngle);
    this.getSensorPos (this.lSensorPos, this.heading - this.sensorAngle);
    this.getSensorPos (this.fSensorPos, this.heading);

    // this.sensorPos.x =
    //   this.x + this.sensorDist * cos (this.heading + this.sensorAngle);
    // this.sensorPos.y =
    //   this.y + this.sensorDist * sin (this.heading + this.sensorAngle);

    /* рефракторинг
        удаляем ... добавлена новая функция getSensorPos
    // this.rSensorPos.x =
    //   this.x + this.sensorDist * cos (this.heading + this.sensorAngle);
    // this.rSensorPos.y =
    //   this.y + this.sensorDist * sin (this.heading + this.sensorAngle);

    this.lSensorPos.x =
      this.x + this.sensorDist * cos (this.heading - this.sensorAngle);
    this.lSensorPos.y =
      this.y + this.sensorDist * sin (this.heading - this.sensorAngle);

    this.fSensorPos.x = this.x + this.sensorDist * cos (this.heading);
    this.fSensorPos.y = this.y + this.sensorDist * sin (this.heading);
    */

    let index, l, r, f;
    // index = 4 * (d * y) * (d * width) + 4 * (d * x);
    index =
      4 * (d * floor (this.rSensorPos.y)) * (d * width) +
      4 * (d * floor (this.rSensorPos.x));
    r = pixels[index];
    index =
      4 * (d * floor (this.lSensorPos.y)) * (d * width) +
      4 * (d * floor (this.lSensorPos.x));
    l = pixels[index];
    index =
      4 * (d * floor (this.fSensorPos.y)) * (d * width) +
      4 * (d * floor (this.fSensorPos.x));
    f = pixels[index];

    // print(r,l,f); // проверка

    if (f > l && f > r) {
      this.heading += 0;
    } else if (f < l && f < r) {
      if (random (1) < 0.5) {
        this.heading += this.rotAngle;
      }
    } else if (l > r) {
      this.heading += -this.rotAngle;
    } else if (r > l) {
      this.heading += this.rotAngle;
    }
  }

  display () {
    noStroke ();
    // fill (0);
    fill (255);
    ellipse (this.x, this.y, this.r * 2, this.r * 2);

    // line (
    //   this.x,
    //   this.y,
    //   this.x + this.r * 3 * this.vx,
    //   this.y + this.r * 3 * this.vy
    // );

    // fill (255, 0, 0);
    // // ellipse (this.sensorPos.x, this.sensorPos.y, this.r * 2, this.r * 2);
    // ellipse (this.rSensorPos.x, this.rSensorPos.y, this.r * 2, this.r * 2);
    // ellipse (this.lSensorPos.x, this.lSensorPos.y, this.r * 2, this.r * 2);
    // ellipse (this.fSensorPos.x, this.fSensorPos.y, this.r * 2, this.r * 2);
  }

  getSensorPos (sensor, angle) {
    //     this.rSensorPos.x =
    //     this.x + this.sensorDist * cos (this.heading + this.sensorAngle);
    //   this.rSensorPos.y =
    //     this.y + this.sensorDist * sin (this.heading + this.sensorAngle);

    sensor.x = (this.x + this.sensorDist * cos (angle) + width) % width;
    sensor.y = (this.y + this.sensorDist * sin (angle) + height) % height;
  }
}
