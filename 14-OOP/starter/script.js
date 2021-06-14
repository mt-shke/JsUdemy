'use strict';

const Car = function (marque, modele, constructionYear) {
  // Instance properties
  this.marque = marque;
  this.modele = modele;
  this.constructionYear = constructionYear;
  // Method - Should not do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.constructionYear);
  //   };
};

// // 1 - New object {} is created
// // 2 - function is called, this = {};
// // 3 - {} linked to prototype
// // 4 - function automatically return {}

// const pPeakCar = new Car('Suzuki', 'Escudo', 1995);
// const myCar = new Car('Renault', 'Megane', 2009);
// const oldCar = new Car('Renault', '21', 1994);

// console.log(pPeakCar, myCar, oldCar);
// const jp = 'jp';
// console.log(jp instanceof Car);
// console.log(myCar instanceof Car);

// // Prototype - Method - Should do this instead
Car.prototype.calcAge = function () {
  console.log(2021 - this.constructionYear);
};
// ////

// Car.prototype.color = 'color';
// console.log(Car.prototype);
// myCar.calcAge();
// myCar.color = 'white';
// console.log(myCar.color);
// //

// console.log(myCar.__proto__);
// console.log(myCar.__proto__ === Car.prototype);
// console.log(Car.prototype.isPrototypeOf(myCar));
// console.log(Car.prototype.isPrototypeOf(oldCar));
// console.log(Car.prototype.isPrototypeOf(Car));
// //

// // .prototypeOfLinkedObjects
// Car.prototype.type = 'Berline';
// pPeakCar.type = 'Rally';
// console.log(myCar.type, oldCar.type, pPeakCar.type);
// console.log(`myCar.hasOwnProperty('marque')`, myCar.hasOwnProperty('marque'));
// console.log(`oldCar.hasOwnProperty('marque')`, oldCar.hasOwnProperty('marque'));
// console.log(`myCar.hasOwnProperty('modele')`, myCar.hasOwnProperty('modele'));
// console.log(`myCar.hasOwnProperty('type')`, myCar.hasOwnProperty('type'));

// //
// console.log(myCar.__proto__);
// console.log(myCar.__proto__.__proto__);
// //
// console.log(Car.prototype.constructor);
// console.dir(Car.prototype.constructor);

// //
// const arr = [2, 34, 5, 32, 2, 3, 33, 32, 3, 3, 3]; //  new Array === [];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.dir(x => 1 + 23);

///
// Challenge
///

// Data car1: 'BMW'going at 120 km/h§Data car2: 'Mercedes'going at 95 km/h

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   return console.log((this.speed += 10));
// };

// Car.prototype.brake = function () {
//   return console.log((this.speed -= 5));
// };

// const carBmw = new Car('BmW', 120);

// const carMercedes = new Car('Mercedes', 95);

// carBmw.brake();
// carBmw.accelerate();

// carMercedes.brake();
// carMercedes.accelerate();
// carMercedes.accelerate();
// carMercedes.accelerate();
// carMercedes.brake();
// carMercedes.accelerate();
// carMercedes.accelerate();

////
// class declaration
// const Carclass = class {}

// // class expression
// class CarClass {
//   constructor(marque, modele, constructionYear) {
//     this.marque = marque;
//     this.modele = modele;
//     this.constructionYear = constructionYear;
//   }
//   // Method
//   calcAge() {
//     console.log(2021 - this.constructionYear);
//   }

//   // set marque(name) {
//   //   console.log(name);
//   //   if (name.includes(' ')) this._marque = name;
//   //   else this.marque = this.marque;
//   // }

//   ////
//   // Static
//   static sound() {
//     console.log('brrouuuurrrhh');
//   }
// }

// const f1 = new CarClass('McLaren Mc', 'Mercedes', 2004);
// console.log(f1);

// f1.calcAge();

// CarClass.prototype.calcAgeInTen = function () {
//   console.log(2021 + 10 - this.constructionYear);
// };

// f1.calcAgeInTen();

// // Class aren't hoisted
// // "" are first-class citizens
// // "" are executed in strict mode

// ////
// //Getters & Setters
// //

// const account = {
//   owner: 'me',
//   movements: [12, 243, 223, 21, 5],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(val) {
//     this.movements.push(val);
//   },
// };

// ////
// // Static Method
// //

// // Array.from <- bind to constructor
// // Number.parseFloat(12); <- bind to constructor

