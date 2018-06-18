var result = {
    source:'Bengaluru',
    destination:'Mysuru',
    distance:150,
    time:'3 hours,30 mins'
}


function distanceFormater(result){
    return `distance between ${result.source} and ${result.destination} is ${result.distance} and time taken is ${result.time}`
}

console.log(distanceFormater(result));

var resultArr = {
    source: ['Bengaluru','karnataka'],
    destination:['Mysuru','karnataka'],
    distance:150,
    time:'3 hours 30 minutes'
}
console.log(resultArr.source);
function distanceFormater(resultArr){
    return `distance between ${resultArr.source[0]},${resultArr.source[1]} and ${resultArr.destination[0]},${resultArr.destination[1]} is ${resultArr.distance} and time taken is ${resultArr.time}`
}

console.log(distanceFormater(resultArr));