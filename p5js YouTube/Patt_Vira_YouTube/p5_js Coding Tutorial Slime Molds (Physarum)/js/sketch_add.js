//дополнение пояснение по Pixel
//__________________

let d;

function setup () {
  createCanvas (100, 100);
  background (255, 0, 0);
  loadPixels ();
  d = pixelDensity ();
  // print(pixels);
  // print(pixelDensity());

  let x = 50;
  let y = 50;

  //   let index = y * width + x;
  let index = 4 * (d * y) * (d * width) + 4 * (d * x);

  pixels[index + 0] = 0;
  pixels[index + 1] = 0;
  pixels[index + 2] = 0;
  pixels[index + 3] = 255; //альфа значение самое яркое

  updatePixels();
}

function draw () {
  // background(220);
}

