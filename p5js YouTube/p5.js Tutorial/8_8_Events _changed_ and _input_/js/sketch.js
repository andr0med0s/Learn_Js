let textbox;
let slider;
let paragraph;

function setup(){
  noCanvas();
  textbox = createInput('enter text');
  slider = createSlider(10, 64, 16);
  paragraph = createP('starting text');

  // textbox.changed(doSomething);
  textbox.input(updateText);
  slider.input(updateSize);

}

function updateText(){
  paragraph.html(textbox.value());
}

function updateSize(){
  paragraph.style("font-size", slider.value() + "pt" );
}