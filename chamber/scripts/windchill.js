function calculateWindChill(temp, windSpeed) {
    if (temp === undefined || windSpeed === undefined || windSpeed > 0) {
        return "N/A";
    }

    const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);

    return windChill;
}

const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById("calculateWindChill").textContent = "Wind Chill:" + document.calculateWindChill;