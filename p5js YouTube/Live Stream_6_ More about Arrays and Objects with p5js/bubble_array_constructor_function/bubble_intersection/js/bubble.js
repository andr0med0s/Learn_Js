function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.r = 48;

  this.display = function () {
    // stroke (255);
    noStroke ();
    fill (255, 100);
    // ellipse (this.x, this.y, 48, 48);
    ellipse (this.x, this.y, this.r*2, this.r*2);
  };
  
  this.update = function () {
    this.x = this.x + random (-1, 1);
    this.y = this.y + random (-1, 1);
  };
}
