const apiKey = '39c19a114cfdc0a36efaeef555e9b847';

document.getElementById('checkButton').addEventListener('click', async () => {
    const placeName = document.getElementById('placeInput').value;
    const temperatureDisplay = document.getElementById('temperatureDisplay');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeName}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        const temperature = data.main.temp;

        temperatureDisplay.textContent = `Temperature in ${placeName}: ${temperature}°C`;
    } catch (error) {
        temperatureDisplay.textContent = 'Error fetching temperature data for given location';
    }
});
