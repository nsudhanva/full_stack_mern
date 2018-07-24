function move(a,b,c){
	if(a.length == 0){
		return 'empty array';
	}
	else if(b == undefined || b > a.length){
		return 'element not present at the given index';
	}
	else{
		let temp = a[c];
		a[c] = a[b];
		a[b] = a[c-1];
		a[c-1] = temp;
	}
	
		return a;
}
console.log(move([10,20,30,40,50],6,2));