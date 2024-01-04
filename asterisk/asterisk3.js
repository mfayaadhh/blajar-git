let count = 5;
while(count >= 1) {
    let line = '';
    for(let i = 0; i < count; i++) {
        line += '*';
    }
    console.log(line);
    count--;
}


// Asterisk 3 expected output
// *****
// ****
// ***
// **
// *