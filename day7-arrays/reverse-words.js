var str = 'I.like.this.program.very.much';

function reverseWords(str){
    var array = [];
    array = str.split('.');
    console.log(array);
    var print = [];
    for(var i = array.length-1;i >= 0 ;i--){
       print.push(array[i]);
    }
    return print.join('.');
}
console.log(reverseWords(str));