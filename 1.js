function maxMin(arrIn) {
    // Do something here
    if (arrIn.length <= 1) {
        return arrIn
    }

    let max = 0
    let min = 0
    for(let i = 0; i < arrIn.length; i++) {
        if (arrIn[i] < min) {
            min = arrIn[i]
        }
        for(let j = 1; j < arrIn.length; j++){
            if(arrIn[j] > max) {
                max = arrIn[j]
            }
        }
    } return [max, min]
}

console.log(maxMin([5, 1, 7, 12, 2, 8, 5, 6, 1, 12])); // [12, 1]
console.log(maxMin([13])); // [13, 13]
console.log(maxMin([])); // []
