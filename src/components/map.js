// Map.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importa os estilos CSS do Leaflet


const Map = () => {
  // Coordenadas fornecidas
  const initialPosition = [-15.950322738509023, -44.86576100388293];

  return (
    <div>
    <MapContainer id='map' center={initialPosition} zoom={43} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={initialPosition}>
        <Popup>Aqui estão as coordenadas fornecidas</Popup>
      </Marker>
    </MapContainer>
    </div>
    
  );
};

export default Map;
