import { get_posts, get_comments_by_id, push_post } from './server-interaction.js';

const creation_form = document.getElementById('creation_form');
const post_ul = document.getElementById('post_ul');

// Получение данных через server-interaction
get_posts().then(posts => { render(posts) });
creation_form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('form_title').value.trim();
    const body = document.getElementById('form_body').value.trim();

    if(title && body) {
        push_post({title, body}).then(data => { render_post(data) });
    }
});
post_ul.addEventListener('click', function(event) {
    event.preventDefault();

    if(event.target.classList.contains('upload-comments')) {
        const id  = event.target.parentElement.dataset.id;

        get_comments_by_id(id).then(comments => { render_comments(id ,comments) });
    }
});

// Render
function render(posts) {
    post_ul.innerHTML = '';

    posts.forEach((post) => {
        const li = document.createElement('li');
        li.dataset.id = post.id;
        li.className = 'post-li';
        li.innerHTML = `<p class="title-post">${post.title}</p><p class="body-post">${post.body}</p><button class="upload-comments">Загрузить комментарии</button>`;
        post_ul.appendChild(li);
    })
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
function render_post(post) {
    const li = document.createElement('li');
    li.dataset.id = post.id;
    li.className = 'post-li';
    li.innerHTML = `<p class="title-post">${post.title}</p><p class="body-post">${post.body}</p><button class="upload-comments">Загрузить комментарии</button>`;
    post_ul.appendChild(li);
}