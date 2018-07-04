function Car(model, manufacturer, car_state){
   this.model = model;
   this.manufacturer = manufacturer;
   this.car_state = car_state;
   this.start = function(){
    this.carState = true;
    return 'engine started';
   }
   this.stop = function(){
    this.carState = false;
    return 'engine stopped';
   }
   this.drive = function(){
    if(this.carState){
        this.xAxis++;
        return 'the car is moving';
    }
    else{
        return 'start the car first';
    }
    this.xAxis = 0,
    this.currentPosition = function(){
        return `Car is at position ${this.xAxis} `
    },
    this.reverse = function(){
       this.xAxis--;
    },

    this.reset = function(){
        xAxis = 0,
        this.carState = false;
        return `xAxis is at ${this.xAxis} and car state is off`
    }
    

}
}

var car1 = new Car('Alto','Maruthi',0)
console.log(car1.start);