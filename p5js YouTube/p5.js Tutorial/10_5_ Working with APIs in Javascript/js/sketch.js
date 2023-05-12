let weather;

function setup() {
  createCanvas(400, 200);
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f783fed645b52587e766826a7b8780d1&units=metric', gotData);
}

function gotData(data){
  // console.log(data);
  weather = data;
}

function draw() {
  background(0);
  if(weather){
    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);
  }
}