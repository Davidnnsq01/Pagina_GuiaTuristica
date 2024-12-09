function initMap() {
    const tunja = { lat: 5.544, lng: -73.357 }; // Coordenadas de Tunja
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: tunja,
    });
    const marker = new google.maps.Marker({
        position: tunja,
        map: map,
    });
}