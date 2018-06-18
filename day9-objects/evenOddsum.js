obj1 = {evens: [10,20,30]};
obj2 = {odds: [15,25,35]};

function addEvenOdds(obj1,obj2){
    var evenSum = 0;
        for(var i = 0;i < obj1.evens.length;i++){
            evenSum = evenSum + obj1.evens[i];
    }
    var oddSum = 0;
        for(var j = 0;j < obj2.odds.length;j++){
            oddSum = oddSum + obj2.odds[j];
        }
    return [evenSum,oddSum]
}

console.log(addEvenOdds(obj1,obj2));
console.log('....................');

