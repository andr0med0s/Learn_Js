let sliders = [];

let angle = 0;

function setup () {
  noCanvas();
  // createCanvas (200, 200);
  for(let i =0; i<100; i++ ){
    sliders[i] = createSlider (0, 255, 50);
  }
  sliders[0].input(adjustSliders);
}

// function draw () {

//   let offset = 0; 
//   for(let i =0; i<sliders.length  ; i++ ){
//     let x = map(sin(angle+offset),-1, 1, 0, 255); 
  
//     sliders[i].value (x);
//     offset+=0.25;
//   }}
 

//   angle += 0.1;
function adjustSliders(){
  for(let i =1; i<sliders.length  ; i++ ){
    sliders[i].value (sliders[0].value());
  }
}

