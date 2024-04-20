function setup() {
    createCanvas(w=800, w);
}

function draw() {
    background(230);

    let color1 = color(255, 0, 0);
    // let color2 = color(0 , 255, 0);
    let color2 = color(0 , 0, 255);

    let set_color = lerpColor(color1, color2, mouseX/w )
    fill(set_color);
    rect(mouseX, mouseY, 100);
}