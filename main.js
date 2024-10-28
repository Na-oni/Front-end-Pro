/** 1) Створіть клас Coach, який буде представляти тренера.
2) Додайте властивості, такі як ім'я, спеціалізація та рейтинг.
3) Також реалізуйте метод для виведення інформації про тренера та його рейтинг **/

class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    display_info = () => console.log(`Coach: ${this.name}, Specialization: ${this.specialization}, Rating: ${this.rating}`);
}

const coach1 = new Coach('John Doe', 'Fitness', 4.7);
const coach2 = new Coach('Alice Smith', 'Yoga', 4.9);

coach1.display_info(); // "Coach: John Doe, Specialization: Fitness, Rating: 4.7"
coach2.display_info(); // "Coach: Alice Smith, Specialization: Yoga, Rating: 4.9"