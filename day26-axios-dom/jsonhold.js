var appHandle = document.getElementById('app');
axios.get('http://jsonplaceholder.typicode.com/users')
.then(function(response){
console.log(response.data);
var products = response.data;
var table = ` <table border="1">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th> 
                        <th>Address</th>  
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    ${(products.map(function(product){
                        return ` 
                        <tr>
                            <td>${product.id}</td>
                            <td>${product.name}</td>
                            <td>${product.username}</td>
                            <td>${product.email}</td>
                            <td>${product.address}</td>
                            <td>${product.address.zipcode}</td>
                        </tr>
                        `
                    })).join('')}
                </tbody>
            </table>
                
            `;
            appHandle.innerHTML = table;
        })
        .catch(function(err){
            console.log(err);
        })