// The following iterative sequence is defined for the set of positive integers:

// n → n/2 (n is even)
// n → 3n + 1 (n is odd)

// Using the rule above and starting with 13, we generate the following sequence:

// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

// Which starting number, under one million, produces the longest chain?

function Collatz(input) {

    let store = [];
    let result = {};
    let max_length = 0;
    let number = 0;
    for (let i = 1; i < 1000000; i++) {
        let num = i;
        store = [];

   // console.log(store,store.length);
    store.push(num);

        check(num);

        function check(num) {
            if (num % 2 == 0) {
                divide(num);
            }
            else {
                makeOdd(num);
            }
        }

        function divide(num) {
            num = num / 2;
            store.push(num);
            //console.log(num);
            if (num > 1) {
                check(num);
            }

        }

        function makeOdd(num) {
            num = 3 * num + 1;
            store.push(num);
            //console.log(num);
            if (num > 1) {
                check(num);
            }

        }

        if(store.length > max_length){
            max_length = store.length;
            number = num;
        }
    

    }
   

    return number;

}

console.log(Collatz());
//console.log(Collatz(10));