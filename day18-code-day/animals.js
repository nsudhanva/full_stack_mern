// [
//     'King Kong the gorilla is 42', 
//     'Nemo the fish is 5',
//     'Punzsutawney Phil the groundhog is 11'
//   ]
function zooInventory(a){
    var result1 = [];
    var result2 = [];
    var store = [];
    // var store = a.forEach(function(value){
    //     console.log(value);
    //     result1.push(value[0],value[1][0],value[1][1]);
    //     console.log(result1.join(','));
    // })
    //return store;
    for(var i = 0;i < a.length;i++){
        result1.push(a[i][0] + ' the ' + a[i][1][0] + ' is ' + a[i][1][1]);
    }
    return result1;
    
}
var myZoo = [["King Kong", ["gorilla", 42]],["Nemo", ["fish", 5]],["Punxsutawney Phil", ["groundhog", 11]]
  ];
console.log(zooInventory(myZoo));