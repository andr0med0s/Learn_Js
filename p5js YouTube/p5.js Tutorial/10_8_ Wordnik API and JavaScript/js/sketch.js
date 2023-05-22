
let url1 = "https://api.wordnik.com/v4/word.json/";
let word = "rainbow";
let url2 = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=nrttxkafbb5m3gad4d3uzz72l05mvm4qta94y58f83ik4mh2r";

let link ;

function setup(){
  noCanvas(); 
  link = createA('#', word);
  link.mousePressed(askWordnik);
  
}

function askWordnik(){
  loadJSON(url1 + word + url2, gotData); 

}

function gotData(data){
  let index1 = floor(random(0, data.length));
  let index2 = floor(random(0, data[index1].words.length));
  // word = data[0].words[0];
  word = data[index1].words[index2];
  link.html(word);
  // console.log(data[1].words[0]);
}

// function draw () {
 
// }