// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let array = null;

// Нормальный путь
//array = [9, "text", 12, true, 11, null, 8, undefined, 14, 6];

// Извращенный путь
let string = prompt("Пожалуйста, введите значения через замятую", "9, text, 12, true, 11, null, 8, undefined, 14, 6");
array = parse(string.match(/\d+(\.\d+)?/g));
console.log(array);


alert(arithmetic_mean(array));

function arithmetic_mean(array) {
    let arithmetic_mean = 0;
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number") {
            arithmetic_mean += array[i];
            count++;
        }
    }

    return arithmetic_mean / count;
}
function parse(array) {
    let return_array = [];

    for (let i = 0; i < array.length; i++) {
        return_array.push(Number.parseInt(array[i]));
    }

    return return_array;
}