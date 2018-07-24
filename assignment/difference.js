var difference= (a,b) => { 
	let result = [];
    for(let i = 0;i < a.length;i++){
	 result.push(a[i]);
	}
	for(let j = 0;j < b.length;j++){
		result.push(b[j]);
	}
	let unique = [];
	for(let k = 0;k < result.length;k++){
		if((unique.indexOf(result[k]) )== -1){
			unique.push(result[k]);
		}
	}

	if(unique.length === 0){
		return 'empty array';
	}
	else{
		return unique;
	}
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));