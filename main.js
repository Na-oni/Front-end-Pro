let num = 10369;

let fifth_number = Math.floor(num % 10);
num = num / 10;
let fourth_number = Math.floor(num % 10);
num = num / 10;
let third_number = Math.floor(num % 10);
num = num / 10;
let second_number = Math.floor(num % 10);
num = num / 10;
let first_number = Math.floor(num % 10);

console.log(`${first_number} ${second_number} ${third_number} ${fourth_number} ${fifth_number}`);