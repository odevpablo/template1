// Map.js

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  // Coordenadas fornecidas
  const initialPosition = [-15.950004463260093, -44.86599767671279];

  return (
    <MapContainer id='map' center={initialPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={initialPosition}>
        <Popup>Aqui estão as coordenadas fornecidas</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
