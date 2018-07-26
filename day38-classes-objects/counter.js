class Counter{
    constructor(){
        this.value = 0;
    }

    up(){
        this.value++;
        return this.value;
    }

    down(){
        
        // if(this.value == 0){
        //      this.value = 0;
        //      return this.value;
        // }else{
        //     this.value--;
        //     return this.value;
        // }

        (this.value == 0) ? this.value = 0: this.value--;
        return this.value;
            
    }
    reset(){
        this.value = 0;
        return this.value;
    }

}

let c1 = new Counter();
console.log(c1.up());
console.log(c1.up());
console.log(c1.down());
console.log(c1.down());
console.log(c1.down());
console.log(c1.up());
console.log(c1.up());
console.log(c1.reset());

