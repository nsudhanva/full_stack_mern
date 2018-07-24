//es5
let person = {
    firstName: 'Shreedhar',
    city: 'Bengaluru',
    details:function(){
        return `${this.firstName} lives in ${this.city}`
    },
    greet:function(msg){
        return `${this.firstName} says ${msg}`
    }
}

console.log(person);
console.log(person.details());
console.log(person.greet('hello'));

//es6

let student = {
    name:'Shreedhar',
    city:'Mysuru',
    details(){
       return `${this.name} lived in ${this.city}`
    },
    greet(msg){
        return `${this.name} says ${msg}`
    }
}

console.log(student);
console.log(student.details());
console.log(student.greet('get lost'));