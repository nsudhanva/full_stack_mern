var btnHandle = document.getElementById('btn');
var lat;
var long;
var latHandle = document.getElementById('lat');
var longHandle = document.getElementById('long');
var resultHandle = document.getElementById('result');
var outputHandle = document.getElementById('temp');
btnHandle.addEventListener('click', function(){
    navigator.geolocation.getCurrentPosition(function(position){
        latHandle.innerHTML = `latitude:${position.coords.latitude} `;
        lat = position.coords.latitude;
        longHandle.innerHTML = `longitude:${position.coords.longitude}`;
        long = position.coords.longitude;

        var url = `https://api.darksky.net/forecast/2fcf29102e391f888684caf74d17c682/${lat},${long}`;
        axios.get(url)
        .then(function(response){
            outputHandle.innerHTML = `temperature is ${response.data.currently.temperature}`;
            function initMap(lat,long) {
                console.log(lat);
                var myLatLng = {lat: lat, lng: long};
        
                var map = new google.maps.Map(document.getElementById('map'), {
                  zoom: 4,
                  center: myLatLng
                });
        
                var marker = new google.maps.Marker({
                  position: myLatLng,
                  map: map,
                });
              }
        })

    
        
        .catch(function(err){
    
        });


    });
    
    
});

               


