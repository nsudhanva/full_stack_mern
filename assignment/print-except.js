// Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.

// The function should accept either an array or a single integer as parameters, like this:

// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except([1,3]);
// // array2 should contain ['a', 'c', 'e']
// or

// var array = ['a', 'b', 'c', 'd', 'e'];
// var array2 = array.except(1);
// // array2 should contain ['a', 'c', 'd', 'e']        

function arraExcept(a,b){
    let result = [];
    let print = [];
    for(let i = 0;i < a.length;i++){
        for(let j = 0;j < b.length;j++){
            if(a.indexOf(a[i]) == b[j]){
                result.push(a[i]);
            }
        }
    }
    print = a.filter((ele) => {
        return result.indexOf(ele) == -1;
    } )
    return print;
}
var array = ['a', 'b', 'c', 'd', 'e'];
console.log(arraExcept(array,[1]));
//console.log(array2);

