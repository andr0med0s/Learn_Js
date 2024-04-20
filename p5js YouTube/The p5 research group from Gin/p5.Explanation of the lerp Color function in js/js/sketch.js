function setup() {
    createCanvas(w=800, w);
    colorMode(HSB);

    let color1 = color(random(360), random(100 ), random(80, 100)); //цвет, насыщенность, яркость
    let color2 = color(random(360), random(100 ), random(80, 100));

    background(0);
    noFill();

    colorMode(RGB )
    for (let i = 0; i < 300; i++) {
        let x = random(w);
        let y = random(w);
        // let set_color = lerpColor(color1, color2, x/w); 
        let set_color = lerpColor(color1, color2, x/w+random(-0.3,0.3)); //горизонтальный градиент с рандомизированной глубиной проникновения цветов друг в друга

        stroke(set_color);

        if(random() < 0.5){
            rect(x, y, random(w*0.1));
            // rect(x, y, random(w*0.25), random(w * 0.05));
        } else {
            // ellipse(x, y, random(w*0.1))
            ellipse(x, y, random(w*0.25), random(w * 0.05));
        }
    }
}