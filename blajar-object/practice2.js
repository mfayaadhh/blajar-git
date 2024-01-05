/**
 * Asumsikan perhitungan umur menggunakan referensi tahun 2024.
 */

function groupByAge(arr) {
    // Your code here
    let res = {};
    for(let i = 0; i < arr.length; i++) {
        let age = (2020 - arr[i]);
        if(res[age] === undefined) {
            res[age] = 1;
        } else {
            res[age] += 1
        }
    }
    return res;
}
  
  console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]))
  // {
  //   '17': 2,
  //   '25': 2,
  //   '29': 1,
  //   '199': 2
  // }