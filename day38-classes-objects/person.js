//es5
function Person(firstName, LastName){
//assigning default values
    this.firstName = firstName;
    this.LastName = LastName;
    this.details = function(){
        return this.firstName + ' ' + this.LastName;
    };
    this.greet = function(){
        return 'Hello, My name is ' + this.firstName;
    };
}

let p1 = new Person('Ravi', 'Subbu');
console.log(p1.firstName);
console.log(p1.LastName);
console.log(p1.details());
console.log(p1.greet());

let p2 = new Person('Madhu', 'Priya')
console.log(p2.details());
console.log(p2.greet());

//es6

class Player{
    constructor(name, avg = 0){
        this.name = name;
        this.avg = avg;
    }

    details(){
        return `name is ${this.name} and average is ${this.avg}`
    }
}

let player1 = new Player('Sachin',50);
console.log(player1.details());
console.log(player1.secondName = 'Steve');

let player2 = new Player('Dravid','45');
console.log(player2.details());