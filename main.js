/* Дізнатись суму всіх зарплат користувачів:
Об'єкт може містити невідому кількість департаментів та співробітників */


let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    },
    text: {
        sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
        development: {
            web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
            internals: [{name: 'Jack', salary: 1300}]
        }
    }
};

function total_of_all_salaries(department) {
    let salaries = 0;

    if (Array.isArray(department)) {
        for (let employee of department) {
            salaries += employee.salary;
        }
    } else {
        for (let this_department in department) {
            salaries += total_of_all_salaries(department[this_department]);
        }
    }

    return salaries;
}

console.log(company);
console.log(total_of_all_salaries(company));