var categories = [
    {
        "id": 1,
        "name": "Computer"
    },
    {
        "id": 2,
        "name": "Baby"
    },
    {
        "id": 3,
        "name": "Music"
    },
    {
        "id": 4,
        "name": "Kids"
    }
    ];
    var products = [
      {
        "id": 1,
        "name": "Rustic Marble Computer",
        "price": 7997.0,
        "category_id": 1,
        "stock": 647,
        "cod_eligible": true
      },
      {
        "id": 2,
        "name": "Sleek Copper Clock",
        "price": 6177.0,
        "category_id": 1,
        "stock": 436,
        "cod_eligible": true
      },
      {
        "id": 3,
        "name": "Ergonomic Concrete Pants",
        "price": 1732.0,
        "category_id": 2,
        "stock": 68,
        "cod_eligible": true
      },
      {
        "id": 4,
        "name": "Gorgeous Linen Table",
        "price": 4667.0,
        "category_id": 4,
        "stock": 123,
        "cod_eligible": true
      },
      {
        "id": 5,
        "name": "Heavy Duty Silk Knife",
        "price": 3348.0,
        "category_id": 3,
        "stock": 37,
        "cod_eligible": true
      },
      {
        "id": 6,
        "name": "Incredible Plastic Hat",
        "price": 4277.0,
        "category_id": 2,
        "stock": 517,
        "cod_eligible": true
      },
      {
        "id": 7,
        "name": "Ergonomic Plastic Coat",
        "price": 8983.0,
       "category_id": 2,
        "stock": 420,
        "cod_eligible": true
      },
      {
        "id": 8,
        "name": "Enormous Rubber Table",
        "price": 6342.0,
        "category_id": 3,
        "stock": 583,
        "cod_eligible": false
      },
      {
        "id": 9,
        "name": "Heavy Duty Marble Table",
        "price": 9158.0,
        "category_id": 4,
        "stock": 447,
        "cod_eligible": false
      },
      {
        "id": 10,
        "name": "Intelligent Silk Bench",
        "price": 8902.0,
       "category_id": 4,
        "stock": 72,
        "cod_eligible": false
      }
    ]

    let firstDivHandle = document.getElementById('firstDiv');
    let secondDivHandle = document.getElementById('secondDiv');

    let firstSelect = document.createElement('select');
    let secondSelect = document.createElement('select');

    



    firstDivHandle.appendChild(firstSelect);
    secondDivHandle.appendChild(secondSelect);

    firstSelect.setAttribute('id','firstSelect') ;
    secondSelect.setAttribute('id','secondSelect');

    let secondSelectHandle = document.getElementById('secondSelect');


    // selectHandle=document.getElementById('firstselect');
    
    // selectHandle.addEventListener('change',function(){
    //     alert('hai');
    // },false);
    
    let firstSelectHandle = document.getElementById('firstSelect');
    categories.forEach((category) => {
        
        let firstSelectOption = document.createElement('option');
        firstSelectHandle.appendChild(firstSelectOption);
        firstSelectOption.value = category.name;
        firstSelectOption.id = category.id;
        firstTextNode = category.name;
        let firstText = document.createTextNode(firstTextNode);
        firstSelectOption.appendChild(firstText);
        firstSelectHandle.appendChild(firstSelectOption); 
        
    })
   
    firstSelectHandle.addEventListener('change', function(e){
            products.forEach((product) => {
            //console.log(secondSelectHandle);
            if(product.category_id == e.target.selectedOptions[0].id){
            let secondSelectOption = document.createElement('option');
            let text = document.createTextNode(product.name);
            secondSelectOption.appendChild(text);
            secondSelectHandle.appendChild(secondSelectOption);
            }
        }), false})
    
   



