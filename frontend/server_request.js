const url = 'http://localhost:3000';

export function get_tasks() {
    return fetch(url + '/read').then((response) => {
        return response.json();
    }).catch(error => console.log(error));
}

export function create_task({name}) {
    return fetch(url + '/create_task', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({name})
    }).then((response) => {
        return response.json();
    }).catch(error => console.error('Error:', error));
}