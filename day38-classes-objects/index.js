const {Car} = require('./car'); //const Car = require('./car').Car


let car1 = new Car('Maruti800',1990,'Black','Maruthi','Diesel','8');
console.log(car1.details());

let car2 = new Car('Endeavour',1900,'White','Ford','Diesel','8');
console.log(car2.details());

let car3 = new Car('Creta',2015,'Brown','Hundai','Petrol','5');
console.log(car3.details());

console.log(car1.getPosition());
car1.move();
car1.move();
console.log(car1.getPosition());
car1.reset();
console.log(car1.getPosition());