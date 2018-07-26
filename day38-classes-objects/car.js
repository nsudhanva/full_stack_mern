class Car{
    constructor(name, make, color, brand, fuelType, seater){
        this.name = name;
        this.make = make;
        this.color = color;
        this.brand = brand;
        this.fuelType = fuelType;
        this.seater = seater;
    }
    details(){
        return `Name:${this.name}, Make:${this.make}, Color:${this.color}, Brand:${this.brand}, Fuel:${this.fuelType}, Seater:${this.seater}`
    }
}

module.exports = {
    Car
}