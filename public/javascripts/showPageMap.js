mapboxgl.accessToken = mapToken;
// cafe = JSON.parse(cafe);
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: cafe.geometry.coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
    map.setFog({}); // Set the default atmosphere style
});

const marker1 = new mapboxgl.Marker()
.setLngLat(cafe.geometry.coordinates)
.setPopup(new mapboxgl.Popup({offset:25}).setHTML(`<h5>${cafe.title}</h5><p>${cafe.location}</p>`))
.addTo(map);