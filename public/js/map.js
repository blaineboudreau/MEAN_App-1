console.log("hi");

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(40.7434534,-74.0049315);
  var mapOptions = {center: myCenter, zoom: 5};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    icon: "http://buffetsingapore.sg/wp-content/uploads/2015/10/icon-clothing-store.svg"
  });
  marker.setMap(map);

  var infowindow = new google.maps.InfoWindow({
    content: "eTrendy"
  });
  infowindow.open(map,marker);
};
