var result = {
    "destination_addresses" : [ "New York, NY, USA" ],
    "origin_addresses" : [ "Washington, DC, USA" ],
    "rows" : [
       {
          "elements" : [
             {
                "distance" : {
                   "text" : "225 mi",
                   "value" : 361715
                },
                "duration" : {
                   "text" : "3 hours 49 mins",
                   "value" : 13725
                },
                "status" : "OK"
             }
          ]
       }
    ],
    "status" : "OK"
 }

 console.log(result.rows[0].elements[0].distance.text);
 console.log(result.rows[0].elements[0].duration.text);
 console.log(result.destination_addresses[0]);
 

 var destination = result.destination_addresses;
 var origin = result.origin_addresses
 var distance = result.rows[0].elements[0].distance.text
 var duration = result = result.rows[0].elements[0].duration.text

 console.log(`distsnce between ${origin} and ${destination} is ${distance} and time taken is ${duration}`);