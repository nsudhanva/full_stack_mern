class Task{
    constructor(name, isCompleted){
        //instance properties
        this.name = name;
        this.isCompleted = false;
    }

    //instance method
    details(){
        return `${this.name}-${this.isCompleted}`
    }

    //class method
    static all(){
        return Task.data;
    }   

    //class method
    static info(){
        return 'I am a class method';
    }
}

//static property
Task.data = [];

let t1 = new Task('go for a walk');
let t2 = new Task('Get grocerires');
//t1 - object of Task class / instance of Task class
//any method or property belonging to an instance(object) is called instance method or instance  property
console.log(t1.name);
console.log(t1.isCompleted);
console.log(t1.details());

console.log(Task.isCompleted);//undefined
//console.log(Task.details());//Task.details is not a function

//console.log(t1.info()); //TypeError:t1.info is not a function
console.log(Task.info());

//data is defined as a static property
//console.log(t1.data); undefined

console.log(Task.data);
console.log(Task.all());

console.log(t2.name);
console.log(t2.isCompleted);