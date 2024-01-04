let n = 5;
let count = 1;
while(count <= n) {
    let temp = '';
    for(let i = 0; i < n; i++) {
        if(i < n - count) {
            temp += ' ';
        } else {
            temp += '*';
        }
    }
    console.log(temp);
    count++;
}


// Asterisk 2 expected output
//      *
//     **
//    ***
//   ****
//  *****