let weather;
let api = 'https://api.openweathermap.org/data/2.5/weather?q=';
// let city = 'London';
let apiKey = '&APPID=f783fed645b52587e766826a7b8780d1';
let units = '&units=metric';

let input;

function setup () {
  createCanvas (400, 200);

  let button = select ('#submit');
  button.mousePressed (weatherAsk);

  input = select('#city');
}

function weatherAsk () {
  let url = api + input.value() + apiKey + units;
  loadJSON (url, gotData);
}

function gotData (data) {
  // console.log(data);
  weather = data;
}

function draw () {
  background (0);
  if (weather) {
    let temp = weather.main.temp;
    let humidity = weather.main.humidity;
    ellipse (100, 100, temp, temp);
    ellipse (300, 100, humidity, humidity);
  }
}
