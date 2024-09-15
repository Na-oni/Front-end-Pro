// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

let string = prompt("Пожалуйста введите текст", "hello world");
let delete_symbols = prompt("Пожалуйста введите символы для удаления", "ld");

alert(delete_from_string(string,delete_symbols));

function delete_from_string(string, delete_symbols) {
    let get_string = "";

    for (let i = 0; i < string.length; i++) {
        let no_forbidden_symbol = true;

        for (let j = 0; j < delete_symbols.length; j++) {
            if (string[i] === delete_symbols[j]) {
                no_forbidden_symbol = false;
            }
        }

        if(no_forbidden_symbol === true) {
            get_string += string[i];
        }
    }

    return get_string;
}