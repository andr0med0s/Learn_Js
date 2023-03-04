//Заполнение ширины экрана кругами
function setup () {
  createCanvas (800, 300);
}
function draw () {
  background (1, 75, 100);
  // свойства круга
  fill (237, 34, 93);
  noStroke ();
  let diameter = 50;
  for (let i = 0; i < width / diameter; i = i + 1) {
    ellipse (diameter / 2 + i * diameter, 0, diameter, diameter);
  }
}
