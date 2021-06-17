// Exporting module
console.log('Exporting module');

// const fraisDePort = 10;
// export const panier = [];

// export const ajouterAuPanier = function (produit, quantité) {
//   panier.push({ produit, quantité });
//   console.log(`${quantité} ${produit} au panier`);
// };

// const quantitéTotale = 233;
// const prixTotal = 28;
// const nombreDeChocapic = function (nombre) {
//   nombre *= 123;
//   return nombre;
// };

// export { quantitéTotale, prixTotal as pTotal, nombreDeChocapic as chocaCalc };

// export default function (produit, quantité) {
//   panier.push({ produit, quantité });
//   console.log(`${quantité} ${produit} au panier`);
// }

const shopping = function () {
  const fraisDePort = 10;
  const panier = [];

  const ajouterAuPanier = function (produit, quantité) {
    panier.push({ produit, quantité });
    console.log(`${quantité} ${produit} au panier`);
  };

  const quantitéTotale = 233;
  const prixTotal = 28;
  const nombreDeChocapic = function (nombre) {
    nombre *= 123;
    return nombre;
  };
};
