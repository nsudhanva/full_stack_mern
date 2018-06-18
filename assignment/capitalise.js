function Capitalize_Words(string){
	var temp = [];
	temp = string.split(' ');
	var result = '';
	for(var i = 0; i < temp.length;i++){
		var prev = temp[i].charAt(0).toUpperCase();
		result = result + prev + temp[i].slice(1) + ' ';
	}
	return result;
}

console.log(Capitalize_Words('shreedhar hegde'));