//https://youtu.be/0wLtj5l6YX0

let img;

function preload(){
  img = loadImage('assets/test.png');
}

function setup (){
  img.resize(windowWidth, 0);         //масштабировать в размер окна
  createCanvas(img.width, img.height);//масштабировать в размер окна
  noLoop();
}

function draw(){
  image(img, 0, 0);

  // filter(GRAY);
  // filter(THRESHOLD, 0.5);
  // filter(INVERT);
  // filter(BLUR, 8);
  // filter(DILATE);
  // filter(DILATE);
  // filter(DILATE);
  // filter(DILATE);
  filter(ERODE);
  filter(ERODE);
  filter(ERODE);
  filter(ERODE);
}