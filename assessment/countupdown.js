function countUpThenDown(a){
	var result = [];
 	for(var i = 0;i <= a;i++){
         console.log(i);
		result.push(i);
    }
    console.log(i);
	for(var j = a;j > 0;j--){
        console.log(j);
		result.push(j);
	}
		return result;
}

console.log(countUpThenDown(2));