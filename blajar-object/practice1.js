/**
 * Buat key baru yaitu sellPrice pada product, dengan value:
 *   sellPrice = (price + (price * profit / 100))
 */

let profit = 10;

let product = {
  name: "Baygon",
  form: "Aerosol",
  bugType: "Roaces",
  price: 15000,
};

product["sellPrice"] = (product.price + (product.price * profit / 100))

console.log(product);
// {
//   name: 'Baygon',
//   form: 'Aerosol',
//   bugType: 'Roaces',
//   price: 15000,
//   sellPrice: 16500
// }