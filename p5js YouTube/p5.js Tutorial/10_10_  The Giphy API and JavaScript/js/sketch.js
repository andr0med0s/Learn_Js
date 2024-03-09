let api = 'https://api.giphy.com/v1/gifs/search?';
let apiKey = '&api_key=oS9Bv1yqEgRh9GxaiPYCZN3zCSwRHwyW';
let query = '&q=andro';

function setup () {
  noCanvas ();
  let url = api + apiKey + query;
  loadJSON (url, gotData);
}

// function gotData(data) {
//   // console.log(data);
//   console.log(data.data[0].images.original.url);
// }

function gotData(giphy) {
  // createImg(giphy.data[0].images.original.url);
  for(let i = 0; i < giphy.data.length; i++){
    createImg(giphy.data[i].images.original.url);
  }
}


/*

https://api.giphy.com

/v1/gifs/search?

oS9Bv1yqEgRh9GxaiPYCZN3zCSwRHwyW
*/