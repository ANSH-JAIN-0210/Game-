document.querySelector("#myForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    let cityName = document.querySelector("#cityName").value;
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.main && result.main.temp) {
            document.querySelector("#result").textContent = `The temperature in ${cityName} is ${result.main.temp}°C`;
        } else {
            throw new Error('Temperature data is not available');
        }
    } catch (error) {
        console.error('Error:', error.message);
        document.querySelector("#result").textContent = `An error occurred: ${error.message}. Please try again.`;
    }
});
