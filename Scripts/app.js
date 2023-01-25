let API_KEY = '8e02b0db85b4a729b31b20a4e496b448';
let cityInput = document.getElementById("cityInput")
let weatherApi;
let forecastApi;

async function AsyncGetData(){
    const promise = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + "Stockton" + "&appid=" + API_KEY)
    const data = await promise.json();
    weatherApi = data
    console.log(weatherApi);


}

AsyncGetData()


async function AsyncGetData1(){
    const promise = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Stockton&appid=8e02b0db85b4a729b31b20a4e496b448")
    const data = await promise.json();
    forecastApi = data
    console.log(forecastApi)
}

AsyncGetData1()

function GetInfo(){
    const newName = document.getElementById("cityInput")
}
