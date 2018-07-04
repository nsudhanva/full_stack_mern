//any variable defined outside the function, is a global variable in javascript
var name = 'Shreedhar';

function sayHello(){
    return 'Hi ' + name;
}
console.log(sayHello());

function person(){
//a variable defined inside a function, its availability is only within the function,these variables cannot be accessed outside the function.In javascript the variables are functions scoped
var city = 'Bengaluru';
    console.log(city);
}
person();
//console.log(city)//cannot access the city variable that has been defined inside the person function

function movie(){
    //if variables are defined without the keyword var, they become a global variable and are available outside the function
    actor = 'Jackie chan';
    console.log(actor);
}
movie();
console.log(actor);
