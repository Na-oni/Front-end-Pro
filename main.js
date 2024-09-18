// Написати функцію, яка приймає 1 параметр. Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
//
// console.log(sum(4)); // 4
// console.log(sum(6)); // 10
// console.log(sum(10)); // 20
// console.log(sum(7)); // 27

function interaction_with_number() {
    let sum = 0;

    return ((number) => {
        return sum += number;
    });
}

const sum = interaction_with_number();
console.log(sum(4));
console.log(sum(6));
console.log(sum(10));
console.log(sum(7));