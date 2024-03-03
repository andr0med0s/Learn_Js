class Tile {
  constructor (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display () {
    let colors = [
      '#a1d69b',
      '#с8еае4',
      '#eca3bf',
      '#е97181',
      '#5с76Ь9',
      '#f8d8a6',
      '#17b1c1',
      '#саа7с8',
      '#fab580',
    ];
    fill(random(colors));
    strokeWeight (3);
    stroke (0);
    rect (this.x, this.y, this.w, this.h);
  }
}
