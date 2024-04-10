// let gravity = 0.1; удаление

function Particle(x,y) {
    this.x = x;
    this.y = y;

    // this.yspeed = 0; удаление

    this.history = []; // новое свойство у объекта

    this.update = function() {
        this.x += random(-10, 10);
        this.y += random(-10, 10);
        // this.y += this.yspeed;
        // this.yspeed += gravity; удаление
/*удаление
        // if (this.y > height) {
        //     this.y = height;
        //     this.yspeed *= -0.9;
        // }
*/

        for (let i = 0; i < this.history.length; i++) {
            this.history[i].x += random(-2, 2);
            this.history[i].y += random(-2, 2);
            
        }

        let v = createVector(this.x, this.y);
        // this.history.push(this.x); // берется текущее значение x и вставляется в массив
        // this.history.push(this.y); // берется текущее значение y и вставляется в массив
        // this.history.push(this.x, this.y); // берется текущее значение x и y , f затем  вставляется в массив

        if(this.history.length>100){
            this.history.splice(0, 1) // сращивание массивов если больше 25 (индекс по которому что-то удалить и количество элементов которые удалить)
        }

        this.history.push(v); // берется текущее значение x и y , f затем  вставляется в массив
        // console.log(this.history);
        console.log(this.history.length);
    }

    this.show = function () {
        stroke(0);
        fill(0, 150);
        ellipse(this.x, this.y, 24, 24)

        noFill();
        beginShape(); // начальная форма в начале цикла
        for (let i = 0; i < this.history.length; i++) {
            let pos = this.history[i];
            // fill(random(255));
            // // ellipse(pos.x, pos.y, 8, 8);
            // ellipse(pos.x, pos.y, i, i);

            vertex(pos.x, pos.y);
        }

        endShape(); // конечная форма в конце цикла
    }
}

