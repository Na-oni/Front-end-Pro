const url = 'https://jsonplaceholder.typicode.com/posts';

export function get_posts() {
    return fetch(url + '?_limit=10').then((response) => {
        return response.json();
    }).catch(error => console.log(error));
}

export function get_comments_by_id(id) {
    return fetch(url + `\/${id}/comments?_limit=2`).then((response) => {
        return response.json();
    }).catch(error => console.log(error));
}

export function push_post({title, body}) {
    return fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: title, body: body, postId: 1 })
    }).then((response) => {
        if(response.status === 201) {
            console.log('Пост створено успішно');
        }
        return response.json();
    }).catch(error => console.error('Error:', error));
}