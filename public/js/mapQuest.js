function initMap() {
	// add your code here
	console.log("initMap called");
	L.mapquest.key='W4vTWaWtekNSVzRVoJWMAks52uXgNDJ9';
	//"map referes to a <div> element with the ID map"
	var map = L.mapquest.map('map', {
		center:[32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom:12,
		zoomControl:false 
	});

	//add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}