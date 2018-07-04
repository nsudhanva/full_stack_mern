var student = {
    name:'Rakesh',
    city:'Tumkur',
    education:'BE',
    college:'SIT',
    sayName:function(){//when a property holds function as it's value,that property is known as a method
    return `My name is ${this.name}`
    },
    whichCity:function(){
        return `I'm from ${this.city}`
    },
    myEducaton:function(){
        return `my education is ${this.education}`
    },
    myCollege:function(){
        return `I studied in ${this.college}`
    }
}

console.log(student);
console.log(student.sayName())
console.log(student.whichCity());
console.log(student.myEducaton())
console.log(student.myCollege())

var product()
    name: 'Marker',
    price: 'INR 15',
    description: 'white board marker',
    details:function(){
        return `${this.name}-${this.price}-${this.description}`
    }
}

console.log(product.details());

console.log('............................')

var car = {
    model:'Alto 800' ,
    manufacturer: 'Martuthi',
    carState:false,
    start: function(){
        this.carState = true;
        return 'engine started';
    },  
    stop: function(){
        this.carState  = false;
        return 'the engine has stopped';
    },
    drive:function(){
        if(this.carState){
            this.xAxis++;
            return 'the car is moving';
        }
        else{
            return 'start the car first';
        }
        
    },
    xAxis: 0,
    currentPosition: function(){
        return `Car is at position ${this.xAxis} `
    },
    reverse: function(){
       this.xAxis--;
    },

    reset: function(){
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