const API_key = `83f8141102e36dbd1a00c631a8b3bcd5`;
const loadWeatherApi = () =>{
    const city = document.getElementById('city-name').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}`
    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
}