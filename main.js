// Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір. При повторному натисканні – повертається попередній колір

document.addEventListener('DOMContentLoaded', function() {
    let array_color = [{ backgroundColor: 'rgb(62, 180, 137)', color: 'rgb(255, 111, 97)' }, { backgroundColor: 'rgb(0, 51, 102)', color: 'rgb(255, 153, 0)' }];
    const text = document.getElementById('text');

    document.getElementById('button').onclick = function() {
        console.log(`${text.style.backgroundColor} === ${array_color[0].backgroundColor}`);

        if(text.style.backgroundColor === array_color[0].backgroundColor) {
            text.style.backgroundColor = array_color[1].backgroundColor;
            text.style.color = array_color[1].color;
        } else {
            text.style.backgroundColor = array_color[0].backgroundColor;
            text.style.color = array_color[0].color;
        }
    };
});