const {Products} = require('./products');

const express = require('express');

const app = express();

const port = 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use((req, res, next) => {
    console.log(`${req.method}|${req.url}|${req.ip}|${new Date()}`);
    next();
});

app.get('/products', (req, res) => {
    let result = Products.findAll();
    res.send(result);
});

app.get('/products/:id', (req, res) => {
    let result = Products.findOne(req.params.id);
    res.send(result);
})

app.put('/products/:id', (req, res) => {
    let result = Products.findOneAndUpdate(req.params.id);
    if(result){
        result.price = 1273;
        res.send(result);   
    }
})

app.post('/products',(req,res) => {
    let result = req.body;
    let obj = new Products(result);
    obj.save();
    res.send('created sucssessfully');
    
})

app.delete('/products/:id', (req,res) => {
    let result = Products.findOneAndRemove(req.params.id);
    if(result){
        res.send('deleted successfully');
    }
})

app.listen(port, () => {
    console.log('Listening on port', port);
});