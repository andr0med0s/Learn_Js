let paragraphs;

let paragraph;

function setup(){
  createCanvas(100, 100);
  background(0);

  paragraph = select('#unicorn');
  // paragraph.mouseOver(highlight);
  // paragraph.mouseOut(unhighlight);
  
  for (let i = 0; i < 100; i++){
    let par = createP('rainbow!!');
    par.position(random(500), random(500));
  }
  
  paragraphs= selectAll('p');
  for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].mouseOver(highlight);
    paragraphs[i].mouseOut(unhighlight);
  }

}

// function highlight (){
//   paragraph.style('padding','16pt');
//   paragraph.style('background-color', '#F0F'); 
// }

// function unhighlight (){
//   paragraph.style('padding','0pt');
//   paragraph.style('background-color', '#FFF');
// }

function highlight (){
  this.style('padding','16pt');
  this.style('background-color', '#F0F'); 
}

function unhighlight (){
  this.style('padding','0pt');
  this.style('background-color', '#FFF');
}


function draw() {

}