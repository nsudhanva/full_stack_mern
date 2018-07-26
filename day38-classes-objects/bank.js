class Bank{
    constructor(name,acnt_number,balance){
        this.name = name;
        this.acnt_number = acnt_number;
        this.balance = balance;
    }

    transcation (code, amount){
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

    checkBalance(){
        return this.balance;
    }
}




var c1 = new Bank('Rakesh','SBI123',500);
console.log(c1.checkBalance());
console.log(c1.transcation(1,500));
console.log(c1.checkBalance());
console.log(c1.transcation(0,5000));
