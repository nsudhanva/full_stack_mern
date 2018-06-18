var numbers = [1,2,3,4,5,6,7,8,9,0];
numbers.push(23);
console.log(numbers);

var a = numbers.slice(0,3);
console.log(a);
a = a.join('');
console.log('(',a,')');
var b = numbers.slice(3,6);
console.log(b);
b = b.join('');
console.log(b);
var c = numbers.slice(6,10);
c = c.join('');

console.log(c);
console.log(`(${a}) ${b}-${c}`);

var odds = [15,25];
var evens = [10,20];
var numbers = evens.concat(odds);
console.log(numbers);

var names = ['ganesh','suresh','mahesh','ganesh'];

console.log(names.lastIndexOf('ganesh'));
console.log(names.lastIndexOf('shree'));

if(names.indexOf('ganesh') == names.lastIndexOf('ganesh')){
    console.log('unique');
}
else {
    console.log('repeated');
}


for(var i = 0;i < names.length;i++){
    console.log(names[i].toUpperCase());
}

numbers = [10,20,30,40];
var sum = 0;
for(var j = 0;j < numbers.length;j++){
    console.log(`index - ${j}|sum - ${sum}|n - ${numbers}`);
    sum = sum + numbers[j];
    console.log(`index - ${j}|sum - ${sum}|n - ${numbers}`);
    
}

console.log(sum);

var prices = [10,20,30,40,50,60];
var evenSum = 0;
 for(var k = 0;k < prices.length;k++){
    if(k % 2 == 0){
        evenSum = evenSum + prices[k];
    }
 }

 console.log(evenSum)


 function sumValue(val)
 {
    var sum = 0, count = 0;
    for(var a = 0;a < values.length;a++){
        if(values[a] % 2 == 0){
            var sum = sum + values[a]; 
        }
        else{
            count++;
        }
    }
    return [sum,count];
}
var values = [10,15,20,25,30,40];
console.log(sumValue(values));
