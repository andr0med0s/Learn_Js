let x = 0;
let spaceData;
function setup () {
  createCanvas (200, 200);
  loadJSON ('http://api.open-notify.org/astros.json', gotData, 'jsonp');
}

function gotData (data) {
  // console.log(data);
  // background(0);
  // for(let i = 0; i < data.number; i++){
  //       fill(255);
  //       ellipse(random(width), random(height), 16, 16);
  //     }
  spaceData = data;
}

function draw () {
  background (0);
  stroke (255);
  line (x, 0, x, height);
  x++;
  if (x > width) {
    x = 0;
  }
  if (spaceData) {
    randomSeed(4);
    for (let i = 0; i < spaceData.number; i++) {
      fill (255);
      ellipse (random (width), random (height), 16, 16);
    }
  }
}
