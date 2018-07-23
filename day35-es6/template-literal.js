var source = 'Bengaluru';
var destination = 'Mysuru';
var distance = 150;
var timeTaken = '3 hrs 30 min';
var computeTime = function(speed){
    return distance/speed;
}

console.log('The distance from ' + source + ' to  ' + destination + 'is '+ distance);

console.log(`The distance from ${source} to ${destination} is ${distance} kms`);

console.log(`The time taken at the speed of 50 is ${computeTime(50)} hrs`);