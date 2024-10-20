const task_list = document.getElementById("task_list").querySelector("ul");
const form = document.querySelector(".form");
const input = document.getElementById("username");

let array_task = JSON.parse(localStorage.getItem("tasks")) || [{ id: 0, name: 'test 0', state: 'incomplete' }, { id: 1, name: 'test 1', state: 'completed' }];

function render_task_list() {
    clear_task_list();

    array_task.forEach(element => {
        const li = document.createElement("li");
        li.id = element.id;

        if (element.state === 'incomplete') {
            li.innerHTML = `<input type="checkbox" id="checkbox-${element.id}"><label class="incomplete" for="checkbox-${element.id}">${element.name}</label><button class="delete">Удалить</button>`;
        }
        if (element.state === 'completed') {
            li.innerHTML = `<input type="checkbox" id="checkbox-${element.id}" checked><label class="completed" for="checkbox-${element.id}">${element.name}</label><button class="delete">Удалить</button>`;
        }

        task_list.appendChild(li);
    });

    add_checkbox_listeners();
}

function clear_task_list(){
    task_list.innerHTML = '';
}

form.addEventListener("submit", function(event) {
    console.log(array_task);
    event.preventDefault();

    array_task.push({ id: array_task.reduce((max, task) => task.id > max ? task.id : max, 0) + 1, name: input.value, state: 'incomplete' });
    localStorage.setItem("tasks", JSON.stringify(array_task));
    render_task_list();
    input.value = "";
});

task_list.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete")) {
        const task_item = event.target.parentElement;
        array_task = array_task.filter(object => String(object.id) !== task_item.id);
        localStorage.setItem("tasks", JSON.stringify(array_task));
        render_task_list();
    }
});

function add_checkbox_listeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (event) => {
            const id = checkbox.id.replace(/\D/g, '');
            array_task[id].state = array_task[id].state === 'completed' ? 'incomplete' : 'completed';
            localStorage.setItem("tasks", JSON.stringify(array_task));
            render_task_list();
        });
    });
}

render_task_list();