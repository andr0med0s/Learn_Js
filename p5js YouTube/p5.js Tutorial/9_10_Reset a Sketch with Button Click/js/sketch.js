let vertices = [];

function setup () {
  createCanvas (640, 360);
  
  resetSketch ();
  
  // for (let i = 0; i < 20; i++) {
  //     let v = createVector(random(width),random(height));
  //   vertices.push(v);
  //   }
    
    // createButton("Reset");
    let button = createButton ('Reset');
    button.mousePressed (resetSketch);
  }
  
  function resetSketch () {
    for (let i = 0; i < 11; i++) {
      let v = createVector (random (width), random (height));
      vertices.pop (v);
    }

    for (let i = 0; i < 10; i++) {
      let v = createVector (random (width), random (height));
      vertices.push (v);
    }
  
}

// function mouseClicked() {
//   let v = createVector (mouseX, mouseY);
//   vertices.push (v);
// }

function draw () {
  background (51);
  let reached = []; // массив достигнутых вершин
  let unreached = []; // массив не достигнутых вершин

  for (let i = 0; i < vertices.length; i++) {
    unreached.push (vertices[i]);
  }

  reached.push (unreached[0]); // вставляем вершину  в массив достигнутых
  unreached.splice (0, 1); // удаляем вершину из списка не достигнутых

  while (unreached.length > 0) {
    let record = 100000; // максимальное значение расстояния удаленности вершин
    let rIndex; //индекс достигнутых вершин
    let uIndex; //индекс недостигнутых вершин

    for (let i = 0; i < reached.length; i++) {
      for (let j = 0; j < unreached.length; j++) {
        let v1 = reached[i];
        let v2 = unreached[j];
        let d = dist (v1.x, v1.y, v2.x, v2.y); // проверка каждого расстояния между каждой достигнутой вершиной
        // и каждой недостигнутой вершиной
        if (d < record) {
          record = d;
          rIndex = i;
          uIndex = j;
        } // проверены все достигнутые и найден самый короткий
      }
    }

    stroke (255);
    strokeWeight (2);
    line (
      reached[rIndex].x,
      reached[rIndex].y,
      unreached[uIndex].x,
      unreached[uIndex].y
    );

    reached.push (unreached[uIndex]);
    unreached.splice (uIndex, 1);
  }

  for (let i = 0; i < vertices.length; i++) {
    fill (255);
    stroke (255);
    ellipse (vertices[i].x, vertices[i].y, 16, 16);
  }
}
