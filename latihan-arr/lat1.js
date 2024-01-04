// [ judul film, rating, jumlah review ]
let movies = [
    ['Parasite', '★★★★★', 93],
    ['Moonlight', '★★☆☆☆', 60],
    ['Captain Marvel', '★★★★☆', 64],
    ['The Irishman', '★★★★☆', 86],
    ['Inception', '★★★☆☆', 72],
    ['Toy Story 3', '★★★★☆', 98],
    ['Citizen Kane', '★★★☆☆', 66]
  ];

function highlight(input, score = 300) {

  let result = [];

  for(let i = 0; i < input.length; i++) {
    let star = input[i][1]
    let starCount = 0;
    for(let j = 0; j < star.length; j++) {
        if(star[j] === "★") {
            starCount++;
        }
    }
    let calc = starCount * input[i][2]
    if(calc >= score) {
        result.push(input[i])
    }
  }
  return result;
}

console.log(highlight(movies));
/*
 
[
[ 'Parasite', '★★★★★', 93, 465 ],
[ 'The Irishman', '★★★★☆', 86, 344 ],
[ 'Toy Story 3', '★★★★☆', 98, 392 ]
]
*/

console.log(highlight(movies, 400));
/**
 
[ [ 'Parasite', '★★★★★', 93, 465 ] ]*/
