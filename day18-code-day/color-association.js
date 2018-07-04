// colour_association([["white", "goodness"], ["blue", "tranquility"]])

// returns [{'white': "goodness"},{'blue': "tranquility"}])

function colorAssociation(a){
    var result = [];
    a.forEach(function(value){
        var obj = {};
        obj[value[0]] = value[1];
        result.push(obj)
    })
    return result;

}

console.log(colorAssociation([["white", "goodness"], ["blue", "tranquility"]]));