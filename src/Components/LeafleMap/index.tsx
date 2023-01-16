import React from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';

import Cities from "../../cities.json";

const defaultLatLng: number[] = [-15.7941, -47.8879];
const zoom:number = 4;

const LeafletMap:React.FC = () => {
  
   return (
    <MapContainer
        className="markercluster-map"
        center={defaultLatLng}
        zoom={zoom}
        maxZoom={18}
    >
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <div>
        {Cities.features?.map((mark, i) => (
            <Marker
                key={i}
                position={mark.geometry.coordinates}
            >
                <Tooltip direction="top" offset={[10, 0]}>
                <span style={{ fontSize: 14, fontWeight: "bold" }}>
                    {mark?.properties?.Name}
                </span>
                </Tooltip>
            </Marker>
        ))}
        </div>
    </MapContainer>
   )
}

export default LeafletMap