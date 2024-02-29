class Cell {
  constructor (x, y, w, h, row) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.row = row;
  }

//   display () {
  displayCell () {
    // if(j%2==0){
    //     line (i*w, j*h, i*w + w, j*h + h);
    //   } else {
    //     line (i * w + w, j * h, i * w, j * h + h);
    //   }
    if (this.row % 2 == 0) {
      line (this.x, this.y, this.x + this.w, this.y + this.h );
    } else {
      line (this.x + this.w, this.y, this.x , this.y + this.h);
    }
  }
}
