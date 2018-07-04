// You will be given an array which lists the current inventory of stock in your store. Example:

var currentInventory = [ {name: "HTC", stock: 25},{name: "Nokia", stock: 1000}, {name: "Samsung", stock: 50},{name: "Sony", stock: 10}, {name: "Apple", stock: 15}];

// You will also be given an array which lists the new inventory being delivered to your store today. Example:

var newInventory = [ {name: "LG", stock: 5}, {name: "Sony", stock: 10}, {name: "Samsung", stock: 5}, {name: "Apple", stock: 15}];

// Your task is to write a function that when invoked

// updateInventory(currentInventory, newInventory);

// returns the updated list of your current inventory :

// [{name: "HTC", stock: 25}, {name: "Nokia", stock: 1000}, {name: "Samsung", stock: 55}, {name: "Sony", stock: 20}, {name: "Apple", stock: 30},{name: "LG", stock: 5}]

// Following things to keep in mind.

// for mobiles, you will need to use a constructor function
// method to display the stock
// method to add to stock

function updateInventory(currentInventory,newInventory){
    var result = [];
        currentInventory.forEach(function(value){
        var store = newInventory.find(function(item){         
            return value.name === item.name;
        });
        result.push(store);
    if(store == undefined){
        currentInventory.push(value);
    }
    else{
    store.stock = store.stock + newInventory.stock;
    }
});
return currentInventory;

}
console.log(updateInventory(currentInventory, newInventory));

