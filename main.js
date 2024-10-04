// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

document.addEventListener("DOMContentLoaded", function() {
    let table = document.createElement("table");

    function create_thead() {
        let thead = document.createElement("thead");

        let tr = document.createElement("tr");
        let th = document.createElement("th");
        th.style.border = "1px solid black";
        th.style.padding = "8px";
        th.textContent = `0`;
        tr.appendChild(th);

        for (let i = 0; i < 10; i++) {
            let th = document.createElement("th");
            th.style.border = "1px solid black";
            th.style.padding = "8px";
            th.textContent = `${i + 1}`;
            tr.appendChild(th);
        }

        thead.appendChild(tr);
        table.appendChild(thead);
    }
    function create_tbody() {
        let tbody = document.createElement("tbody");

        for (let i = 1; i <= 10; i++) {
            let tr = document.createElement("tr");
            let th = document.createElement("th");
            th.style.border = "1px solid black";
            th.style.padding = "8px";
            th.textContent = `${i}`;
            tr.appendChild(th);

            for (let j = 1  ; j <= 10; j++) {
                let td = document.createElement("td");
                td.style.border = "1px solid black";
                td.style.padding = "8px";
                td.textContent = `${i * j}`;
                tr.appendChild(td);
            }

            table.appendChild(tr);
        }
        table.appendChild(tbody);
    }

    create_thead();
    create_tbody();

    document.getElementById("table-container").appendChild(table);
});
