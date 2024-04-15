document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "833ad6c94281c669517ac10e263ea307";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

function displayWeather(data) {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <h5 class="mb-4">${data.name}, ${data.sys.country}</h5>
        <table class="table">
            <tbody>
                <tr>
                    <th scope="row">Temperature</th>
                    <td>${data.main.temp}°C</td>
                </tr>
                <tr>
                    <th scope="row">Feels Like</th>
                    <td>${data.main.feels_like}°C</td>
                </tr>
                <tr>
                    <th scope="row">Humidity</th>
                    <td>${data.main.humidity}%</td>
                </tr>
                <tr>
                    <th scope="row">Wind Speed</th>
                    <td>${data.wind.speed} m/s</td>
                </tr>
                <tr>
                    <th scope="row">Pressure</th>
                    <td>${data.main.pressure} hPa</td>
                </tr>
                <tr>
                    <th scope="row">Date & Time</th>
                    <td>${new Date(data.dt * 1000)}</td>
                </tr>
            </tbody>
        </table>
    `;
}
