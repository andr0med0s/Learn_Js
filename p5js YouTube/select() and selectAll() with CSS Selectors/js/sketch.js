let paragraphs ;
function setup(){
  createCanvas(100, 100);
  background(0);

  // createP("Здесь случайное число" + random(5, 10));

  // paragraph = select('#unicorn'); //выбирается конкретный элемент
  // paragraph = select('p');// select выбирает первый элемент из потока
  // paragraphs = selectAll('p');
  paragraphs = selectAll('.rainbow');
  for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].style('font-size', '24pt');
  }
  paragraphs.mouseOut(resetBackgrount);
  // paragraph.style('background-color', '#F0F');

  let button = select('#button');
  button.mousePressed(canvasBg);
}

function canvasBg() {
  background(random(255));
}

function changeBackground (){
  paragraphs.style('background-color', '#F0F');
}

function resetBackgrount(){
  paragraphs.style('background-color', '#FFF');
}

function draw() {

}