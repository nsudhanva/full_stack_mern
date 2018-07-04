function clearArray(a){
	var result = [];
	for(var i = 0;i < a.length;i++){
 			if(( a[i])){
	 		result.push(a[i]);
			}
 }
	 return result;
}

console.log(clearArray([NaN, 0, 15, false, -22, '',undefined, 47, null]))