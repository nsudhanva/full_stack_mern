// . An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(word){
    var first_array = [];
    first_array = word.split('');
    console.log(first_array);

    for(var i = 0;i < first_array.length - 1;i++){
       var first_half = word.slice(i,i + 1);
       var second_half = word.slice(i + 1);     
       if(second_half.includes(first_half) || second_half.includes(first_half.toUpperCase())){
           return false;
       }
    }
     return true;
}
console.log(isIsogram('moOse'));