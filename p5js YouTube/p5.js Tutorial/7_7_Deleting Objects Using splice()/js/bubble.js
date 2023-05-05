function Bubble (x, y) {
  this.x = x;
  this.y = y;
  this.lifespan = 255;
  
  this.display = function () {
    // stroke (255 );
    noStroke();
    this.col = color(255, this.lifespan);
    fill (this.col);
    ellipse (this.x, this.y, 48, 48);
  };

  this.isFinished = function(){
    if(this.lifespan < 0){
      return true;
    }else{
      return false;
    }
  }

  this.update = function () {
    this.x = this.x + random (-1, 1);
    this.y = this.y + random (-1, 1);
    this.lifespan--;
  };
}