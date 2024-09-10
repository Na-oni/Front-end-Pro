let numOrStr = prompt('input number or string', '995');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;
    case numOrStr === '':
        console.log('Empty String');
        break;
    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}