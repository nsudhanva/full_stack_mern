var student = {
    name:'Rakesh',
    city:'Tumkur',
    education:'BE',
    college:'SIT',
    sayName(){//when a property holds function as it's value,that property is known as a method
    return `My name is ${this.name}`
    },
    whichCity(){
        return `I'm from ${this.city}`
    },
    myEducaton(){
        return `my education is ${this.education}`
    },
    myCollege(){
        return `I studied in ${this.college}`
    }
}

console.log(student);
console.log(student.sayName())
console.log(student.whichCity());
console.log(student.myEducaton())
console.log(student.myCollege())

var product = {
    name: 'Marker',
    price: 'INR 15',
    description: 'white board marker',
    details(){
        return `${this.name}-${this.price}-${this.description}`
    }
}

console.log(product.details());

console.log('............................')

let car = {
    model:'Alto 800' ,
    manufacturer: 'Martuthi',
    carState:false,
    start(){
        this.carState = true;
        return 'engine started';
    },  
    stop(){
        this.carState  = false;
        return 'the engine has stopped';
    },
    drive(){
        if(this.carState){
            this.xAxis++;
            return 'the car is moving';
        }
        else{
            return 'start the car first';
        }
        
    },
    xAxis: 0,
    currentPosition(){
        return `Car is at position ${this.xAxis} `
    },
    reverse(){
       this.xAxis--;
    },

    reset(){
        xAxis = 0,
        this.carState = false;
        return `xAxis is at ${this.xAxis} and car state is off`
    }
}

console.log(car.model);
console.log(car.manufacturer);
console.log(car.start());
console.log(car.drive());
console.log(car.currentPosition());
console.log(car.reverse());
//console.log(car.reverse());
console.log(car.currentPosition());
console.log(car.reset());