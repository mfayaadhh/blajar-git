function splitString(str, sep) {
    let res = [];
    let temp = ''
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== sep) {
            temp += str[i]
        } else {
            res.push(temp)
            temp = ''
        }   
    }
    if(temp !== '') {
        res.push(temp)
    } 
    return res;
}

console.log(splitString("2341;3429;864;1309;1276", ";")); // [ '2341', '3429', '864', '1309', '1276' ]

