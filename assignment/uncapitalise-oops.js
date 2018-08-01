class Cap{
	constructor(str){
		this.str = str;
	}
	
	unCap(){
		let temp = [];
		temp = this.str.split(' ');
		let result = '';
		for(let i = 0;i < temp.length;i++){
           // console.log(temp[i].charAt(0));
            let prev = temp[i].charAt(0).toLowerCase();
            console.log(prev);
            result = result + prev + temp.slice(1) + ' ';
            
		}
		//return result;
	}
}

function unCap(a){
 let uncap = new Cap(a);
	return uncap.unCap();
}

console.log(unCap('Js String Exercises'));