// [ penyanyi, judul lagu, durasi ]
let playlist = [
    ['Didi Kempot', 'Banyu Langit', 4],
    ['Nike Ardilla', 'Sandiwara Cinta', 4],
    ['Hetty Koes Endang', 'Cinta Putih', 3],
    ['Titiek Puspa', 'Kupu-Kupu Malam', 3],
    ['Ahmad Albar', "Don't Spoil My Day", 5],
    ['Doel Sumbang', 'Awewe Sapi Daging', 2],
    ['Ebiet G. Ade', 'Berita Kepada Kawan', 6]
  ];
  
function play(input, time) {
    let result = [];
    let duration = 0;
    let i = 0; // mulai index

    if(time === undefined) {
        return input;
    } 
 
    while(duration <= time) {
        if(i === input.length) {
        i = 0; // reset
        }
        if(duration + input[i][2] > time) {
        break;
        }
        result.push(input[i]);
        duration += input[i][2];
        i++;
    }
    return result;
}
  
console.log(play(playlist));
/*

[
[ 'Didi Kempot', 'Banyu Langit', 4 ],
[ 'Nike Ardilla', 'Sandiwara Cinta', 4 ],
[ 'Hetty Koes Endang', 'Cinta Putih', 3 ],
[ 'Titiek Puspa', 'Kupu-Kupu Malam', 3 ],
[ 'Ahmad Albar', "Don't Spoil My Day", 5 ],
[ 'Doel Sumbang', 'Awewe Sapi Daging', 2 ],
[ 'Ebiet G. Ade', 'Berita Kepada Kawan', 6 ]
]
*/

console.log(play(playlist, 9));
/*

[
['Didi Kempot', 'Banyu Langit', 4],
['Nike Ardilla', 'Sandiwara Cinta', 4]
]
*/

console.log(play(playlist, 32));
/*

[
[ 'Didi Kempot', 'Banyu Langit', 4 ],
[ 'Nike Ardilla', 'Sandiwara Cinta', 4 ],
[ 'Hetty Koes Endang', 'Cinta Putih', 3 ],
[ 'Titiek Puspa', 'Kupu-Kupu Malam', 3 ],
[ 'Ahmad Albar', "Don't Spoil My Day", 5 ],
[ 'Doel Sumbang', 'Awewe Sapi Daging', 2 ],
[ 'Ebiet G. Ade', 'Berita Kepada Kawan', 6 ],
[ 'Didi Kempot', 'Banyu Langit', 4 ]
]
*/