// Mapa Leaflet para ESPOL
function inicializarMapa() {
    // Verificar si el elemento del mapa existe
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.error('Elemento #map no encontrado');
        return;
    }
    
    // Coordenadas de ESPOL
    const espolCoords = [-2.146798, -79.967859];
    
    try {
        // Crear el mapa
        const map = L.map('map').setView(espolCoords, 16);
        
        // Añadir capa de tiles de OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);
        
        // Marcador personalizado para ESPOL
        const espolIcon = L.divIcon({
            className: 'espol-marker',
            html: '🏫',
            iconSize: [30, 30],
            iconAnchor: [15, 30]
        });
        
        // Añadir marcador con popup
        L.marker(espolCoords, { icon: espolIcon })
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <strong>ESPOL</strong><br>
                    <em>Escuela Superior Politécnica del Litoral</em><br>
                    Campus Gustavo Galindo
                </div>
            `)
            .openPopup();
        
        // Añadir círculo para destacar la ubicación
        L.circle(espolCoords, {
            color: '#3498db',
            fillColor: '#3498db',
            fillOpacity: 0.1,
            radius: 100
        }).addTo(map);
        
        console.log('Mapa de ESPOL inicializado correctamente');
        
    } catch (error) {
        console.error('Error al inicializar el mapa Leaflet:', error);
    }
}

// Esperar a que TODO esté completamente cargado, incluyendo Leaflet
window.addEventListener('load', function() {
    // Pequeño delay para asegurar que Leaflet esté disponible
    setTimeout(inicializarMapa, 100);
});