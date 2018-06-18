var salad = {
	"recipe_name": "Basic Fruit Salad", 
	"yields": {
	    	"servings": 6
	  		}, 
	"ingredients": [ 
		{ 
			"apple": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"banana": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"orange": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"grapes": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		}
	], 
	        
	"steps": [
		{ "step1": "Cut the apple into cubes." },
		{ "step2": "Cut the banana into slices." },
		{ "step3": "Peel the orange, and divide into segments."}, 
		{ "step4": "Combine all ingredients in a bowl." }, 
		{ "step5": "Mix to combine." }
	]
}

function prepareReceipe(recipe){
	console.log(`recipe ${salad.recipe_name}`);
	console.log( `serves ${salad.yields.servings} people`);
	console.log(`ingridients`);
	recipe.ingredients.forEach(function(ingridient){
		var item = Object.keys(ingridient);
		console.log(item);
		console.log(ingridient[item].amounts.amount);
		console.log(ingridient[item].amounts.unit);
		console.log(`${item} - ${ingridient[item].amounts.amount} ${ingridient[item].amounts.unit}`);
	})

	recipe.steps.forEach(function(step){
		var stepIndex = Object.keys(step)[0];
		console.log(`${stepIndex} - ${step[stepIndex]}`)
	})
	
}

console.log(prepareReceipe(salad));
