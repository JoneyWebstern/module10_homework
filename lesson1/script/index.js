let input = prompt('Введите четное число', '');
let result = +input;

if (typeof result === 'number') {
    if (isNaN(result)) {
        console.log('result = ' + result);
    } else if (result % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
} else {
    console.log('Упс, кажется, вы ошиблись');
}
