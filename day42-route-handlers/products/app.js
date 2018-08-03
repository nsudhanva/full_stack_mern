const express = require('express');
const app = express();

const port = 3000;

const bodyParser = require('body-parser');

//logger middleware
app.use((req, res, next) => {
    console.log(`${req.method}|${req.url}|${req.ip}|${new Date()}`);
    next();
});

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send({
        msg: 'welcome to ecommerce store'
    })
});


//REST - Representational State Transfer Protocol
//To PERFORM AN OPERATION ON A RESOURCE / DATA YOUY WILL NEED TO GO TO AN END POINT WITH A SPECIFI HTTP METHOD

//dummy db
let products = [{
    id:1,
    name:'marker',
    price:'15'
},
{
    id:2,
    name:'scale',
    price:5
},
{
    id:3,
    name:'board',
    price:75
}]

//READ
//GET - /products
//GET - /products/:id (show a particular product)
//app.METHOD(PATH, HANDLER)
app.get('/products', (req, res) => {
    //write code to get data from the database
    // res.send({
    //     msg: ' get request made for /products'
    // });
    let product = products.find((product) => {
        return product.id == req.params.id;
    });

    if(product){
        res.send(product);
    }else{
        res.send({
            notice: 'not found'
        })
    }
});

//CREATE
//POST - /products
//app.METHOD(PATH, HANDLER)
app.post('/products', (req, res) => {
    //write code to nsert record into database
    // res.send({
    //     msg: `put request made for /products/${req.params.id}`
    // })

    let product = req.body;
    products.push(product);
    res.send({
        product,
        notice: 'successfully created product'
    });
    
});

//UPDATE
//PUT - /producs/:id
app.put('/products/:id', (req, res) => {
    //write code to find  the record and update the record inside the database
    let product = products.find((product) => {
        return product.id == req.params.id;
    });

    if(product){
        res.send(product);
    }else{
        res.send({
            notice: 'not found'
        })
    }
})


//DESTORY
//DELETE - /products/:id
app.delete('/products/:id', (req, res) => {
    //write code to find  the record and delete in the database

    let index = products.findIndex((product) => {
        return product.id == req.params.id;
    });
    if(index >= 0){
        products.splice(index, 1);

        res.send({
            msg:`successfully deleted`
        })
    } else{
        res.send({
            msg:`not found`
        })
    }
   
});



app.listen(port, () => {
    console.log('Listening on port', port);
});

