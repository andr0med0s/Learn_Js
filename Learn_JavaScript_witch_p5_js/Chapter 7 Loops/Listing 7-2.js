//Создание эллипсов с помощью цикла for
function setup() {
 createCanvas(800, 300);
}
function draw() {
 background(1, 75, 100);
 // свойства круга
 fill(237, 34, 93);
 noStroke();
 for (let i=0; i<10; i = i+1) {
 ellipse(0, 0, 50, 50);
 }
}