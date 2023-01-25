let API_KEY = '8e02b0db85b4a729b31b20a4e496b448';
let weatherApi;
let forecastApi;
let cityNameApi;
let weatherApi3;
let cityInput = document.getElementById("cityInput")
const date = new Date();
let latitude;
let longitude;
let dategoeshere = document.getElementById("dategoeshere")
dategoeshere.innerText = date


// User Geo Location==============================================================================================
const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);    
    latitude = position.coords.latitude
    longitude = position.coords.longitude
    AsyncGetData3(latitude, longitude, API_KEY)
  };
  
  const errorCallback = (error) => {
    console.log(error);
    alert("Please click Allow on Geolocation otherwise this app would not work")    
  };  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

async function AsyncGetData3(latitude, longitude, API_KEY){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`)
  const data = await promise.json();
  weatherApi3 = data    
}








// ==============================================================================================================


// async function AsyncGetData(){
//   const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial")
//   const data = await promise.json();
//   weatherApi = data
//   console.log(weatherApi);
//   let lat = console.log(weatherApi.coord.lat);
//   let lon = console.log(weatherApi.coord.lon);
// }

//AsyncGetData()

// ==============================================================================================================

// async function AsyncGetData1(){
//   const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockton&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial")
//   const data = await promise.json();
//   forecastApi = data
//   console.log(forecastApi)
// }

//AsyncGetData1()

// ==============================================================================================================
