// let s; // для создания демо объекта s = new Star(); и вызова его функций
let outer = [];//внешнее кольцо
// let outerNum = 12;// количество звёзд во внешнем кольце
let outerNum = 15;
let outerAngles = []; //массив для всех углов звезд 

let inner = [];//внутреннее кольцо
// let innerNum = 3;// количество звёзд во внутреннем кольце
let innerNum = 5;
let innerAngles = []; //массив для всех углов звезд 
let delta = 0.03; // коэффицент изменения угла
let delta2 = 0.01; 

function setup() {
    createCanvas(400, 400);
    // s = new Star();
    for (let i = 0; i < outerNum; i++) {

      outerAngles[i] = (TWO_PI/outerNum) * i; // вычисляем углы
      // outer[i] = new Star();
      // outer[i] = new Star(outerAngles[i]); // передаем углы звездному объекту
      outer[i] = new Star(outerAngles[i], false); // передаем значение false потому что это внутренние звезды
      
    }

    for (let i = 0; i < innerNum; i++) {
      
      innerAngles[i] = (TWO_PI/innerNum) * i; // вычисляем углы
      // outer[i] = new Star();
      // outer[i] = new Star(outerAngles[i]); // передаем углы звездному объекту
      inner[i] = new Star(innerAngles[i], true); // передаем значение false потому что это внутренние звезды
      
    }
}

function draw() {
    background(220);
    translate(width/2, height/2);
    // s.update();
    // s.display(); 
    for (let i = 0; i<outerNum; i++){
      outer[i].angle += delta2;
      outer[i].update();
      outer[i].display();
    }   
    
    for (let i = 0; i<innerNum; i++){
      inner[i].angle += delta;
      inner[i].update();
      inner[i].display();
    }

    for (let i = 0; i<outerNum; i++){
      for (let j = 0; j<innerNum; j++){
        line(outer[i].x, outer[i].y, inner[j].x, inner[j].y);
    }
}
}