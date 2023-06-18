fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=f783fed645b52587e766826a7b8780d1')
  .then(function (resp) { return resp.json()}) //Convert data to JSON
  .then(function (data) {
    console.log(data);
    // document.querySelector('.package-name').innerHTML = data.name;
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    // document.querySelector('.features li').innerHTML = '<img src="https://openweathermap.org/img/wn/' +data.weather[0]['icon']+ '@2x.png">';
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
  })
  .catch(function (){
    //catch any errors
  }); 