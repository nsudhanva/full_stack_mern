var Capitalize_Words = (string) => {
	let temp = [];
	temp = string.split(' ');
	let result = '';
	for(let i = 0; i < temp.length;i++){
		let prev = temp[i].charAt(0).toUpperCase();
		result = result + prev + temp[i].slice(1) + ' ';
	}
	return result;
}

console.log(Capitalize_Words('shreedhar hegde'));	