// Write a JavaScript function to get nth largest element from an unsorted array. 

// Test Data :
// 1. nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4);
// return 89

// 2. nthlargest([10,5,20,25],2);
// return 20
// const nthLargest = (a,b) => {
//    let sorted = a.sort();
//    return sorted[b];
// }

class Large{
	constructor(a, b){
		this.a = a;
		this.b = b;
	}
	
	nthLargest(a, b){
		if(this.a.length == 0 || this.b < 0){
			return 'invalid input';
		}
		
        let sorted = this.a.sort();
        console.log(sorted);
		return sorted[this.b - 1];
	}
}

function nthLargest(a,b){
 	let obj = new Large(a,b);
	return obj.nthLargest();
}
console.log(nthLargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));