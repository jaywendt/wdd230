const api = "11b6904a19f41725a5f6626974668ff4";
const lat = 38.82107;
const lon = -91.14403;

const URLweather = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${api}';

async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayWeatherResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
fetchWeather(URLweather);

function displayWeatherResults(data) {
    const currentTemp = document.querySelector(".currentTemp");

    const captionDesc = document.querySelector("#weatherDesc");
    const humidity = document.querySelector("#humidity");

    const weatherIcon = document.createElement("img");
    currentTemp.appendChild(weatherIcon);

    const temp = document.createElement("div");
    temp.setAttribute("id", "temp");
    currentTemp.appendChild(temp);

    location.innerHTML 
}