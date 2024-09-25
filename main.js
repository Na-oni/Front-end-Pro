/* Створити ladder (сходи) – об'єкт, який дозволяє підніматися вгору та спускатися:
Тепер, якщо нам потрібно зробити кілька послідовних викликів, ми можемо виконати це так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:

ladder.up().up().down().showStep(); // 1

Такий підхід широко використовується в бібліотеках JavaScript. */

let ladder = {
    position_of_object: 0,
    up: function () {
        this.position_of_object++;
        return this;
    },
    down: function () {
        this.position_of_object--;
        return this;
    },
    show_step: function () {
        console.log(this.position_of_object);
        return this;
    },
};

//ladder.up().up().down().show_step(); // 1
ladder.show_step().up().show_step().up().show_step().down().show_step();

