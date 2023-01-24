import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

import Legend from '../Legend';
import Flow from "../../flow.json";
import { listAllCities, listAllDemandCities, listAllOriginCities } from '../../Service/api';
import LayerGroupComponent from '../LayerGroup';

const defaultLatLng: number[] = [-15.7941, -47.8879];
const zoom:number = 4;

const LeafletMap:React.FC = () => {

    const [map, setMap] = useState(false);

    const [checkValue, setCheckValue] = useState({ demand_check:false, origin_check:false, all_check:true });

    const [allCities, setAllCities] = useState<any>()
    const [showFlow, setShowFlow] = useState<boolean>(true)
    
    const showSomeInformations = (value:string) => {

        switch(value){

            case "demand_city":
                return (
                    listDemandCities(),
                    setCheckValue({ demand_check:true, origin_check:false, all_check:false })
                )
            case "origin_city":
                return (
                    listOriginCities(),
                    setCheckValue({ demand_check:false, origin_check:true, all_check:false })
                )
            default:
                return (
                    listCities(),
                    setCheckValue({ demand_check:false, origin_check:false, all_check:true })
                )
        }
    }

    const listCities = async() => {
        const response = await listAllCities()
        setAllCities(response)
        setShowFlow(true)
    }

    const listDemandCities = async() => {
        const response = await listAllDemandCities()
        setAllCities(response)
        setShowFlow(false)
    }

    const listOriginCities = async() => {
        const response = await listAllOriginCities()
        setAllCities(response)
        setShowFlow(false)
    }

    useEffect(()=>{
        listCities()
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
            />
            {showFlow && 
                Flow.map((item, i)=>(
                    <Polyline 
                        key={i} 
                        color="black" 
                        positions={[item.origin_point, item.demand_point]} 
                    />
                ))
            }
            <Legend onClick={showSomeInformations} check={checkValue}/>
        </MapContainer>
    )
}

export default LeafletMap