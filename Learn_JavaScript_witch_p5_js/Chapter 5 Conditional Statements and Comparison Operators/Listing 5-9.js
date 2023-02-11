// Использование блока else if
let num;
function setup () {
  num = 2;
  createCanvas (800, 300);
  textAlign (CENTER, CENTER);
  fill (237, 34, 93);
}
function draw () {
  var value;
  background (220);
  textSize (48);
  if (num === 1) {
    value = 'TRUE';
  } else if (num === 2) {
    value = 'STILL TRUE';
  } else if (num === 3) {
    value = 'YEP, TRUE';
  } else {
    value = 'FALSE';
  }
  text (value, width / 2, height / 2);
}
