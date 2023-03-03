// let nums = [100, 25, 46, 72];
let words = ["rainbow", "heart", "purple", "friendship", "love", "andromedoz"];

// let num = 23;
let index = 0;

function setup () {
  createCanvas (400, 400);
}

function draw () {
  background(0);

  // ellipse(100, 200, num, num);

  // ellipse(200, 200, nums[2], num[2]);

  fill(255);
  textSize(32);
  // text("rainbow", 12, 200);
  // text(words[2], 12, 200);
  text(words[index], 12, 200);
}

function mousePressed(){
  index = index + 1;

  // if (index == 4){
    if (index == words.length){
    index = 0;
  }
}
