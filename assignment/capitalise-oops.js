class Capital{
	constructor(str){
		this.str = str;
	}
	capitalizeWords(){
		let temp = [];
		temp = this.str.split(' ');
		let result = '';
		for(let i = 0;i < this.str.length;i++){
            console.log(temp[i])
			let prev = temp[i].charAt(0).toUpperCase();
			result = result + prev + temp[i].slice(1) + ' ';
		}
		return result;
	}
}

function capitalizeWords(a){
 let cap = new Capital('shreedhar hegde');	
	return cap.capitalizeWords();
}

console.log(capitalizeWords(capitalizeWords()));