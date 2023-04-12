let canvas;
let h1;

let x = 100;
let y = 100;


function setup () {
  canvas = createCanvas (200, 200);
  canvas.position(400, 500)
  h1 = createElement('h1', 'Ожидайте...');
  // h1.position(400,600);
}

function mousePressed() {
  h1.html("Сейчас покажи число");
  createP(" Lorem ipsum dolor sit amet consectetur " + random(0, 10));
}

function draw () {
  // clear();
  background (200);
  fill (255, 0, 0);
  rect (x, y, 50, 50); //прямоуольник позиционируется относительно холста
  h1.position(x,y); // заголовок позиционируется относительно окна страницы
  x = x + random(-5, 5);
}
