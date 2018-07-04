// Example:

// Input 
// 1.
// batman
// superman

// 2.
// manbat
// batman

// Output: 

// 2
// equal 

function strWeight(a,b){
    var weight1 = 0;
    for(var i = 0;i < a.length;i++){
        console.log(a.charCodeAt(i));
         weight1 = weight1 + a.charCodeAt(i);
    }
    console.log(weight1);
    var weight2 = 0;
    for(var i = 0;i < b.length;i++){
        weight2 = weight2 + b.charCodeAt(i);
    }
    console.log(weight1);    
    if(weight1 > weight2){
        return 1;
    }
    else if(weight2 > weight1){
        return 2;
    }
    else{
        return 'equal'; 
    }

}
console.log(strWeight('superman','batman'));