// Importing moduel
// import './shoppingCart.js';
// import {
//   ajouterAuPanier,
//   quantitéTotale as quantité,
//   pTotal,
// } from './shoppingCart.js';
// console.log('Importing module');
// // console.log(fraisDePort); > should call export first
// // console.log(quantitéTotale);
// console.log(quantité);
// console.log(pTotal);
// ajouterAuPanier('Iphone', 56);

// import * as shoppingCart from './shoppingCart.js';
// shoppingCart.ajouterAuPanier('Potatoes', 22);

//// Avoid this
import ajouterAuPanier, {
  quantitéTotale as quantité,
  pTotal,
} from './shoppingCart.js';

//// Import default => import only one
// import * as arrays from './array.js';
// import * as shoppin from './shoppingCart.js';
// shoppin.ajouterAuPanier('Donuts', 2);
// shoppin.ajouterAuPanier('Coca', 65);
// shoppin.ajouterAuPanier('Rapala', 92);

// console.log(shoppin.panier);
// console.log(shoppin.chocaCalc(233));

// shoppin.ajouterAuPanier('RippleShad', arrays.css[1]);
// Live connection

// const shopping = (function () {
//   const fraisDePort = 10;
//   const panier = [];

//   const ajouterAuPanier = function (produit, quantité) {
//     panier.push({ produit, quantité });
//     console.log(`${quantité} ${produit} au panier`);
//   };

//   const quantitéTotale = 233;
//   const prixTotal = 28;
//   const nombreDeChocapic = function (nombre) {
//     nombre *= 123;
//     return nombre;
//   };
//   return { ajouterAuPanier, fraisDePort, panier };
// })();

// shopping.ajouterAuPanier('cake', 3);
// console.log(shopping.panier);
// console.log(shopping.fraisDePort);

////////////////////////
////// Common js module
// EXPORT
// export.ajouterAuPanier = function (produit, quantité) {
//     panier.push({ produit, quantité });
//     console.log(`${quantité} ${produit} au panier`);
//   };

// IMPORT
// const { ajouterAuPanier } = require('./shoppingCart.js');
///////////

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const etat = {
  chariot: [
    { produit: 'pain', quantité: 2 },
    { produit: 'baguette', quantité: 8 },
  ],
  utilisateur: { loggedIn: true },
};

const etatClone = Object.assign({}, etat);
const etatDeepClone = cloneDeep(etat);

etat.utilisateur.loggedIn = false;

if (module.hot) {
  module.hot.accept();
}
