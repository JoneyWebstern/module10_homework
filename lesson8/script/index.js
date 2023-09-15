let fruits = new Map([
    ["green", "apple"],
    ["red", "strawberry"],
    ["blue", "blueberry"]
]);

for (let elem of fruits) {
    console.log(elem[0] + ' - X; ' + elem[1] + ' - Y');
}
