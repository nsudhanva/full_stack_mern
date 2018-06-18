function firstElements(a,b){
	var result = [];
	if(a == [] || b < 0){
		return [];
	}
	else if(b == undefined){
		return a[0];
	}
	else if(a != null && b > 0){
		if(b > a.length){
			for(var i = 0;i < a.length;i++){
				result.push(a[i]);
			}
		}
		else{
			for(var i = 0;i < b;i++){
			result.push(a[i]);
			}
		}
	}
	return result;
}
	var a = [7,9,0,-2];
	console.log(firstElements(a));