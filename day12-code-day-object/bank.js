// var person = {
//     name: 'Shreedhar',
//     display: function(title){
//         return `${title} ${this.name}`
//     } 
// }

// console.log(person.display('Mr'));
// console.log(person.display('Dr'));

var bank = {
    accountNumber:123456789,
    Name : 'Shreedhar',
    Balance : 25000,
    currBal:function(){return this.Balance},
    transaction : function(amount,code){
        if(amount > this.Balance){
            return `insufficient balance`;
        }
        else if(code == 1){
            var currentBalance = this.Balance + amount;
            return `current balance is ${currentBalance}.${amount} deposited.`;
        }
        else if(code == 0){
            
                currentBalance = this.Balance - amount;
                return `current balance is ${currentBalance}.${amount} withdrawn.`;
        }

    }
}

console.log(bank.currBal());
console.log(bank.transaction(1000,0));
console.log(bank.transaction(10000,1));
console.log(bank.transaction(100000,0));

