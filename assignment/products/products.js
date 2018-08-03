class Products{
   
    constructor(result){
        this.id = result.id;
        this.name = result.name;
        this.price = result.price;
        this.categoryId = result.categoryId;
    }

    save(){
        // let temp = {
        //     id:this.id,
        //     name:this.name,
        //     price:this.price,
        //     categoryId:this.categoryId
        // }

        Products.data.push(this);
    }

    static findAll(){
        return Products.data;
    }

    static findOne(id){
        let result = Products.data.filter((product) => {return product.id == id})
        return result;
    }

    static findOneAndUpdate(id){
        let product = Products.data.find((product) => {
            return product.id == id;
        });
        return product;
    }

    static findOneAndRemove(id){
        let product = Products.data.find((product) => {
            return product.id == id;
        })

        let index = Products.data.findIndex((product) => {
            return product.id == id;
        });

        if(index >= 0){
            Products.data.splice(index, 1);
            return true;
        }
    
    }

    static findByCategoryId(id){
        let productByCategory = [];
         Products.data.forEach((product) => {
            if(product.categoryId == id){
                productByCategory.push(product);
            }
         })
        return productByCategory;
    }}

Products.data = [
    {id:1, name:'scale', price:10, categoryId:1},
    {id:2, name:'pen', price:20, categoryId:1},
    {id:3, name:'shoe', price:500, categoryId:2},
    {id:4, name:'ball', price:50, categoryId:2}
]

//console.log(Products.findOneAndRemove(1));
//console.log(Products.data);
//console.log(Products.findOneAndUpdate(1));
//onsole.log(Products.data);
//console.log(Products.findByCategoryId(2));

module.exports = {
    Products
}