class Star {
    // constructor(){
    constructor(angle, inner){
        this.inner = inner; // параметр для обращения к внутренней или внешней звезде 
        
        if (this.inner) {
            this.r = 75;
        } else {
            this.r = 150;
        }

        // this.r = 150;
        // this.angle = 0; // все отрисовывается на одних и тех же координатах
        this.angle = angle; //добавим параметр в конструктор
    }

    update(){
        this.x = this.r*cos(this.angle); //преобразование полярных координат в декартовы
        this.y = this.r*sin(this.angle);
    }

    display(){
        // ellipse(this.x, this.y, 10, 10);
    }
}