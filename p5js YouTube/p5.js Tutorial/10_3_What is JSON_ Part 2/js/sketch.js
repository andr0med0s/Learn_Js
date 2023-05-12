let data;

function preload () {
  data = loadJSON ('birds.json');
}

function setup () {
  noCanvas ();
  // createCanvas(400, 400);
  // let bird = data.birds[1].members[2];

  let birds = data.birds;

  for(let i = 0; i < birds.length; i++) {
    createElement('h1', birds[i].family);
    let members = birds[i].members;
    for (var j = 0; j < members.length; j++){
      createDiv(members[j]);
    }
  }

  // createP(bird);
}


function draw () {}
