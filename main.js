const task_solution = document.getElementById("task_solution");

task_solution.addEventListener("click", function (event) {
    if (event.target.classList.contains('click_button')) {
        alert(`Вы нажали на ${event.target.textContent}`);
    }
});