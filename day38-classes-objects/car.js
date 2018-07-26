class Car{
    constructor(name, make, color, brand, fuelType, seater){
        this.name = name;
        this.make = make;
        this.color = color;
        this.brand = brand;
        this.fuelType = fuelType;
        this.seater = seater;
        this.xAxis = 0;
    }
    details(){
        return `Name:${this.name}, Make:${this.make}, Color:${this.color}, Brand:${this.brand}, Fuel:${this.fuelType}, Seater:${this.seater}`
    }

    reset(){
        this.xAxis = 0;
    }

    getPosition(){
        return `${this.name}-${this.xAxis}`
    }

    move(){
        this.xAxis++;
    }
    
    reverse(){
        this.xAxis--;
    }
}

module.exports = {
    Car
}