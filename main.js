const task_list = document.getElementById("task_list").querySelector("ul");
const form = document.querySelector(".form");
const input = document.getElementById("username");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const new_task = document.createElement("li");
    new_task.innerHTML = `<span>${input.value}</span><button class="delete">Удалить</button>`;
    task_list.appendChild(new_task);

    input.value = "";
});

task_list.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const task_item = event.target.parentElement;
        task_list.removeChild(task_item);
    }
});