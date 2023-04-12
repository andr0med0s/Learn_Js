let bgcolor;
let button;
let txt;

function setup () {
  canvas = createCanvas (200, 200);
  bgcolor = color (51);
  txt = createP ('какой-то текст');
  txt.mouseOver(changeStyle);
  txt.mouseOut(revertStyle);

  // txt.style("background-color","pink");
  button = createButton ('go');
  // button.mousePressed(changeStyle);
}

function changeStyle(){
  txt.style("background-color","pink");
  txt.style("padding" , "24px");
}

function revertStyle(){
  txt.style("background-color","purple");
  txt.style("padding" , "8px");
}

function draw () {
  background (bgcolor);
  fill (255, 0, 175);
  ellipse (100, 100, 50, 50);
}
