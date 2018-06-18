var pets = [
    {
        "name": "Meowsy",
        "species": "cat",
        "petFoods": [
            { "likes": ["tuna", "catnip"] }, 
            { "dislikes": ["ham", "zucchini"] }
        ]
    },
    {
        "name": "Barky",
        "species": "dog",
        "petFoods": [
            { "likes": ["bones", "carrots"] },
            { "dislikes": ["tuna"] } 
        ]
    },
    {
        "name": "Purrpaws",
        "species": "cat",
        "petFoods": [
            { "likes": ["mice"] }, 
            { "dislikes": ["cookies"] }
        ]
    }
]

function petDetails(pet) {
    return `${pet.name} the ${pet.species} likes ${pet.petFoods[0].likes.join(',')} dislikes 
    ${pet.petFoods[1].dislikes.join(',')} `
}

pets.forEach(function(pet){
    console.log(petDetails(pet));
})

