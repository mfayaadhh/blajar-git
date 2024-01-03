function splitString(str) {

    let x = []
    for(let i = 0;i < str.length;i++) {
        x.push(str[i])
    } return x
}

console.log(splitString("Hello")); // ['H', 'e', 'l', 'l', 'o']
