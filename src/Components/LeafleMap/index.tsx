import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, LayerGroup, Polyline } from 'react-leaflet';

import Cities from "../../cities.json";
import Origin from "../../origin.json";
import Demand from "../../demand.json";
import Zone from '../Zone';
import Legend from '../Legend';
import Flow from "../../flow.json"
import DemandZone from '../Zone/DemandZone';
import { listAllCities, listAllDemandCities, listAllNearestCity, listAllOriginCities } from '../../Service/api';
import LayerGroupComponent from '../LayerGroup';

const defaultLatLng: number[] = [-15.7941, -47.8879];
const zoom:number = 4;

const origin = { color: 'purple', fillColor: 'purple' };

const demand = { color: 'red', fillColor: 'red' };

const nearest_city = { color: 'blue', fillColor: 'blue' };

const LeafletMap:React.FC = () => {

    const [map, setMap] = useState(false);

    const [checkValue, setCheckValue] = useState({ demand_check:false, origin_check:false, all_check:true });

    const [showZone, setShowZone] = useState({ show_demand:true, show_origin:true, show_city:true });

    const [demandCity, setDemandCity] = useState<any>()
    const [originCity, setOriginCity] = useState<any>()
    const [nearestCity, setNearestCity] = useState<any>()
    const [allCities, setAllCities] = useState<any>()
    
    const showSomeInformations = (value:string) => {

        switch(value){

            case "demand":
                return (
                    setCheckValue({ demand_check:true, origin_check:false, all_check:false }) ,
                    setShowZone({show_demand:true, show_origin:false, show_city:false })
                )
            case "origin":
                return (
                    setCheckValue({ demand_check:false, origin_check:true, all_check:false}), 
                    setShowZone({show_demand:false, show_origin:true, show_city:false })
                )
            default:
                return (
                    setCheckValue({ demand_check:false, origin_check:false, all_check:true}),
                    setShowZone({show_demand:true, show_origin:true, show_city:true })
                )
        }
    }

    const listCities = async() => {
        const response = await listAllCities()
        setAllCities(response)
    }

    const listNearestCity = async() => {
        const response = await listAllNearestCity()
        setNearestCity(response)
    }

    const listDemandCities = async() => {
        const response = await listAllDemandCities()
        setDemandCity(response)
    }

    const listOriginCities = async() => {
        const response = await listAllOriginCities()
        setOriginCity(response)
    }

    useEffect(()=>{
        listCities()
        // listNearestCity()
        // listDemandCities()
        // listOriginCities()
    },[])
    
  
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
            <LayerGroupComponent 
                information={allCities} 
                show={
                    {show_demand:true, show_origin:true, show_city:true} 
                }
                type="all_city"
            />
            {Flow.map((item, i)=>(
                <Polyline 
                    key={i} 
                    color="black" 
                    positions={[item.origin_point, item.demand_point]} 
                />
            ))}
            <Legend onClick={showSomeInformations} check={checkValue}/>
        </MapContainer>
    )
}

export default LeafletMap