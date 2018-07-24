var factorial = (a) => {
	let fact = 1;
	if(a == 0){
		return 1;
	}
	for(let i = 1;i <= a;i++){
        console.log(fact);
		fact = fact * i;
	}
	return fact;
}

console.log(factorial(4));