function setup () {
  // let angle = degrees(PI/2);
  // console.log(angle);

  let km = milesToKm(26.3);
  console.log(km);
  let km2 = milesToKm(100);
  console.log(km2);
}

function milesToKm(miles){
  let km = miles * 1.6;
  return km;
}

function draw () {

}