// // CarClass.sound = function () {
// //   console.log('Brrouuuuurrruuu');
// //   console.log(this);
// // };

// // CarClass.sound();

// const CarProto = {
//   calcAge() {
//     console.log(2021 - this.constructionYear);
//   },
//   init(marque, modele, constructionYear) {
//     this.marque = marque;
//     this.modele = modele;
//     this.constructionYear = constructionYear;
//   },
// };

// const tesla = Object.create(CarProto);
// tesla.init('Tesla', 'Zx10', 2018);
// console.log(tesla);
// tesla.calcAge();

// class CarCl {
//   constructor(marque, speed, unit) {
//     this.marque = marque;
//     this.speed = speed;
//     this.unit = unit;
//   }

//   // accelerate() {
//   //   return console.log(`Moving at ${(this.speed += 10)}`);
//   // }

//   set accelerate(addSpeed) {
//     this.speed += addSpeed;
//     return console.log(`Moving at ${this.speed}`);
//   }

//   get brake() {
//     this.speed -= 5;
//     return console.log(`Moving at ${this.speed}`);
//   }

//   // brake() {
//   //   return console.log(`BRAAAKKKE!! ${(this.speed -= 5)}`);
//   // }

//   get speedUS() {
//     return console.log(`Speed is ${this.speed / 1.6} mi/h!`);
//   }

//   set speedUS(val) {
//     this.speed = val * 1.6;
//     return console.log(`Speed is ${this.speed}km/h!`);
//   }
// }

// const supraGt = new CarCl('Toyota', 150, 'mi/h');

// // console.log(supraGt.speedUS);
// // supraGt.speedUS;

// supraGt.accelerate = 10;
// supraGt.speedUS = 100;

// const RaceCar = function (marque, modele, constructionYear, raceType) {
//   // this.marque = marque;
//   // this.modele = modele;
//   // this.constructionYear = constructionYear;
//   Car.call(this, marque, modele, constructionYear);
//   this.raceType = raceType;
// };

// // Link prototype
// RaceCar.prototype = Object.create(Car.prototype);

// RaceCar.prototype.racer = function () {
//   console.log(
//     `This car has been developped to participate to the ${this.raceType} championship`
//   );
// };

// const gtOne = new RaceCar('Toyota', 'GT One', '1992', 'Le Mans');
// gtOne.racer();
// gtOne.calcAge();

// console.log(gtOne.__proto__);
// console.log(gtOne.__proto__.__proto__);

// console.log(gtOne instanceof RaceCar);
// console.log(gtOne instanceof Car);
// console.log(gtOne instanceof Object);

// RaceCar.prototype.constructor = RaceCar;
// console.dir(RaceCar.prototype.constructor);

// //
// Challenge

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const ChallCar = function (maker, speed) {
  this.maker = maker;
  this.speed = speed;
};

const ElectricCar = function (maker, speed, charge) {
  ChallCar.call(this, maker, speed);
  this.charge = charge;
};
ElectricCar.prototype = Object.create(ChallCar.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`The battery is ${this.charge} percent.`);
};

ElectricCar.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  return console.log(
    `${this.maker} is moving at ${this.speed} with ${this.charge} % battery left.`
  );
};

ElectricCar.prototype.brake = function () {
  this.speed -= 5;
  this.charge -= 1;
  return console.log(
    `${this.maker} is moving at ${this.speed} with ${this.charge} % battery left.`
  );
};

const tesla = new ElectricCar('Tesla', 120, 23);
tesla.chargeBattery(2);

// tesla.accelerate();
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.accelerate();
// tesla.accelerate();

///////////////////////////////////////
// Coding Challenge #4

// 1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private;
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!
// DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%
// GOOD LUCK 😀

class EVCl extends ChallCar {
  _charge;
  constructor(maker, speed, charge) {
    super(maker, speed);
    this._charge = charge;
  }
  accelerate(val) {
    this.speed += val;
    this._charge--;
    console.log(
      `${this.maker} is going at ${this.speed} km/h, with ${this._charge}% left battery`
    );
    return this;
  }
  chargeBattery(val) {
    this._charge += val;
    console.log(`Battery charged to ${this._charge}%! Ready to go!!`);
    return this;
  }

