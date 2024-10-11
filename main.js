const user = {};

document.querySelector("#form").addEventListener("submit", event => {
    event.preventDefault();
    clear_errors();

    user.name = document.querySelector("#name").value;
    user.message = document.querySelector("#message").value;
    user.phone_number = document.querySelector("#phone_number").value;
    user.email = document.querySelector("#email").value;

    if(validate_form()) {
        console.log(user);
    } else {
        console.log('Данные введены не правильно');
    }
});

function clear_errors() {
    Object.keys(user).forEach(key => {
        document.querySelector(`#error_${key}`).innerHTML = '';
        document.querySelector(`#error_${key}`).style.padding = '0';
    });
}

function validate_form() {
    const array_regex = { "name": /^[a-zA-Zа-яА-ЯёЁ'-]+( [a-zA-Zа-яА-ЯёЁ'-]+)*$/,"message": /^.{5,}$/, "phone_number": /^\+380\d{9}$|^0\d{9}$/, "email": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/};
    const array_error = { "name": '* Это обязательное текстовое поле',"message": '* Текстовое поле должно содержать не менее 5 символов', "phone_number": '* Вы не верно указали номер телефона. Проверьте начинается ли ваш номер телефона с +380', "email": '* Вы не верно указали email. Email обязательно должен иметь @ и точку'};

    let valid = true;

    Object.keys(user).forEach(key => {
        if (!array_regex[key].test(user[key])) {
            document.querySelector(`#error_${key}`).innerHTML = array_error[key];
            document.querySelector(`#error_${key}`).style.padding = '8px';
            valid = false;
        }
    });

    return valid;
}