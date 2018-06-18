var book1 = {
    name: 'The day of the Jackal',
    author:'Frederick Forsyth',
    price: 215,
    published:'20/10/2018',
    kindle:true
}

var book2 = {
    name:'Afghan',
    author:'Frederick Forsyth',
    price:162,
    published:'8/11/1996',
    kindle:false

}

var book3 = {
    name:'Avenger',
    author:'Frederick Forsyth',
    price:220,
    published:'1/12/2000',
    kindle:true
}

var store = [];
store.push(book1,book2,book3)

var print = store.forEach(function(book,number){
    console.log(`${number+1}|book name:${book.name}|author:${book.author}|price:${book.price}|published date:${book.published}|kindle:${book.kindle}`)
});