  brake(val) {
    this.speed -= val;
    this._charge--;

    console.log(
      `${this.maker} is going at ${this.speed} km/h, with ${this._charge}% left battery`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian
  .accelerate(14)
  .accelerate(36)
  .brake(15)
  .accelerate(20)
  .brake(100)
  .chargeBattery(200)
  .brake(75);
//////////////////////////////
// class Clothing {
//   constructor(brand, fabric, color) {
//     this.brand = brand;
//     this.fabric = fabric;
//     this.color = color;
//   }
//   shade(white, black) {
//     this.white = white;
//     this.black = black;
//     return console.log(
//       `This ${this.color} clothing from ${this.brand} is made in ${this.fabric}, it has ${this.white}% white, ${this.black}% black.`
//     );
//   }

//   static symmetrical() {
//     console.log(`This clothing is symmetrical!`);
//   }
// }

// class Jeans extends Clothing {
//   constructor(brand, fabric, color, pockets) {
//     super(brand, fabric, color);
//     this.pockets = pockets;
//   }
//   // shade(white, black) {
//   //   super(white, black);
//   // this.opacity = opacity;
//   // return console.log(
//   //   `This ${this.color} clothing from ${this.brand} is made in ${this.fabric}, it has ${this.white}% white, ${this.black}% black and an opacity of ${this.opacity}%.`
//   // );
//   // }
// }

// Jeans.symmetrical();
// Jeans.prototype.shade = function (white, black, opacity) {
//   this.black = black;
//   this.white = white;
//   this.opacity = opacity;
//   return console.log(
//     `This ${this.color} clothing from ${this.brand} is made in ${this.fabric}, it has ${this.white}% white, ${this.black}% black and an opacity of ${this.opacity}%.`
//   );
// };

// const ralphlo = new Jeans('Ralhp', 'Denim', 'blue', 2);
// ralphlo.shade(12, 28, 0.4);

// //1) Public fields
// //2) Private fields
// //3) Public methods
// //4) Private methods
// // Static methods

// class Account {
//   //1) Public fields (instances)
//   locale = navigator.language;

//   //2) Private fields
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     // Protected property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Welcome ${owner}, we hope to see you forever here!!`);
//   }

//   //3) Public methods
//   getMovements() {
//     return this.#movements;
//   }
//   getSum() {
//     return this.#movements.reduce((a, b) => a + b);
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     this.balance = this.#movements.reduce((a, b) => a + b);
//     return this;
//   }

//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   //4) Private methods
//   _approve(val) {
//     this.#movements.push(val);

//     console.log(
//       `You received your loan SIR, your balance is now ${this.getSum()}!`
//     );
//   }
//   _requestLoan(val) {
//     val <= this.balance
//       ? (true,
//         console.log(
//           `You asked for a ${val} loan, Yes ofc SIR, your bank account is now ${this.balance} and you will receive your loan soon.`
//         ),
//         this._approve(val))
//       : (false,
//         console.log(
//           `ya askd for a ${val} loan, Fk no!! your bank account is now ${this.balance}`
//         ));
//   }

//   static helper() {
//     console.log('Helper');
//   }
// }

// const acc1 = new Account('Esteban', 'Dinero', 1232);

// // acc1._requestLoan(200);
// // acc1.deposit(200);
// // acc1.deposit(200);
// // acc1.deposit(200);
// // acc1.withdraw(125);
// // acc1.deposit(200);
// // acc1.deposit(200);
// // // acc1.#requestLoan(2200);
// // acc1._requestLoan(2200);
// // // acc1.#requestLoan(200);
// // acc1._requestLoan(200);
// // console.log(acc1);
// // // console.log(acc1.#movements);
// // Account.helper();

// // Chaining
// acc1.deposit(300).deposit(150).deposit(300).deposit(150);
// console.log(acc1.getMovements());

// class Fish {
//   #waterDeep = [];
//   #captured;
//   #ate;
//   static numberOfFishes = 0;
//   constructor(name, type, water, catches) {
//     this.name = name;
//     this.type = type;
//     this.water = water;
//     this.#captured = this.catches;
//   }

//   intro(value) {
//     console.log(value);
//   }
//   get waterDeep() {
//     return this.#waterDeep;
//   }

//   set waterDeep(val) {
//     this._waterDeep.push(val);
//   }

//   static calcSum() {
//     console.log('sum');
//   }
// }

// const brochet = new Fish('Brochet', 'predator', 'freshwater', 92);
// console.log(brochet);
