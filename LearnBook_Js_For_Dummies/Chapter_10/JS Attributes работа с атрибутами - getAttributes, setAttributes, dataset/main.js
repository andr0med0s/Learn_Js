//dataset 
//getAttribute
//setAttribute
//attributes


//let div = document.querySelector('[some]');

// const getNum=document.querySelector('[myOwnAttr]');

//----------------------------
//dataset 
// const title = document.querySelector('#title');

// console.log(title);
// console.log(title.dataset.title);

//----------------------------
//getAttribute
// const href = document.querySelector('#link');
// href.getAttribute('href');
// href.setAttribute('href', 'http://ya.ru');

// console.log(href.getAttribute('href'));

//----------------------------
//attributes

const img = document.querySelector('.img');
const urlCar = 'https://i.pinimg.com/originals/c4/08/07/c408070e1df4fd15bca8ed4e15cff768.jpg';
img.onclick = () =>{
  img.setAttribute('src', urlCar);
  img.setAttribute('title', 'Car');
}

console.log(img.attributes)