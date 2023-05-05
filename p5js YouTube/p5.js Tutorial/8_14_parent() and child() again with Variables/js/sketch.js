// let p;

let images = [];

function setup () {
  noCanvas ();
  for (let i = 0; i < 5; i++) {
    p = createP ('This is a link: ');
    p.style ('background-color', '#CCC');
    p.style ('padding', '24px');

    let a = createA ('#', 'flower');
    a.mousePressed (addPhoto);

    a.parent (p);
  }

  let button = select ('#clear');
  button.mousePressed (clearStuff);
}

function clearStuff () {
  for (let i = 0; i < images.length; i++) {
    images[i].remove ();
  }
  images = [];
}

function addPhoto () {
  let img = createImg ('flower.png');
  images.push (img);

  img.size (100, 100);
  // img.parent(p);
  // p.child(img); равнозначно img.parent(p);

  let paragraph = this.parent ();

  //  img.parent(this );
  img.parent (paragraph);
}

function draw () {}
