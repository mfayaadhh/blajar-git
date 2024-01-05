// [ judul buku, pengarang, penerbit ]
let books = [
  ['Fisika Terpadu - SMA', 'Bob Foster', 'Erlangga'],
  ['Biologi Dasar - SMA', 'Irnaningtyas', 'Erlangga'],
  ['Harry Potter', 'J. K. Rowling', 'Gramedia'],
  ['Pemrograman Web dengan Node.js dan Javascript', 'Budi Raharjo', 'Informatika'],
  ['Ruby untuk Aplikasi Desktop dan Web', 'Budi Raharjo', 'Informatika']
];

function searchAll(input, search) {
  // Code here
  let res = [];
  if (search == "") {
    return res;
  }

  for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input[i].length; j++) {
      if(input[i][j].includes(search)) {
        res.push(input[i]);
        break;
      }
    }
  }
  
  return res;
}

console.log(searchAll(books, ''));
/*
 
[]*/

console.log(searchAll(books, 'Erlangga'));
/*
 
[
[ 'Fisika Terpadu - SMA', 'Bob Foster', 'Erlangga' ],
[ 'Biologi Dasar - SMA', 'Irnaningtyas', 'Erlangga' ]
]
*/

console.log(searchAll(books, 'dan'));
/*
 
[
[
'Pemrograman Web dengan Node.js dan Javascript',
'Budi Raharjo',
'Informatika'
],
[
'Ruby untuk Aplikasi Desktop dan Web',
'Budi Raharjo',
'Informatika'
]
]
*/