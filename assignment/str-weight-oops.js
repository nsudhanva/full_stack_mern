class Weight{
	constructor(a, b){
		this.a = a;
        this.b = b;
	}
	
	strWeight(){
		let weight1 = 0;
		for(let i = 0;i < this.a.length;i++){
            weight1 = weight1 + this.a[i].charCodeAt();	
            //console.log(this.a[i], this.a[i].charCodeAt());
            console.log(weight1);
		}
		let weight2 = 0;
		for(let i = 0;i < this.b.length;i++){
            weight2 = weight2 + this.b[i].charCodeAt();
            console.log(weight2);	
		}
		console.log(weight1, weight2);
		return (weight1 == weight2) ? 'equal' : ((weight1 > weight2) ? 1 : 2) 
		
	}
}

function strWeight(a,b){
 let obj = new Weight('superman', 'batman');
	return obj.strWeight();
}

console.log(strWeight());