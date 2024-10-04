// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі.
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти.
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

class contact_book {
    constructor() {
        this.contacts = [{name: "Olena", phone: "+380 67 123 45 67", email: "olena.koval@example.com"}, {name: "Andrii", phone: "+380 50 234 56 78", email: "andrii.petrenko@example.com"}, {name: "Maria", phone: "+380 63 345 67 89", email: "mariya.sydorenko@example.com"}, {name: "Serhii", phone: "+380 96 456 78 90", email: "serhii.tkachenko@example.com"}, {name: "Kateryna", phone: "+380 68 567 89 01", email: "kateryna.levchenko@example.com"}, {name: "Ivan", phone: "+380 93 678 90 12", email: "ivan.honchar@example.com"}, {name: "Yuliya", phone: "+380 97 789 01 23", email: "yuliya.shevchenko@example.com"}, {name: "Dmytro", phone: "+380 50 890 12 34", email: "dmytro.melynk@example.com"}, {name: "Svitlana", phone: "+380 67 901 23 45", email: "svitlana.kravchenko@example.com"}];
    }

    get_contacts() {
        return this.contacts;
    }

    show_all() {
        console.table(this.get_contacts());
    }

    search_for_contact_by_name(name) {
        this.contacts.forEach(contact => { if(contact.name ===  name) { console.log(`Контакт с именем ${name} найден`); console.log(contact); } });
    }

    add_contact({name, phone, email}) {
        this.contacts.push({name, phone, email});
        console.log(`Вы добавили в контакт ${name}`)
    }
}

let my_contact_book = new contact_book();
my_contact_book.show_all();
console.log('-----------------------------------------');
my_contact_book.search_for_contact_by_name('Ivan');
console.log('-----------------------------------------');
my_contact_book.add_contact({name: "Viktor", phone: "+380 98 012 34 56", email: "viktor.bondarenko@example.com"});
console.log('-----------------------------------------');
my_contact_book.show_all();