let circles = [];

function setup () {
  createCanvas (640, 360);

  let protection = 0; //переменная для недопуска бесконечного цикла " защита "

  //   for (let i = 0; i < 25; ++i) { здесь отрисуются только те круги которые не пересекаются
  // while(circles.length <300){ //здесь цикл будет происходить до тех пор пока все 25 кругов не отрисуются
  //ВНИМАНИЕ! если количество кругов будет большим чем пространство для отображения цикл уйдет в бесконечность
  while (circles.length < 1000) {
    let circle = {
      // создаем объект
      x: random (width),
      y: random (height),
      //   r: 32,
    //   r: random (12, 36),
      r: random (6, 36),
    };

    let overlapping = false; // переменная для условия
    for (let j = 0; j < circles.length; j++) {
      // проверка , если все норм то добавить в массив
      let other = circles[j]; // другой круг
      let d = dist (circle.x, circle.y, other.x, other.y);
      if (d < circle.r + other.r) {
        //круги накладываются
        overlapping = true;
        break;
      }
    }

    // circles.push (circle);

    if (!overlapping) {
      circles.push (circle);
    }

    protection++;

    // if (protection > 10000) {
    if (protection > 50000) {
      break;
    }
    // простой способ выхода из бесконечного цикла
  }
  /*  
        let x = random(width);
        let y = random(height);
        let r = 48;
        
        // fill(255, 0, 150,100);
        // noStroke();
        // ellipse(x, y, r*2, r*2);
*/

  //разница в том что вместо простого рисования случайных кругов
  //создано 25 объектов circle помещенных в массив, a затем все 25 отображены на экране
  //теперь можно добавлять в массив не все круги!!

  for (let i = 0; i < circles.length; i++) {
    fill (255, 0, 150, 100);
    noStroke ();
    // ellipse (x, y, r * 2, r * 2);
    ellipse (circles[i].x, circles[i].y, circles[i].r * 2, circles[i].r * 2);
  }
}

function draw () {}
