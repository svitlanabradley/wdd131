document.addEventListener("DOMContentLoaded", () => {
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const windChillElement = document.getElementById("windchill");


    // Retrieve values from the HTML
    const temp = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windElement.textContent);

    // Check if the conditions for a valid wind chill calculation are met
    if (temp <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temp, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = "N/A";
    }
});

function calculateWindChill(temp, windSpeed) {
    // Wind Chill formula for °C: 13.12 + 0.6215T - 11.37v^0.16 + 0.3965Tv^0.16
    return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(1); // Rounded to 1 decimal place
}