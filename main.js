// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо.
// Створіть метод об'єкту для отримання та відображення цих даних.

const users = {
    data: [
        { id: 0, name: "Anna", age: 25, location: "Kyiv" },
        { id: 1, name: "Oleh", age: 30, location: "Lviv" },
        { id: 2, name: "Maria", age: 22, location: "Odesa" },
        { id: 3, name: "Ivan", age: 28, location: "Dnipro" },
        { id: 4, name: "Olena", age: 26, location: "Kharkiv" },
        { id: 5, name: "Yaroslav", age: 35, location: "Chernihiv" },
        { id: 6, name: "Nadiya", age: 29, location: "Poltava" },
        { id: 7, name: "Serhii", age: 31, location: "Zaporizhzhia" },
        { id: 8, name: "Viktoria", age: 27, location: "Vinnytsia" }
    ],

    get_user: function (number_in_array) {
        return this.data[number_in_array];
    },

    show_user: function({id}) {
        this.data.forEach(user => {
            if(user.id === id) {
                console.log(`Пользователя с id: ${user.id} зовут ${user.name}, ему(ей) ${user.age} лет, он(она) живет в городе ${user.location}`); }
        });
    }
};

for(let i = 0; i < users.data.length; i++) {
    users.show_user(users.get_user(i));
}