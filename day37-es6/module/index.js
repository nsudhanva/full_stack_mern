//console.log(require('./math.js'));
const math = require('./math.js');
const {add,sub,city} = require('./math')//object destructuring
console.log(math.add(10, 20));
console.log(add(10,20),sub(20,10),city);