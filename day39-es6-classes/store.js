class Invoice{
    constructor(name, price, quantity){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    generateBill(){
        return `${this.name.toUpperCase()} INR-${this.price} QTY-${this.quantity} Total-${this.price * this.quantity}`
    }
}

let i1 = new Invoice('marker', 15, 3);
console.log(i1.generateBill());