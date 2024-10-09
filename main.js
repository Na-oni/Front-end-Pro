let link = '#';

function enter_link() {
    let set_link = prompt('Пожалуйста, введите ссылку', 'https://youtu.be/vyMfXUQ1qDA?si=r1uQa6xPhw8xvRgr');

    if(set_link !== null) {
        link = set_link;
    }
}

function go_to_site() {
    window.location.href = link;
    link = '#';
}