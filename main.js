const url = 'https://jsonplaceholder.typicode.com/posts';

const creation_form = document.getElementById('creation_form');
const post_ul = document.getElementById('post_ul');

// Получение постов
function load() {
    fetch(url + '?_limit=10').then((response) => {
        return response.json();
    }).then(data => {
        post_ul.innerHTML = '';
        render(data);
    }).catch(error => console.log(error));
}
function render(posts) {
    posts.forEach((post) => {
        const li = document.createElement('li');
        li.dataset.id = post.id;
        li.className = 'post-li';
        li.innerHTML = `<p class="title-post">${post.title}</p><p class="body-post">${post.body}</p><button class="upload-comments">Загрузить комментарии</button>`;
        post_ul.appendChild(li);
    })
}


// Получение комментариев к постам
function upload_comments(event) {
    event.preventDefault();

    if(event.target.classList.contains('upload-comments')) {
        const id  = event.target.parentElement.dataset.id;

        fetch(url + `\/${id}/comments?_limit=2`).then((response) => {
            return response.json();
        }).then(data => {
            render_comments(id, data);
        }).catch(error => console.log(error));
    }
}
function render_comments(id, comments) {
    const li = document.querySelector(`[data-id='${id}']`);

    comments.forEach((comment) => {
        const div = document.createElement('div');
        div.className = 'comment';
        div.innerHTML = `<p class="comment-name">${comment.name}</p><p class="comment-email">${comment.email}</p><p class="comment-body">${comment.body}</p>`;
        li.appendChild(div);
    })
}


// Создание нового поста
function create_post(event) {
    event.preventDefault();

    const title = document.getElementById('form_title').value.trim();
    const body = document.getElementById('form_body').value.trim();

    if(title && body) {
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: title, body: body, postId: 1 })
        }).then((response) => {
            if(response.status === 201) {
                console.log('Пост створено успішно');
            }

            return response.json();
        }).then(data => {
            render_post(data);
        }).catch(error => console.error('Error:', error));

    }
}
function render_post(post) {
    const li = document.createElement('li');
    li.dataset.id = post.id;
    li.className = 'post-li';
    li.innerHTML = `<p class="title-post">${post.title}</p><p class="body-post">${post.body}</p><button class="upload-comments">Загрузить комментарии</button>`;
    post_ul.appendChild(li);
}

// Запуск
creation_form.addEventListener('submit', create_post);
post_ul.addEventListener('click', upload_comments);

load();