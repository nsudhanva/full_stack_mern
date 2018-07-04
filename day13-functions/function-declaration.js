function greeting(name){//name = parametr,parameters are also local variables that can be used within the function
    return 'Hi ' + name;
}
//to demonstrate tht we can directly pas argument to function call
console.log(greeting('Shreedhar'));//'Shreedhar' = argument

//to demonstrate that we can pass a variable as an argument to the function call and also we can have different names for our parameter an argument
function sayHello(name){
    return 'Hello ' + firstName;
}
var firstName = 'Rahul';
console.log(sayHello(name));

//to demonstrate that we can pass a variable as an argument to thr function call, and also we can have same name for our parameter and our argument
function sayHi(name){
    return 'Hi ' + name;
}
var name = 'Ganapati';
console.log(sayHi(name));








var name = 'Shreedhar';
console.log(sayHi(name));
console.log(sayHello(name));