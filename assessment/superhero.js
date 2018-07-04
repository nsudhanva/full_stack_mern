function superPower(a,b){
	if(b.length == 0 || b == undefined){
		return `invalid input`;
	}
	for(var i = 0;i < a.length;i++){
        if(a[i].name == b){
            return a[i].powers.join(',');
        }
        else{
            return `${b} is not in the super heroes list`;
        }
    }
}
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
console.log(superPower(superHeroes, "Molecule Man"));