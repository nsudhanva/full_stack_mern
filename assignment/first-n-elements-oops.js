class Elements{
    constructor (a, b){
        this.a = a;
        this.b = b;
    }
     firstElements(){
        let result = [];
        if(this.a == [] || this.b < 0){
            return [];
        }
        
        else if(this.b == undefined){
            return this.a[0];
        }
        else if(this.a != null && this.b > 0){
            if(this.b > this.a.length){
                for(let i = 0;i < a.length;i++){
                    result.push(this.a[i]);
                }
            }
            else{
                for(let i = 0;i < this.b;i++){
                result.push(this.a[i]);
                }
            }
        }
        return result;
    }
}

function firstElements(a,b){
    let obj = new Elements(a,b);
    return obj.firstElements();
}

	let a = [7,9,0,-2];
	console.log(firstElements(a,-3));