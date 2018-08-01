class Fake{
	constructor(str){
		this.str = str;
	}
	
	fakeBinary(){
		let result = '';
		let arr = this.str.split('');
		for(let i = 0;i < arr.length;i++){
				if(arr[i] < 5){
                    result = result + '0';
                    console.log(result);	
				}else{
                    result = result + '1';	
                    console.log(result);  
                }
		}
        return parseInt(result);		
	}
}

function fakeBinary(a){
 let f1 = new Fake(a);
f1.fakeBinary(a);
}

console.log(fakeBinary('3457'));