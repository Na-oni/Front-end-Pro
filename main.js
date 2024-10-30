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
    const remaining_seconds = seconds % 60;

    const string_minutes = String(minutes).padStart(2, '0');
    const string_seconds = String(remaining_seconds).padStart(2, '0');

    return `${string_minutes}:${string_seconds}`;
}

function show_video() {
    const task_solution = document.getElementsByClassName("task_solution")[0];

    const br = document.createElement('br');
    const video = document.createElement('video');

    video.src = './video.mp4';
    video.controls = true;
    video.height = 640;
    video.volume = 0.5;

    task_solution.appendChild(br);
    task_solution.appendChild(video);
}