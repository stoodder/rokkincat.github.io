//google map api
function initialize() {

  var greyParksStyles = [

        {
    stylers: [
      { visibility: "on" },
      { hue: "#403D39" },
      { saturation: -100 },
      { lightness: 16 }
    ]
  },{
    featureType: "water",
    stylers: [
      { invert_lightness: true }
    ]
  },{
    featureType: "administrative.province",
    stylers: [
      { visibility: "on" },
      { lightness: 82 },
      { invert_lightness: true }
    ]
  },{
    featureType: "poi.park",
    stylers: [
      { lightness: -21 }
    ]
  },{
    featureType: "administrative.locality",
    elementType: "labels",
    stylers: [
      { invert_lightness: true },
    { lightness: 0 }
    ]
  }

    ];


      var greyMapType = new google.maps.StyledMapType(greyParksStyles,
      {name: "Milwaukee"});

      var mapOptions = {
        zoom: 16,
			scaleControl: false,
			scrollwheel: false,
	        center: new google.maps.LatLng(43.038553,-87.901027),
	    	disableDefaultUI: true,
	        mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP]
	        }
	      };
	      var map = new google.maps.Map(document.getElementById('map_canvas'),
	        mapOptions);

	      map.mapTypes.set('milwaukee', greyMapType);
	      map.setMapTypeId('milwaukee');

    		var companyImage = new google.maps.MarkerImage('images/pointer-red-less.png',
    			new google.maps.Size(60,60),
    			new google.maps.Point(0,0),
    			new google.maps.Point(20,30)
    		);

    		var companyShadow = new google.maps.MarkerImage('images/logo_shadow.png',
    			new google.maps.Size(60,60),
    			new google.maps.Point(0,0),
    			new google.maps.Point(50, 50));

    		var companyPos = new google.maps.LatLng(43.038553,-87.908027);

    		var companyMarker = new google.maps.Marker({
    			position: companyPos,
    			map: map,
    			icon: companyImage,
    			title:"Current Location",
    			zIndex: 3});

}
