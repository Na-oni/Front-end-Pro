// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. Вивести зображення, отримане випадковим чином (Math.random)

document.addEventListener("DOMContentLoaded", function() {
    function generate_random_array() {
        const numbers = [];

        while (numbers.length < 9) {
            const randomNumber = Math.floor(Math.random() * 9) + 1;
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }

        return numbers;
    }

    const random_array = generate_random_array();
    console.log(random_array);

    let main_div = document.createElement("div");
    main_div.style.display = "flex";
    main_div.style.justifyContent = "space-between";
    main_div.style.flexWrap = "wrap";

    for (let i = 0; i < random_array.length; i++) {
        let div = document.createElement("div");
        div.className = 'item';
        div.style.flex = "1 1 300px";
        div.style.margin = "8px";
        main_div.appendChild(div);

        let img = document.createElement("img");
        img.src = `./images/${random_array[i]}.jpg`;
        img.style.width = '100%';
        img.style.height = 'auto';
        div.appendChild(img);
    }

    document.getElementById("container").appendChild(main_div);
});