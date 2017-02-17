function init (){
    
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -25.363, lng: 131.044},
    zoom:14
  });
    
    var myLatLng = {lat: -25.363, lng: 131.044};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}