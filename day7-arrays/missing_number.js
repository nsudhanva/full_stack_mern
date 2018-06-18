function missingNumber(num){
    for(var i = 0;i < num.length;i++){
        if((num[i + 1] - num[i]) != 1){
            return num[i] + 1;
        }
    }
}
var num = [22,23,24,26];
console.log(missingNumber(num));