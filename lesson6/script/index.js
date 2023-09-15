let arr = [1, 1, 1, 1, 1];

for (let i = 0; i < arr.length; i++) {
    if (arr[0] != arr[i]) {
        console.log(false);
        break;
    } else {
        console.log(true);
    }
}


