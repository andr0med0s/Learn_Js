
function setup () {
  createCanvas (800, 300);
}
function draw () {
  background (1, 75, 100);
  
  noStroke ();
  for (let i = 0; i < width ; i = i + 90) {
    fill(map(i,0, width,0, 255));
    rect(i, 0, 100, 300);
  }
}