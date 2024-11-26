const url = 'http://localhost:3000';

// Event Listener
document.querySelector('#creation_form').addEventListener('submit', create_task);
document.querySelector('#list_tasks').addEventListener('click', edit_state);

// Methods
async function get_tasks() {
    const response = await fetch(`${url}/read`);
    const tasks = await response.json();
    render(tasks);
}

async function create_task(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;

    await fetch(`${url}/create`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ name })
    });
    await get_tasks();

    document.querySelector('#creation_form').reset();
}

async function delete_task(id) {
    const response = await fetch(`${url}/delete/${id}`, {
        method: 'DELETE',
    });

    if (!response.ok) {
        console.error('Ошибка удаления задачи:', response.statusText);
        return;
    }

    await get_tasks();
}

async function edit_state(event) {
    event.preventDefault();

    const checkbox = event.target;
    if (checkbox.tagName !== 'INPUT' || checkbox.type !== 'checkbox') return;

    const id = checkbox.id.split('-')[1];
    const state = checkbox.checked;

    await fetch(`${url}/update/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ state })
    });

    await get_tasks();
}

function render(tasks) {
    const list_tasks = document.querySelector('#list_tasks');
    list_tasks.innerHTML = '';

    tasks.forEach(task => {
        const div = document.createElement('div');
        div.className = 'item';

        if(task.state === false) {
            div.innerHTML = `<div class="left"><input type="checkbox" id="checkbox-${task.id}"><label class="incomplete" for="checkbox-${task.id}">${task.name}</label></div><div class="right"><button onclick="delete_task(${task.id})" class="delete">Удалить</button></div>`;
        }
        if(task.state === true) {
            div.innerHTML = `<div class="left"><input type="checkbox" id="checkbox-${task.id}" checked><label class="completed" for="checkbox-${task.id}">${task.name}</label></div><div class="right"><button onclick="delete_task(${task.id})" class="delete">Удалить</button></div>`;
        }

        list_tasks.appendChild(div);
    });
}

// Start
get_tasks();