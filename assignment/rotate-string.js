// Sample Input
// "Hello"
// Sample Output
// ["elloH", "lloHe", "loHel", "oHell", "Hello"]  

function rotate(a){
    let splitted = a.split('');
    let replace;
    let result;
    let store = [];
    for(let i = 0;i < splitted.length;i++){
        replace = splitted.slice(i+1).join('');
        let prev = splitted.slice(0,i+1).join('');
        result = replace+prev;
        store.push(result);
    }
    
    return store;
}

console.log(rotate('Hello'));