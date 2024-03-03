/*
let x, y, w, h;

function setup () {
  createCanvas (600, 400);
  x = 0;
  y = 0;
  w = width;
  h = height;
}

function draw () {
  background (220);
  // rect (x, y, w, h);

  /* создаем функцию деления прямоугольника попалам и 
переносим это в функцию
  rect (x, y, w / 2, h);
  rect (x + w / 2, y, w / 2, h);
  *--------------------------------------------------
  // а затем вызовем эту функцию
  // divide (x, y, w, h);
  divide (x, y, w, h, 0);
}

// function divide (x, y, w, h) { введем новую переменную для предотвращения бесконечного цикла
function divide (x, y, w, h, count) {
  rect (x, y, w / 2, h);
  rect (x + w / 2, y, w / 2, h);

  if (count < 5) {
    // divide (x, y, w / 2, h);
    divide (x, y, w / 2, h, count + 1); //деление происходит в левой половине
    // от первоначального деления попалам
    divide (x + w / 2, y, w / 2, h, count + 1); //теперь деление идет и в обратную сторону
  }

  // divide (x, y, w / 2, h); приводит к бесконечному циклу
  //поместим в условие
}
*/

/*------------- создаем класс Tile и внедряем его---------------
let x, y, w, h;

function setup () {
  createCanvas (600, 400);
  x = 0;
  y = 0;
  w = width;
  h = height;
}

function draw () {
  background (220);

  divide (x, y, w, h, 0);
  noLoop ();
}

function divide (x, y, w, h, count) {
  let tiles = []; //создаем массив

  tiles.push (new Tile (x, y, w / 2, h)); //внедряем новые объекты в массив
  tiles.push (new Tile (x + w / 2, y, w / 2, h));
  print (tiles); //обнаруживаем что функция draw вызывает loop функции divide
  //поэтому вызовем в draw noLoop
  // rect (x, y, w / 2, h);
  // rect (x + w / 2, y, w / 2, h);

  //----- используем цикл ---рефракторинг---улучшим написанное
  /*  if (count < 0 ) {
    divide (x, y, w / 2, h, count + 1);
    divide (x + w / 2, y, w / 2, h, count + 1); 
  } else {
    tiles[0].display();
    tiles[1].display();
  }
*-------------------
  for (let i = 0; i < tiles.length; i++) {
    if (count < 5) {
      divide (tiles[i].x, tiles[i].y, tiles[i].w, tiles[i].h, count + 1);
    } else {
      tiles[i].display ();
    }
  }
}
*/

//---------------------------------

let x, y, w, h;
let direction = 0; //напрвление разделения

function setup () {
  createCanvas (800, 800);
  x = 0;
  y = 0;
  w = width;
  h = height;
}

function draw () {
  background (220);

  divide (x, y, w, h, 0, direction);
  noLoop ();
}

function divide (x, y, w, h, count, direction) {
  let tiles = [];

  // let split = 0.3; //это переменная заменяет на какое соотношение разделить
  let split = random(0.2, 0.8); 

  if (direction == 0) {
    // вертикальное разделение
    tiles.push (new Tile (x, y, w * split, h));
    tiles.push (new Tile (x + w * split, y, w - w * split, h));
    direction = 1;
  } else {
    // горизонтальное разделение
    tiles.push (new Tile (x, y, w, h * split));
    tiles.push (new Tile (x, y + h * split, w, h - h * split));
    direction = 0;
  }

  // tiles.push (new Tile (x, y, w / 2, h));
  // tiles.push (new Tile (x + w / 2, y, w / 2, h));

  // tiles.push (new Tile (x, y, w * split, h));
  // tiles.push (new Tile (x + w * split, y, w - w * split, h));

  print (tiles);

  for (let i = 0; i < tiles.length; i++) {
    if (count < 5) {
      // divide (tiles[i].x, tiles[i].y, tiles[i].w, tiles[i].h, count + 1);
      divide (tiles[i].x, tiles[i].y, tiles[i].w, tiles[i].h, count + 1, direction);
    } else {
      tiles[i].display ();
    }
  }
}
