// Rules
//  	1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

function wave(a){
    let result;
    let print = [];
    let splitted = a.split('');
    for(let i = 0;i < splitted.length;i++){
        let res = splitted[i].toUpperCase()+splitted.slice(i + 1,splitted.length);
        let temp = splitted.slice(0,i);
        result = temp+res;
        print.push(result.replace(/,/g,''));
    }
    return print;
}
console.log(wave('Gap'));