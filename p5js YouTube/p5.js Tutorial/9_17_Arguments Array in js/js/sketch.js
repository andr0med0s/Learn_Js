// let p;
let particles = [];

function setup () {
  createCanvas (200, 200);
  // p = new Particle();
  particles[0] = new Particle ();
  //   let val = sum (5, 15);
  //   console.log (val);
  particles[1] = new Particle (150, 50);
  let v = createVector (150, 100);
  particles[2] = new Particle (v);
  particles[3] = new Particle ('100,150');
}

function draw () {
  background (0);

  for (let i = 0; i < particles.length; i++) {
    // p.show ();
    particles[i].show ();
  }
  //   p.show();
}

// function Particle () {
function Particle (a, b) {
  if (a instanceof p5.Vector) {
    this.x = a.x;
    this.y = a.y;
    // } else if (a instanceof String){
  } else if (typeof (a) === 'string') {
    // console.log (a);
    let nums = a.split(',');
    this.x = Number(nums[0]);
    this.y = Number(nums[1]);
  } else {
    this.x = a || 100;
    this.y = b || 100;
  }

  this.pos = createVector (width / 2, height / 2);

  this.show = function () {
    fill (255);
    // ellipse (this.pos.x, this.pos.y, 16, 16);
    ellipse (this.x, this.y, 16, 16);
  };
}

/*
function sum (a, b) { // массив аргументов.... function sum (a, b, ....)
//   console.log (b);
//   return a + b;

    if (b) {
        return a + b;
    // } else {
    //     return a;
    // }
    } else if (a) {
        return a;
    }else {
        return 0;
    }
}*/

/*
function sum (a, b) {
    console.log(arguments)

}
*/

/*
// function sum(){
// function sum(a){
function sum(arr){

    if (arr instanceof Array) {
        let val = 0;
        // for(let i = 0; i < arguments.length; i++) {
        for(let i = 0; i < arr.length; i++) {
            // val += arguments[i];
            val += arr[i];
        }
        return val;
    }

    let val = 0;
    for(let i = 0; i < arguments.length; i++) {
        val += arguments[i];
    }
    return val;
    // return val + a;
}
*/
