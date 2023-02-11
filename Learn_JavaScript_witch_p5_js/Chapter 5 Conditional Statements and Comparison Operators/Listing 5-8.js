// Рефакторинг нашего кода
let num;
function setup () {
  num = 2;
  createCanvas (800, 300);
  textAlign (CENTER, CENTER);
  }
function draw () {
  background (220);
  fill (237, 34, 93);
  textSize (48);
  // if (num === 1) {
  //   //этот код выполняется, только если число равно 1.
  //   text ('TRUE', width / 2, height / 2);
  // } else {
  //   //этот код выполняется, только если число равно 1.
  //   text ('FALSE', width / 2, height / 2);
  // }
  if (num === 1) {
    value = 'TRUE';
    } else {
    value = 'FALSE'
    }
    text(value, width/2, height/2);
}
