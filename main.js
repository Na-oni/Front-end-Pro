const slider_content = [{id: 1, image: './image/0.png', team: 'Команда Бессонницы', text: 'Кофе — это просто магия, верно?', representative: 'Алиса "Ночная Сова"', position: 'Генерал по Ночной Кодировке'}, {id: 2, image: './image/1.png', team: 'Поисковики Ошибок', text: 'Это не ошибка, это новая фишка!', representative: 'Боб "Все Починит"', position: 'Мастерица Поиска Багов'}, {id: 3, image: './image/2.png', team: 'Идеальные Пиксели', text: 'Дизайнеры правят миром, пиксель за пикселем.', representative: 'Кэти "Королева Цветов"', position: 'Гений Креатива'}, {id: 4, image: './image/3.png', team: '404НеНайдено', text: 'Где этот файл? Наверное, в другой вселенной.', representative: 'Дэйв "Потеряшка"', position: 'Старший Исследователь Файлов'}, {id: 5, image: './image/4.png', team: 'Конфликты Слияния', text: 'Конфликты — это не ошибки, это возможности для дружбы.', representative: 'Эмма "Миротворец"', position: 'Гуру Git'}, {id: 6, image: './image/5.png', team: 'Ожидатели Асинхронности', text: 'Терпение — ключ к успеху... если нет таймаута.', representative: 'Фрэнк "Шептун Асинхронности"', position: 'Укротитель Обещаний'}];
let counter = 1;

render_slider();

function onclick_prev() {
    counter--;

    render_slider();
}
function onclick_next() {
    counter++;

    render_slider();
}

function render_slider() {
    const slider = document.getElementById('slider');

    slider_content.forEach(element => {
        if (element.id === counter) {
            const render = document.getElementById('render');

            if(element.id === 1) {
                render.innerHTML = `<div class="slide"><div class='content'><img src="${element.image}" alt="стоп, твои глаза не должны были это увидеть"><p><a href="${element.team}">КОМАНДА></a><span class="text">${element.text}</span><span class="representative">${element.representative}</span><span class="position">${element.position}</span></p></div><button onclick="onclick_next()" id='next' class="nav-button">></button></div>`;
                render.innerHTML +=  get_render_dot();
            } else if (element.id === slider_content.length) {
                render.innerHTML = `<div class="slide"><button onclick="onclick_prev()" id='prev' class="nav-button"><</button><div class='content'><img src="${element.image}" alt="стоп, твои глаза не должны были это увидеть"><p><a href="${element.team}">КОМАНДА></a><span class="text">${element.text}</span><span class="representative">${element.representative}</span><span class="position">${element.position}</span></p></div></div>`;
                render.innerHTML +=  get_render_dot();
            } else {
                render.innerHTML = `<div class="slide"><button onclick="onclick_prev()" id='prev' class="nav-button"><</button><div class='content'><img src="${element.image}" alt="стоп, твои глаза не должны были это увидеть"><p><a href="${element.team}">КОМАНДА></a><span class="text">${element.text}</span><span class="representative">${element.representative}</span><span class="position">${element.position}</span></p></div><button onclick="onclick_next()" id='next' class="nav-button">></button></div>`;
                render.innerHTML +=  get_render_dot();
            }

            slider.appendChild(render);
        }
    });
}


function get_render_dot() {
    let render_dot = `<div id="navigation_dots" class="navigation_dots">`;

    for (let i = 1; i <= slider_content.length; i++) {
        render_dot += `<span class="dot ${i === counter ? 'active' : ''}" data-slide="${i}" onclick="click_dot(${i})"></span>`;
    }

    render_dot += `</div>`;
    return render_dot;
}


function click_dot(index) {
    counter = index; // Установка текущего слайда
    render_slider(); // Обновление слайдера
}