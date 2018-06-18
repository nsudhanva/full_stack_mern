var n1 = 10, n2 = -10.5;
console.log(typeof n1);

//object methods

console.log(Math.PI);//returns pi
console.log(Math.round(n2));//rounds off
console.log(Math.pow(2,3));//returns power
console.log(Math.sqrt(23))//returns square root
console.log(Math.abs(-1.3));//returns absolute value
console.log(Math.floor(23.7));//returns lower closest value
console.log(Math.ceil(21.3));//returns upper value
console.log(Math.min(2,3,1));//returns min
console.log(Math.max(23,1,45));//returns max
console.log(Math.random());//returns a random number

//type conversions

var a = '10', b = 15.5, c = 21, d = '16.6';
console.log(typeof a);//string
console.log(Number(a) + b);//25.5
console.log(Number.parseInt(d));//16
console.log(Number.parseFloat(d));//16.6

console.log(String(b));//'15.5'
console.log(String(c));//'21'

//+ operator

console.log(5 + 5);//10
console.log('Hello' + 'World');
console.log(5 + '5');//'55'
console.log(5 + 5 + '5');//'105'
console.log('5' + 10 + 5) //'51015'
console.log('5' + (10 + 5));//'515'

var numbers = '10 20 30';
console.log(numbers.split(' '));//['10','20','30']
console.log(parseInt(numbers));//10
console.log(parseFloat(numbers))//10
console.log(Number(numbers));//NaN