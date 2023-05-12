let flower;

function preload(){
  flower = loadJSON("flower.json");

}

function setup(){
  createCanvas(400, 400);
  // flower = loadJSON("flower.json");
  // {
  //   name: "sunflower",
  //   col: color(200, 200, 0) 
  // } 
}

function draw(){
  background(0);

  // fill(flower.col);
  fill(flower.r, flower.g, flower.b );
  text(flower.name, 10,50);
}
