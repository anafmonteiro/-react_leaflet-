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

const LeafletMap:React.FC = () => {

    const [map, setMap] = useState(false);

    const [checkValue, setCheckValue] = useState({ demand_check:false, origin_check:false, all_check:true });

    const [showZone, setShowZone] = useState({ show_demand:true, show_origin:true, show_city:true });

    const check = (value:string) => {
        if(value === "demand") {
            setCheckValue({ demand_check:true, origin_check:false, all_check:false }) 
            setShowZone({show_demand:true, show_origin:false, show_city:false })
        }
        else if(value === "origin") {
            setCheckValue({ demand_check:false, origin_check:true, all_check:false}) 
            setShowZone({show_demand:false, show_origin:true, show_city:false })
        }
        else {
            setCheckValue({ demand_check:false, origin_check:false, all_check:true}) 
            setShowZone({show_demand:true, show_origin:true, show_city:true })
        }
    }
  
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
                {showZone.show_city && 
                    Cities.features?.map((item, i) => (
                        <Zone 
                            key={i}
                            index={i} 
                            information={item} 
                            pathOptions={nearest_city} 
                            radius={item.geometry.radius}
                        />
                    ))
                }
            </LayerGroup>
            <LayerGroup>
                {showZone.show_origin && 
                    Origin.features?.map((item,i)=>(
                        <Zone 
                            key={i}
                            index={i} 
                            information={item} 
                            pathOptions={origin}
                        />
                    ))
                }
            </LayerGroup>
            <LayerGroup>
                {showZone.show_demand && 
                    Demand.features?.map((item,i)=>(
                        <DemandZone 
                            key={i}
                            index={i} 
                            information={item} 
                            pathOptions={demand} 
                            radius={item.geometry.radius}
                        />
                    ))
                }
            </LayerGroup>
            {Flow.map((item, i)=>(
                <Polyline 
                    key={i} 
                    color="black" 
                    positions={[item.origin_point, item.demand_point]} 
                />
            ))}
            <Legend onClick={check} check={checkValue}/>
        </MapContainer>
    )
}

export default LeafletMap