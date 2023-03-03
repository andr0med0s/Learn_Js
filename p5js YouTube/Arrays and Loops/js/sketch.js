let nums = [100, 25, 46, 72];

let num = 23;

function setup () {
  createCanvas (600, 400);
}

function draw () {
  background (0);

  for(let i = 0; i < nums.length; i++){
    // stroke(255);
    // noFill();
    // ellipse (100, 200, nums[i], num[i]);
    fill(51);
    ellipse (i*100+100, 200, nums[i], num[i]);
  }

  // ellipse (100, 200, nums[0], num[0]);
  // ellipse (200, 200, nums[1], num[1]);
  // ellipse (300, 200, nums[2], num[2]);
  // ellipse (400, 200, nums[3], num[3]);
}
