import React, { useState } from 'react';
import { MapContainer, TileLayer, LayerGroup, Polyline } from 'react-leaflet';

import Cities from "../../cities.json";
import Origin from "../../origin.json";
import Demand from "../../demand.json";
import Zone from '../Zone';
import Legend from '../Legend';
import Flow from "../../flow.json"
import DemandZone from '../Zone/DemandZone';

const defaultLatLng: number[] = [-15.7941, -47.8879];
const zoom:number = 4;

const origin = { color: 'purple', fillColor: 'purple' };

const demand = { color: 'red', fillColor: 'red' };

const nearest_city = { color: 'blue', fillColor: 'blue' };

const polyline = [[-23.5674, -46.5704], [-3.1347, -60.0233]];

const LeafletMap:React.FC = () => {

    const [map, setMap] = useState(false);
  
    return (
        <MapContainer
            className="markercluster-map"
            center={defaultLatLng}
            zoom={zoom}
            maxZoom={18}
            whenReady={()=>setMap(!map)}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LayerGroup>
                {Cities.features?.map((item, i) => (
                    <Zone index={i} information={item} pathOptions={nearest_city} radius={item.geometry.radius}/>
                ))}
            </LayerGroup>
            <LayerGroup>
                {Origin.features?.map((item,i)=>(
                    <Zone index={i} information={item} pathOptions={origin}/>
                ))}
            </LayerGroup>
            <LayerGroup>
                {Demand.features?.map((item,i)=>(
                    <DemandZone index={i} information={item} pathOptions={demand} radius={item.geometry.radius}/>
                ))}
            </LayerGroup>
            {Flow.map((item, i)=>(
                <Polyline key={i} color="black" positions={[item.origin_point, item.demand_point]} />
            ))}
            <Legend/>
        </MapContainer>
    )
}

export default LeafletMap