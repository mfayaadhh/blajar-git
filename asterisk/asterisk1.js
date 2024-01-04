let count = 1;
while(count <= 5) {
    let temp = '';
    for(let i = 0; i < count; i++) {
        temp += '*';
    }
    console.log(temp);
    count++;
}

// Asterisk 1 expected output
// *
// **
// ***
// ****
// *****