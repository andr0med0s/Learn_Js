
function setup () {
  let canvas = createCanvas (200, 200);
  background (0);

 
  // canvas.dragOver(highlight);
  // canvas.dragLeave(unhighlight);
  // canvas.drop(gotFile,unhighlight);
  canvas.drop(gotFile);
}

function gotFile(file){
  createP(file.name + " " + file.size);

  let img = createImg(file.data);
  // img.size(100,100);
  img.hide();

  image(img, 0, 0, 200, 200);
}

// function highlight(){
//   dropzone.style('background-color', '#ccc');
// }
// function unhighlight(){
//   dropzone.style('background-color', '#fff');
// }