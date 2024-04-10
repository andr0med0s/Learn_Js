// let particle;

let particles = [];

function setup() {
    createCanvas(600, 600);
    // particle = new Particle(300, 300);
    // background(200);
}

function mousePressed(){
    particles.push(new Particle(mouseX, mouseY));
}

function draw() {
    background(200);
// particle.update();
// particle.show();

for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
}
// line(frameCount, 0, frameCount, height);
} 

