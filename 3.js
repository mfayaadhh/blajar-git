function arrSet(input) {
  // Do something here
  let x = [];
  x.push(input[0])
  for (let i = 0; i < input.length;i++) {
    for(let j = 0; j < x.length;j++) {
        if (x[j] !== input[i]) {
            x.push(input[i])
            j++
            i++
        } else {
            i++
        }
    }
  } return x
}

console.log(arrSet([1, 1, 1, 3, 3, 3, 5, 5, 5, 5])); // [ 1, 3, 5 ]
console.log(arrSet([1, 1, 1, 2, 2, 3, 3, 5, 5])); // [ 1, 2, 3, 5 ]
console.log(arrSet([1, 1, 1, 2, 2, 3, 3, 5, 5, "A", "A"])); // [ 1, 2, 3, 5, 'A' ]