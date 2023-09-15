let arr = [1, 1, 2, 1, 2, 4, 'asd'];

arr.forEach(function (item, index, array) {
    if (!isNaN(+item % 2)) {
        if (item % 2 == 0) {
            console.log('Четное');
        } else {
            console.log('Нечетное');
        }
    } else { console.log('Не число'); }
})
