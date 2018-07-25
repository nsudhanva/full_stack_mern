let loop = require('./data-product')
let sum = 0;
loop.data.forEach(function(ele){
    console.log(ele.name); 
    sum += ele.price;
})

console.log(sum);