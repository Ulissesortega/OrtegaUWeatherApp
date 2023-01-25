// html IDs ========================================================================
let temp = document.getElementById("temp")
let max = document.getElementById("max")
let min = document.getElementById("min")
let cityInput = document.getElementById("cityInput")
let Btn1 = document.getElementById("Btn1")

Btn1.addEventListener("click", function(){
  AsyncGetData1(cityInput.value)
})



const date = new Date();
let dategoeshere = document.getElementById("dategoeshere")
dategoeshere.innerText = date

let API_KEY = '8e02b0db85b4a729b31b20a4e496b448';
let weatherApi;
let forecastApi;
let cityNameApi;
let weatherApi3;


let latitude;
let longitude;
let initiallocation;
let currentweather;
let currentmax;
let currentmin;




// User Geo Location==============================================================================================
const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);    
    latitude = position.coords.latitude
    longitude = position.coords.longitude        
    AsyncGetData3(latitude, longitude)
  };
  
  const errorCallback = (error) => {
    console.log(error);
    alert("Please click Allow on Geolocation otherwise this app would not work")    
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// The city name that I'm located ================================================================================
async function AsyncGetData3(latitude, longitude){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  weatherApi3 = data

  initiallocation = weatherApi3.name
  currentweather = weatherApi3.main.feels_like
  currentmax = weatherApi3.main.temp_max
  currentmin = weatherApi3.main.temp_min

  temp.innerText = currentweather
  max.innerText = currentmax
  min.innerText = currentmin  

  // AsyncGetData(initiallocation)
}

// ==============================================================================================================

async function AsyncGetData(initiallocation){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${initiallocation}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  weatherApi = data
  console.log(initiallocation);  
  console.log(weatherApi);      
}

// ==============================================================================================================

async function AsyncGetData1(city){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  forecastApi = data
  console.log(forecastApi)

  
}