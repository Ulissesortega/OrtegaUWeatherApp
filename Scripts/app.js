// html IDs ========================================================================

let cityInput = document.getElementById("cityInput")
let Btn1 = document.getElementById("Btn1")
let currentcity = document.getElementById("currentcity")


//Monday
let temp = document.getElementById("temp")
let max = document.getElementById("max")
let min = document.getElementById("min")

//Tuesday
let temptuesday = document.getElementById("temptuesday")
let maxtuesday = document.getElementById("maxtuesday")
let mintuesday = document.getElementById("mintuesday")

//Wednesday

let tempwednesday = document.getElementById("tempwednesday")
let maxwednesday = document.getElementById("maxwednesday")
let minwednesday = document.getElementById("minwednesday")

//Thursday

let tempthursday = document.getElementById("tempthursday")
let maxthursday = document.getElementById("maxthursday")
let minthursday = document.getElementById("minthursday")

//Friday

let tempfriday = document.getElementById("tempfriday")
let maxfriday = document.getElementById("maxfriday")
let minfriday = document.getElementById("minfriday")





Btn1.addEventListener("click", function(){
  AsyncGetData1(cityInput.value)
  AsyncGetData5(cityInput.value)
})




const date = new Date();
let dategoeshere = document.getElementById("dategoeshere")
dategoeshere.innerText = date



let API_KEY = '8e02b0db85b4a729b31b20a4e496b448';
let weatherApi;
let forecastApi;
let cityNameApi;
let weatherApi3;
let weatherApi4;
let forecastApi4;
let forecastApi8;

let latitude;
let longitude;
let initiallocation;
let currentweather;
let currentmax;
let currentmin;
let currentcityname;
let citynamebtn;










// User Geo Location==============================================================================================
const successCallback = (position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);    
    latitude = position.coords.latitude
    longitude = position.coords.longitude        
    AsyncGetData3(latitude, longitude)
    AsyncGetData4(latitude, longitude)
  };
  
  const errorCallback = (error) => {
    console.log(error);
    alert("Please click Allow on Geolocation otherwise this app would not work")    
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

// Intial City Weather ===================================================================
async function AsyncGetData3(latitude, longitude){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  weatherApi3 = data

  

  initiallocation = weatherApi3.name
  currentweather = weatherApi3.main.feels_like
  currentmax = weatherApi3.main.temp_max
  currentmin = weatherApi3.main.temp_min
  currentcityname = weatherApi3.name

  temp.innerText = "Current " + currentweather
  max.innerText = "Max " + currentmax
  min.innerText = "Min " + currentmin  
  currentcity.innerText = currentcityname
  
}

// Initial City Forecast ===================================================================
async function AsyncGetData4(latitude, longitude){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  weatherApi4 = data
  console.log(weatherApi4);
  
  //Monday
  mondayweather = weatherApi4.list[8].main.temp
  mondaymax = weatherApi4.list[8].main.temp_max
  mondaymin = weatherApi4.list[8].main.temp_min
  
  
  console.log("monday " + mondaymin);


  // Tuesday api info
  tuesdayweather = weatherApi4.list[16].main.temp
  tuesdaymax = weatherApi4.list[16].main.temp_max
  tuesdaymin = weatherApi4.list[16].main.temp_min
  
  //info sent to html
  temptuesday.innerText = weatherApi4.list[16].main.temp 
  maxtuesday.innerText = weatherApi4.list[16].main.temp_max
  mintuesday.innerText = weatherApi4.list[16].main.temp_min
  
  
    // wednesday list
  wednesdayweather = weatherApi4.list[24].main.temp
  wednesdaymax = weatherApi4.list[24].main.temp_max
  wednesdaymin = weatherApi4.list[24].main.temp_min
  
  //info sent to html
  tempwednesday.innerText = weatherApi4.list[24].main.temp
  maxwednesday.innerText = weatherApi4.list[24].main.temp_max
  minwednesday.innerText = weatherApi4.list[24].main.temp_min

   
  // thursday list
  thursdayweather = weatherApi4.list[32].main.temp
  thursdaymax = weatherApi4.list[32].main.temp_max
  thursdaymin = weatherApi4.list[32].main.temp_min
  
  //info sent to html
  tempthursday.innerText = weatherApi4.list[32].main.temp
  maxthursday.innerText = weatherApi4.list[32].main.temp_max
  minthursday.innerText = weatherApi4.list[32].main.temp_min


    
  // Friday
  fridayweather = weatherApi4.list[0].main.temp
  fridaymax = weatherApi4.list[0].main.temp_max
  fridaymin = weatherApi4.list[0].main.temp_min

  //info sent to html
  tempfriday.innerText = weatherApi4.list[0].main.temp
  maxfriday.innerText = weatherApi4.list[0].main.temp_max
  minfriday.innerText = weatherApi4.list[0].main.temp_min
  
  

}




// ==============================================================================================================

async function AsyncGetData(currentcityname){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentcityname}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  weatherApi = data
  console.log(weatherApi);
  
  
}


//City Today Weather from the textbox

async function AsyncGetData1(city){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  forecastApi = data
  console.log(forecastApi);
}

//City Forecast Weather from the textbox

async function AsyncGetData5(city){
  const promise = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8e02b0db85b4a729b31b20a4e496b448&units=imperial`)
  const data = await promise.json();
  forecastApi8 = data
  console.log(forecastApi8);


mondayweather = forecastApi8.list[16].main.temp
mondaydaymax = forecastApi8.list[16].main.temp_max
mondayaymin = forecastApi8.list[16].main.temp_min
  
//info sent to html
temptuesday.innerText = forecastApi8.list[16].main.temp 
maxtuesday.innerText = forecastApi8.list[16].main.temp_max
mintuesday.innerText = forecastApi8.list[16].main.temp_min



// Tuesday api info
tuesdayweather = forecastApi8.list[16].main.temp
tuesdaymax = forecastApi8.list[16].main.temp_max
tuesdaymin = forecastApi8.list[16].main.temp_min

//info sent to html
temptuesday.innerText = forecastApi8.list[16].main.temp 
maxtuesday.innerText = forecastApi8.list[16].main.temp_max
mintuesday.innerText = forecastApi8.list[16].main.temp_min

// wednesday list
wednesdayweather = forecastApi8.list[24].main.temp
wednesdaymax = forecastApi8.list[24].main.temp_max
wednesdaymin = forecastApi8.list[24].main.temp_min

//info sent to html
tempwednesday.innerText = forecastApi8.list[24].main.temp
maxwednesday.innerText = forecastApi8.list[24].main.temp_max
minwednesday.innerText = forecastApi8.list[24].main.temp_min

 
// thursday list
thursdayweather = forecastApi8.list[32].main.temp
thursdaymax = forecastApi8.list[32].main.temp_max
thursdaymin = forecastApi8.list[32].main.temp_min

//info sent to html
tempthursday.innerText = forecastApi8.list[32].main.temp
maxthursday.innerText = forecastApi8.list[32].main.temp_max
minthursday.innerText = forecastApi8.list[32].main.temp_min


  
// Friday
fridayweather = forecastApi8.list[0].main.temp
fridaymax = forecastApi8.list[0].main.temp_max
fridaymin = forecastApi8.list[0].main.temp_min

//info sent to html
tempfriday.innerText = forecastApi8.list[0].main.temp
maxfriday.innerText = forecastApi8.list[0].main.temp_max
minfriday.innerText = forecastApi8.list[0].main.temp_min

//getting the city name from the button
citynamebtn = forecastApi8.city.name
//sending the name of the city from the button to the html
currentcity.innerText = citynamebtn




}


