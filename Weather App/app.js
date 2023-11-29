//  let a = new Promise((resolve, reject) => {
//   fetch ("https://api.openweathermap.org/data/2.5/weather?appid=1419554aaf4b164737467dbb5e1ce816")
//   .then(res => res.json())
//   .then(res => console.log("res>", res))
//   .catch(err => console.log("err>", err))
//  })

//  a
//  .then(res => console.log("res--->",res))
//  .catch(err => console.log("err--->",err))


let citi = document.getElementById("city");
let visibility = document.getElementById("visibility");
let feelLike = document.getElementById("feellike");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let temp = document.getElementById("temp");
let minmax = document.getElementById("minmax")
let mode = document.getElementById("mode");

function city() {

  console.log(citi.value || "karachi")

  let getValue = new Promise((resolve, reject) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citi.value || "Karachi"}&appid=1419554aaf4b164737467dbb5e1ce816`)
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(err => reject(err))
  })
  getValue
    .then(res => {
      console.log(res);
      humidity.innerHTML = res.main.humidity;
      feelLike.innerHTML = `${Math.round(res.main.feels_like - 273.15)}°C`;
      wind.innerHTML = res.wind.speed;
      temp.innerHTML = `${Math.round(res.main.temp - 273.15)}°C`;
      minmax.innerHTML = `Max:${Math.round(res.main.temp_max - 273.15)}°C Min:${Math.round(res.main.temp_min - 273.15)}°C`;
      visibility.innerHTML = res.visibility / 1000;
      mode.innerHTML = res.weather[0].main
    })
    .catch(err => console.log(err))



}







