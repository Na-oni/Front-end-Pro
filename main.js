// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу).
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

// HELPER
// Есть число которое больше 100
let array_help = ["90", "100", "110"];
// Нет числа которое больше 100
//let array_help = ["10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];

function function_with_loop() {
    let last_number;

    for(let i = 0; i < 10; i++) {
        const number = prompt("Пожалуйста, введите число", `${array_help[i]}`);

        if (number === "" || number === null) {
            console.log("Ввод отменен или некорректное число");
            continue;
        }

        if(number > 100) {
            console.log(`${number} больше 100`);
            break;
        } else {
            last_number = number;
            console.log(`i = ${i}, last_number = ${last_number}`);
        }
    }

    return last_number;
}

console.log(`Последним введенным числом было чисто ${function_with_loop()}`);