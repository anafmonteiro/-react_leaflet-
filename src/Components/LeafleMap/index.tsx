import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, LayerGroup, Circle, Polyline } from 'react-leaflet';
import Control from 'react-leaflet-custom-control'
// import { Button } from '@mui/material'

import Cities from "../../cities.json";
import Origin from "../../origin.json";
import Demand from "../../demand.json";

import { Container, Round, Title } from './styles';
import Zone from '../Zone';

const defaultLatLng: number[] = [-15.7941, -47.8879];
const zoom:number = 4;

const origin = { color: 'purple', fillColor: 'purple' };

const demand = { color: 'red', fillColor: 'red' };

const nearest_city = { color: 'blue', fillColor: 'blue' };

const polyline = [[-23.5674, -46.5704], [-3.1347, -60.0233]];

const legend = [
    {
        site_type: "Origin",
        color: "purple",
    },
    {
        site_type: "Nearest City",
        color: "blue",
    },
    {
        site_type: "Demand",
        color: "red",
    }
]

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
            <div>
                {Cities.features?.map((item, i) => (
                    <Zone index={i} information={item} pathOptions={nearest_city}/>
                ))}
            </div>
            <LayerGroup>
                {Origin.features?.map((item,i)=>(
                    <Zone index={i} information={item} pathOptions={origin}/>
                ))}
            </LayerGroup>
            <LayerGroup>
                {Demand.features?.map((item,i)=>(
                    <Zone index={i} information={item} pathOptions={demand}/>
                ))}
            </LayerGroup>
            <Polyline color="black" positions={polyline} />
            <Control prepend position='topright'>
                {legend.map((item,i)=>(
                     <Container key={i}>
                        <Round color={item.color}/>
                        <Title>{item.site_type}</Title>
                     </Container>
                ))}
            </Control>
        </MapContainer>
    )
}

export default LeafletMap