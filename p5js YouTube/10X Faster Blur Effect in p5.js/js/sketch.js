let marbles = [];

function setup(){
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  for(let i = 0; i < 3; i++){
    let m = [];
    let numLimit = 10 - i*4;
    for(let j = 0; j < numLimit; j++){
      m.push(new Marble(30+50*i, 50+55*i, 20-i*10));
    }
    marbles.push(m);
    m = [];
  }
}

function draw(){
  background(247, 100, 8);

  for(let i = 0; i < marbles.length; i++){
    for(let j = 0; j < marbles[i].length; j++){
      marbles[i][j].show(marbles.length*3 - i*4);
      marbles[i][j].ascend();
      marbles[i][j].reposition();
    }
  }
  console.log('Frame rate: '+frameRate());
}
