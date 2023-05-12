let lineX = 0;
let url = 'http://api.open-notify.org/iss-now.json';

let issX = 0;
let issY = 0;

function setup(){
  createCanvas(600,400);

  setInterval(askIss, 1000);
  // loadJSON(url, gotData, 'jsonp');
}

function askIss(){
  loadJSON(url, gotData, 'jsonp');
}

function gotData(data) {
  // console.log(data.iss_position.latitude);
  // issX = data.iss_position.latitude;
  // issY = data.iss_position.longitude;
  let lat = data.iss_position.latitude;
  let long = data.iss_position.longitude;
  issX = map(lat, -90, 90, 0, width);
  issY = map(long, -90, 90, 0, height);
}

function draw () {
  background(51);

  fill(255);
  ellipse(issX, issY, 24, 24);

  stroke(255);
  line(lineX, 0, lineX, height);
  lineX = lineX + 5;
  if(lineX > width) {
    lineX = 0;
  }
}