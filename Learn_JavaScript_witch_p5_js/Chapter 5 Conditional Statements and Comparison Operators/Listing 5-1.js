// вывод частоты кадров в консоль
function setup() {
    createCanvas(400, 400);
    // noLoop(); // --- эта функция приведет к тому что draw будет вызвана только один раз
   }
   function draw() {
    background(220);
    console.log(frameRate());
   }