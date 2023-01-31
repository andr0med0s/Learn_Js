let num = "10110110";
/*Нужно будет написать обработку ошибок*/

let byte = [];

function setup() {
    createCanvas(400, 100);
    binaryToDecimal(num);

    let w = width / 8;
    for(let i = 0; i < 8; i++){
        byte[i] = new Bit(w/2 + i * w, 50, w-4);
        byte[i].setState(num.charAt(i));
    }

}

function draw() {
    background(220);
    for(let i = 0; i < 8; i++){
        byte[i].show();
    }
}

function binaryToDecimal(val){
    let sum = 0; 
    for(let i = 0; i < val.length; i++){
        let bit = val.charAt(val.length - i - 1);
        sum += parseInt(bit * pow(2, i));
    }
    console.log(sum);
}