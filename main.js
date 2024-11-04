/* За допомогою запиту вивести виджет погоди. Ресурс API https://openweathermap.org/current
Також потрібно додати кнопку оновлення данних. */

sending_a_request();

function button_onclick() {
    const task_solution = document.getElementById("task_solution");
    const update = document.getElementById("update");

    const date = new Date();

    update.textContent = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}, time ${date.getHours()}:${date.getMinutes()}`;
    task_solution.appendChild(update);

    sending_a_request();
}

function sending_a_request() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4ed274740a388c8854a5963735383967';

    fetch(url).then(res => res.json()).then(data => {
        const task_solution = document.getElementById("task_solution");

        /* Месяц число, год - день недели */
        const month_day_year_with_weekday = document.getElementById("month_day_year_with_weekday");
        month_day_year_with_weekday.textContent = get_dt(new Date(data.dt * 1000));
        task_solution.appendChild(month_day_year_with_weekday);

        /* Время восхода солнца */
        const time_of_sunrise = document.getElementById("time_of_sunrise");
        time_of_sunrise.textContent = get_sys(new Date(data.sys.sunrise * 1000));
        task_solution.appendChild(time_of_sunrise);

        /* Время в данный момент */
        const time_now = document.getElementById("time_now");
        time_now.textContent = get_time_now(new Date(data.dt * 1000));
        task_solution.appendChild(time_now);

        /* Влажность */
        const humidity = document.getElementById("humidity");
        humidity.textContent = get_humidity(data.main.humidity);
        task_solution.appendChild(humidity);

        /* Давление */
        const pressure = document.getElementById("pressure");
        pressure.textContent = get_pressure(data.main.pressure);
        task_solution.appendChild(pressure);

        /* Информация о ветре */
        const wind = document.getElementById("wind");
        wind.textContent = get_wind(data.wind);
        task_solution.appendChild(wind);

        /* Температура */
        const temp = document.getElementById("temp");
        temp.textContent = get_temp(data.main);
        task_solution.appendChild(temp);

        /* Погода */
        const weather = document.getElementById("weather");
        weather.textContent = get_weather(data.weather);
        task_solution.appendChild(weather);
    }).catch(error => console.error('Error:', error));
}

function get_dt(date) {
    const month = new Intl.DateTimeFormat('default', { month: 'long' }).format(date);
    const day = new Intl.DateTimeFormat('default', { day: 'numeric' }).format(date);
    const year = new Intl.DateTimeFormat('default', { year: 'numeric'}).format(date);
    const weekday = new Intl.DateTimeFormat('default', { weekday: 'long' }).format(date);

    return `${month} ${day}, ${year} - ${weekday}`;
}
function get_sys(date) {
    const sunrise_time = new Intl.DateTimeFormat('default', { hour: 'numeric', minute: '2-digit' }).format(date);

    return `Sun ${sunrise_time}`;
}
function get_time_now(date) {
    const time_now = new Intl.DateTimeFormat('default', { hour: '2-digit', minute: '2-digit' }).format(date);

    return `Forecast timestamp ${time_now}`;
}
function get_humidity(date) {
    return `Humidity: ${date}%`;
}
function get_pressure(date) {
    return `Pressure: ${date} hPa`;
}
function get_wind(date) {
    return `Wind: ${date.speed} km/h, wind direction ${date.deg}°`;
}
function get_temp(date) {
    const celsiusTemperature = (kelvinTemperature) => kelvinTemperature - 273.15;

    return `${celsiusTemperature(date.temp).toFixed(2)} °C, Feels Like: ${celsiusTemperature(date.feels_like).toFixed(2)}°C`;
}
function get_weather(date) {
    return `${date[0].description}`;
}