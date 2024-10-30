/* Реализовать таймер отсчета:
1) Начало таймера определять из переменной
2) Отобразить на странице время в формате 01:25
3) Когда закончился таймер остановить его*/

const time = document.getElementById("time");

function button_click () {
    const hours = parseInt(document.getElementById("hours").value);
    const minutes = parseInt(document.getElementById("minutes").value);
    const seconds = parseInt(document.getElementById("seconds").value);

    const timer = ((hours * 3600) + (minutes * 60) + seconds) * 1000;

    time.textContent = `${show_time(timer)}`;
    start_timer(timer);
}

function start_timer(milliseconds) {
    const interval = setInterval(() => {
        if(milliseconds <= 0) {
            clearInterval(interval);
            show_video();
            return;
        }

        milliseconds -= 1000;
        time.textContent = `${show_time(milliseconds)}`;
    }, 1000);
}

function show_time(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remaining_seconds = seconds % 60;
    const remaining_minutes = minutes % 60;

    const string_hours = String(hours).padStart(2, '0');
    const string_minutes = String(remaining_minutes).padStart(2, '0');
    const string_seconds = String(remaining_seconds).padStart(2, '0');

    return `${string_hours}:${string_minutes}:${string_seconds}`;
}

function show_video() {
    const task_solution = document.getElementsByClassName("task_solution");
    const hidden_div = document.getElementById("hidden_div");
    const video = document.getElementById("video");

    hidden_div.style.display = "block";
    video.controls = true;
    video.volume = 0.5;

    hidden_div.appendChild(video);
    task_solution.appendChild(hidden_div);
}