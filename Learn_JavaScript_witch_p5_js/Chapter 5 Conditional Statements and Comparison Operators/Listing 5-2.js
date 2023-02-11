//Визуализируйте частоту кадров
function setup() {
    createCanvas(800, 300);
    textAlign(CENTER, CENTER);// выравнивание текста по середине
   }
   function draw() {
    background(220);
    fill(237, 34, 93);
    textSize(36);
    // получить текущую частоту кадров в виде целого числа.
    let  fps = parseInt(frameRate(), 10);//преобразование десятичного числа в целое число
    text("frameRate: " + fps, width/2, height/2);
   }