const apiKey = `83f8141102e36dbd1a00c631a8b3bcd5`;
// load and fetch api
const loadWeatherApi = () =>{
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayWeather(data))
}
// set weather data function 
const setInnerText = (id,text) =>{
    document.getElementById(id).innerText = text;
}
// set weather data and icon
const displayWeather= (weatherData) =>{
    console.log(weatherData)
    setInnerText('city', weatherData.name)
    setInnerText('temperature', weatherData.main.temp)
    setInnerText('condition', weatherData.weather[0].main)
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
}