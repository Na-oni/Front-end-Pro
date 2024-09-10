/** Хелп
 * year_of_birth = 2000
 * city = ["Днепр", "Харьков", "Киев", "Вашингтон", "Лондон"];
 * sports = ["Гребля", "Бокс", "Хоккей", "Стрельба из лука"];
 **/

interaction_with_age();
interaction_with_city();
interaction_with_sport();

function interaction_with_age() {
    let year_of_birth = prompt("Пожалуйста, укажите ваш год рождения", "2000");

    if(year_of_birth === null || year_of_birth === "") {
        alert(`Жаль, что Вы не захотели ввести год своего рождения`);
    } else {
        alert(`Ваш возраст ${new Date().getFullYear() - year_of_birth}`);
    }
}

function interaction_with_city() {
    let city = prompt("Пожалуйста, укажите в каком городе вы живете", "Киев");

    if(city === null || city === "") {
        alert(`Жаль, что Вы не захотели ввести название своего города`);
        return;
    }

    let array_city = ["Киев", "Вашингтон", "Лондон"];
    let array_country = ["Украины", "США", "Великобритании"];

    for(let i = 0; i < array_city.length; i++) {
        if(city === array_city[i]) {
            alert(`Ты живешь в столице ${array_country[i]}`);
            return;
        }
    }

    if(city !== null) {
        alert(`Ты живешь в городе ${city}`);
    }
}

function interaction_with_sport() {
    let sport = prompt("Пожалуйста, укажите ваш любимый вид спорта","Стрельба из лука");

    if(sport === null || sport === "") {
        alert(`Жаль, что Вы не захотели ввести название вашего любимого вида спорта`);
        return;
    }

    let array_sports = ["Бокс", "Хоккей", "Стрельба из лука"];
    let array_champions = ["Александр Усик", "Роман Вилл", "Ким У Джин"];

    for(let i = 0; i < array_sports.length; i++) {
        if(sport === array_sports[i]) {
            alert(`Круто! Хочешь стать как ${array_champions[i]}?`);
            return;
        }
    }

    // В задании не написанно что это нужно, но как по мне это необходимо
    if(sport !== null) {
        alert(`Ого, ты тоже любишь ${sport}`);
    }
}