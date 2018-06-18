var product = {
    name:'Marker',
    price:15
}

console.log(product.name);
console.log(product['name']);

console.log(Object.keys(product));
//console.log(Object.values(product));

//console.log(Object.values(product).includes('camil'));

console.log(product.hasOwnProperty('name'));//true

//adding a new property into an object

product.description = 'white board marker';
product['company'] = 'cello';
console.log(product);

//note-vannot access properties via . operator,can only be done via square brackets

for(var key in product) {
    console.log(`${key} - ${product[key]}`)
}
