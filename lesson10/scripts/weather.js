const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7500&lon=6.6377&appid=5c267d8cd95cc207aa4443050642a060&units=imperial';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    const formTemp = data.main.temp.toFixed(0);
    currentTemp.innerHTML = '${formTemp} &deg;F';

    data.weather.forEach((weatherEvent) => {
        const iconsrc = 'https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png'
        let desc = weatherEvent.description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', 'desc');
        captionDesc.textContent = '${desc}';
    });
}

apiFetch();