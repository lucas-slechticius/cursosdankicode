window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598, -48.577423),
            scrollWheel:false,
            zoom:12,
            mapTypeId:'satellite'
        }

        map = new google.maps.Map(document.getElementById("mapa"), mapProp);
    }

    initialize();

}