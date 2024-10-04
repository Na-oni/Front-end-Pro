// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

/*function my_helper() {
    let array = [];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 11));
    }
    return array;
}

let array = my_helper();*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let new_array = array.filter(number => number % 2 === 0);

// start
console.log(array);
console.log(new_array);