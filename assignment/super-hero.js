// TEST CASE -

// 1. superPower(superHeroes, "Molecule Man");
// returns 'Radiation resistance, Turning tiny, Radiation blast'

// 2. superPower(superHeroes, 'Iron Man'); 
// returns 'Iron Man is not in the super heroes list'
var superHeroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

//   function superPower(a,b){
//       if(b.length == 0)
//       {
//           return 'invalid input';
//       }
//     else if(a[0].name == b){
//         return a[0].powers.join(',');
//     }
//     else if(a[1].name == b){
//         return a[1].powers.join(',');
//     }
//     else{
//         return `${b} is not in the superheroes list`;
//     }
//   }
// function superPower(a,b){
//     if((b.length == 0) ||(b == undefined)){
//         return `ivalid input`;
//     }
//     if(!a.includes(b)){
//         return 	`${b} is not in superheroes list`
//     }
//     var result = [];
//     var store = a.forEach(function(value){
//         console.log(value.name);
//         if(value.name == b){
//             result.push(value.powers);
//         }
//     })
//     return result.join(',');
// }
function superPower(a,b){
    if(b.length == 0){
        return `invalid input`;
    }
    if(a.name[0] == b){
        return a.powers.join(',');
        }
    
  else{
        return `${b} is not in the super heroes list`
}
}

  console.log(superPower(superHeroes,'Molecule Man'))