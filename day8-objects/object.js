//An object is an unorderd key indexed collection of values.
var productArr = ['Marker',25,5,'camlin'];

var product = {
    name:'Marker',
    price:25,
    units:5,
    maker:'Camlin'
};
console.log(product['name']);
console.log(product.name);

var player = { name: 'Virat', captian:true, battingAvg:50.75, country:'India', age:30}
console.log('Name', player.name);
console.log('Captian', player.captian);
console.log('Batting average', player.battingAvg);

console.log(typeof player);
console.log(Array.isArray(productArr));
console.log(typeof product);
console.log(Array.isArray(player));
