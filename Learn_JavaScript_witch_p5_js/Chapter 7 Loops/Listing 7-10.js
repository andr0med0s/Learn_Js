//. Применение различных анимаций к каждому кругу
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
    for (let j = 0; j < height / diameter; j = j + 1) {
      ellipse (
        diameter / 2 + i * diameter,
        diameter / 2 + j * diameter,
        // применение различных анимаций к каждому кругу
        diameter * noise (frameCount / 100 + j * 10000 + i * 10000),
        // применение различных анимаций к каждому кругу
        diameter * noise (frameCount / 100 + j * 10000 + i * 10000)
      );
    }
  }
}
