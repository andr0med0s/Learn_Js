// let num = "10101001";


let byte = [];
let decimalP;
let shiftButton;

function mousePressed(){
    for(let i = 0; i < byte.length; i++){
        byte[i].toggle(mouseX, mouseY);
    }
}

function setup() {
    createCanvas(400, 100);
    decimalP = createDiv('');
    shiftButton = createButton('>>');
    shiftButton.mousePressed(shiftBits);

    let w = width / 8;
    for(let i = 0; i < 8; i++){
        byte[i] = new Bit(w/2 + i * w, 50, w-4);
        byte[i].setState(1);
        
    }

}

function shiftBits(){
    let num = getBinaryString();
    let val = binaryToDecimal(num);
    val = val >> 1;
    num = decimalToBinary(val);
    for(let i = 0; i < 8; i++){
        byte[i].setState(num.charAt(i));
    }
}

function getBinaryString(){
    num = '';
    for(let i = 0; i < byte.length; i++){
        byte[i].show();
        num += byte[i].state ? '1' : '0';
    }
    return num;
}

function draw() {
    background(51);

    let num = getBinaryString();

    decimalP.html(binaryToDecimal(num));
}

function decimalToBinary(num){
    let bits = '';
    let rem = num;
    for(let i = 7; i >= 0; i--){
        let divisor = pow(2, i);
        let bitValue = floor(rem / divisor);
        bits += bitValue;
        rem = rem % divisor;
    }
    return bits;
}

function binaryToDecimal(val){
    let sum = 0; 
    for(let i = 0; i < val.length; i++){
        let bit = val.charAt(val.length - i - 1);
        sum += parseInt(bit) * pow(2, i);
    }
    // console.log(sum);
    return sum;
}