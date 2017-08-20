/**
 * Created by rlawk on 2017-08-11.
 */


function myMap(){
    lat=37.492735;
    lng=127.00785040000005;
    var myCenter=new google.maps.LatLng(lat, lng);
    var mapCanvas=document.getElementById("map_block");
    var mapOptions={center:myCenter, zoom:18};
    var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);
  var infowindow = new google.maps.InfoWindow({
    content: "요기~!"
  });
  infowindow.open(map,marker);
}