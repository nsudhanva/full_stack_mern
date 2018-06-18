var products = [
{
    name : 'Sapiens',
    author : 'Harari',
    price : 500
},
{
    name : 'pakshikashi',
    author : 'kuvempu',
    price : 70,
    details : function() {
        return 'Book is ' + this.name + ' author is ' + this.author; 
    }
}
]

console.log('Total products in cart: ', products.length)

//for lop
for(var i = 0; i < products.length;i++)
{
    console.log(products[i].name + ' ' + products[i].author + ' ' + products[i].price);
}

//for each loop
products.forEach(function(product)
{
    console.log(product.name);
})

console.log(products[1].details());





