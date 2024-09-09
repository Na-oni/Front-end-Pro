let number = prompt("Введите число");

console.log(`[0] = ${number[0]}, [1] = ${number[1]}, [2] = ${number[2]}`);

if (number[0] === number[1] && number[1] === number[2]) {
    alert('В числе все цифры одинаковые');
} else if (number[0] === number[1] || number[1] === number[2] || number[1] === number[2]) {
    alert('В числе есть одинаковые цифры');
}

// Или так, но с извращениями
for(let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
        console.log(`[${i}] = ${number[i]} И [${j}] = ${number[j]}`);
        if(i !== j && number[i] === number[j]) {
            console.log(`[${i}] = ${number[i]} == [${j}] = ${number[j]}`);
            alert(`[${i}] = ${number[i]} так же как и [${j}] = ${number[j]}`);
        }
    }
}