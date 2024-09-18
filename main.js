// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function sum(first) {
    return function (second) {
        return first * second;
    }
}

for (let i = 1; i < 10; i++) {
    const first = Math.floor(Math.random() * (10) + 1);
    const second= Math.floor(Math.random() * (10) + 1);
    console.log(`${first} * ${second} = ${sum(first)(second)}`);
}