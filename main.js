let _undefined;
let array = {
    _number: 23,
    _bigint: 594396719594396719594396719594396719n,
    _string: "Mia",
    _boolean: true,
    _null: null,
    _undefined: _undefined
}

for(let key in array) {
    if (array.hasOwnProperty(key)) {
        console.log("typeof(" + array[key] + ") == " + typeof(array[key]));
    }
}

// Единственный примитивный тип  данных о котором я не знал. Узнал из вашей лекции ))
let uniqueID = Symbol('description');
console.log(typeof(uniqueID));