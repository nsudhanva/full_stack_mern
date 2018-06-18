var names = ['ramesh','suresh','veeresh','ganesh','suresh'];

function findName(names,search){
    var present = names.find(function(name){
        return name === search;
    });

    return present;
}

console.log(findName(names,'suresh'));  