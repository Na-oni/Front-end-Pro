/* Вам нужно сделать конструктор сущности «Студент».
1) Студент имеет: имя, фамилию, год рождения, массив с оценками
2) Методы: возраст студента, средний балл

3) У всех Студентов есть массив в котором отмечается посещаемость на 25 элементов, изначально он не заполнен
4) Метод .present() в массиве "посещаемости" в пустое место записывает true, а absent() записывает false
5) Предусмотрите любую защиту от того, чтобы в массиве посещаемости не могло быть более 25 записей.

6) Метод summary(), проверяет среднюю оценку и среднее посещение(количество Посещений/количество Занятий)
- если средняя оценка больше 90, а среднее посещение больше 0.9, то метод summary возвращает строку «Молодец!»
- если одно из этих значений меньше, то - «Хорошо, но можно лучше»
- если оба ниже - «Редиска!»

7) создать 2-3 экземпляра (конкретных студентов) и показать использование этих методов */

class Student { // Вам нужно сделать конструктор сущности «Студент».
    constructor(name, surname, year_of_birth) {
        // пункт 1
        this.name = name;
        this.surname = surname;
        this.year_of_birth = year_of_birth;
        this.evaluations = [];

        // пункт 3
        this.attendance = new Array(25).fill(undefined);
    }

    // пункт 2
    get_age() {
        return new Date().getFullYear() - this.year_of_birth;
    };
    get_average_score() {
        let sum = 0;
        this.evaluations.forEach(evaluation => sum += evaluation);
        return sum / this.evaluations.length;
    }

    // пункт 4
    present() {
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = true;
        } else { // пункт 5
            console.log('Посещаемость заполнена!');
            this.attendance.shift();
            this.attendance[this.attendance.length] = true;
        }
    }
    absent() { // когда вызываем .absent() - записывается false
        const index = this.attendance.indexOf(undefined);
        if (index !== -1) {
            this.attendance[index] = false;
        } else { // пункт 5
            console.log('Посещаемость заполнена!');
            this.attendance.shift();
            this.attendance[this.attendance.length] = false;
        }
    }

    // пункт 6
    summary() {
        const average_score = this.get_average_score();
        const average_attendance = this.get_number_of_visits()/this.attendance.length;

        console.log('average_score: ' + average_score + ', average_attendance: ' + average_attendance);

        if(average_score >= 90 && average_attendance >= 0.9) {
            return 'Молодец!';
        } else if (average_score >= 90 || average_attendance >= 0.9) {
            return 'Хорошо, но можно лучше';
        } else if (average_score <= 90 && average_attendance <= 0.9) {
            return 'Редиска!';
        }
    }

    // мои помощники
    set_evaluations(array) { // В задании не было ни слова о том как нужно заполнять массив с оценками
        this.evaluations = array;
    }
    get_number_of_visits() {
        let number_of_visits = 0;
        this.attendance.forEach((visit) => { if (visit === true) number_of_visits += 1; });
        return number_of_visits;
    }
}

lazy_show();

function how_lazy(student, array) {
    array.forEach((item) => {
        if(item === 'present') {
            student.present();
        } else if (item === 'absent') {
            student.absent();
        }
    });
}
function lazy_show() {
    const students = [
        { name: 'Mia', surname: 'Horiacheva', year_of_birth: 2000, evaluations: [100, 100, 100], attendance: Array(26).fill("present")},
        { name: 'Andrey', surname: 'Ivanov', year_of_birth: 1995, evaluations: [90, 90, 90], attendance: Array(Math.floor(25 * 0.8)).fill("present").concat(Array(25 - Math.floor(25 * 0.8)).fill("absent"))},
        { name: 'Sofia', surname: 'Petrova', year_of_birth: 2002, evaluations: [80, 80, 80], attendance: Array(Math.floor(27 * 0.8)).fill("present").concat(Array(27 - Math.floor(27 * 0.8)).fill("absent"))}
    ];

    students.forEach(data => {
        const student = new Student(data.name, data.surname, data.year_of_birth);
        console.log('Name: ' + student.name);
        console.log('Age: ' + student.get_age());
        student.set_evaluations(data.evaluations);
        console.log('Средний балл: ' + student.get_average_score());
        how_lazy(student, data.attendance);
        console.log(student.summary());
        console.log('--------------------------');
    });
}