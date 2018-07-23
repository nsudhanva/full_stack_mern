//<=2014

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels('hello'));

//var pi = Math.PI;
// console.log(pi);
// pi = Math.PI * 2; //var allows to reassign
// console.log(pi);

const pi = Math.PI;
console.log(pi);
// pi = Math.PI * 2; //TypeError :Assignment to constant variable.
//console.log(pi);

let speed = 62;
console.log('speed');
speed++;
console.log(speed);