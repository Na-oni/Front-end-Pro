/*Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
Наприклад:
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array,4);
console.log(array); // Результат: [1, 3, 6, 2, 5, 7]*/

const array = [1, 3, 4, 6, 2, 5, 7]; // , 4, 6
console.log(array);
remove_element(array, 4);
console.log(array);

function remove_element(array, number) {
    let changes_were_made = false;
    let count_changes = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            // Я выбрала такой вариант выполнения
            for (let j = i; j < array.length; j++) {
                array[j] = array[j + 1];
            }

            changes_were_made = true;
            count_changes++;

            // Хотя можно было сделать через метод и не запариваться так
            //array.splice(i, 1);
        }
    }

    if (changes_were_made) {
        for (let i = 0; i < count_changes; i++) {
            array.pop();
        }
    }
}