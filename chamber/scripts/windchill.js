const temperature = document.querySelector('#temperature').textContent;
const windSpeed = document.querySelector('#wind-Speed').textContent;
const windChill = document.querySelector('wind-Chill');

const t = temperature * 9 / 5 + 32;
const w = 3.6 * windSpeed * 0.6213711922;

if (temp <= 50 && wind > 3) {
    const wind = 35.74 + 0.06215 * t - 35.75 * w ** 0.16 + 0.4275 * t * w ** 0.16;
    windChill.textContent = wind.toFixed(2);
} else {windChill.textContent = 'N/A';}