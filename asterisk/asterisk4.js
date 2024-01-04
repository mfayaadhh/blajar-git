let n = 5;
let count = n;
while(count >= 1) {
    let line = '';
    for(let i = 0; i < n; i++) {
        if(i < n - count) {
            line += ' ';
        } else {
            line += '*';
        }
    }
    console.log(line);
    count--;
}



// Asterisk 4 expected output
// *****
//  ****
//   ***
//    **
//     *