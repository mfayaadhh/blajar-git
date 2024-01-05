function arrSet(input) {
  // Do something here
  let x = [];
  let xIndex = 0;
  x.push(input[0])
  for (let i = 0; i < input.length; i++) {
    if(input[i] !== x[xIndex]) {
      x.push(input[i])
      xIndex++
    }    
  } return x
}

console.log(arrSet([1, 1, 1, 3, 3, 3, 5, 5, 5, 5])); // [ 1, 3, 5 ]
console.log(arrSet([1, 1, 1, 2, 2, 3, 3, 5, 5])); // [ 1, 2, 3, 5 ]
console.log(arrSet([1, 1, 1, 2, 2, 3, 3, 5, 5, "A", "A"])); // [ 1, 2, 3, 5, 'A' ]