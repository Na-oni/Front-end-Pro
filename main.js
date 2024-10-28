class Calculator {
    add = (element_a, element_b) => element_a + element_b;
    subtract = (element_a, element_b) => element_a - element_b;
    multiply = (element_a, element_b) => element_a * element_b;
    divide = (element_a, element_b) => element_a / element_b;
}

const calculator = new Calculator();

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
console.log(calculator.multiply(3, 6)); // 18
console.log(calculator.divide(8, 2)); // 4