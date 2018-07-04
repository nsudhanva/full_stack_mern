function Customer(name,acnt_number,balance){
    this.name = name;
    this.acnt_number = acnt_number;
    this.balance = balance;
    this.transcation = function(code, amount){
        if(code == 0){
            if(amount > this.balance){
                return `insufficient balance`
            }
            this.balance = this.balance - amount; 
            return this.balance;
        }
        else{
            this.balance = this.balance + amount;
            return this.balance;
        }
    }
    this.checkBalance = function(){
        return this.balance;
    }
}

var c1 = new Customer('Rakesh','SBI123',500);
console.log(c1.checkBalance());
console.log(c1.transcation(1,500));
console.log(c1.checkBalance());
console.log(c1.transcation(0,5000));
