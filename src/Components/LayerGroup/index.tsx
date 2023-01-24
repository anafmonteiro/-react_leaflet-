import React from "react";
import Zone from "../Zone";
import DemandZone from "../Zone/DemandZone";

interface LayerGroupComponentProps {
    information: any,
    show: {
        show_demand:boolean, show_origin:boolean, show_city:boolean 
    }
    type: string
}

const LayerGroupComponent:React.FC<LayerGroupComponentProps> = (props:LayerGroupComponentProps) => {
    const {information, show, type} = props

    const setPathOptions = (type:string) => {
        switch(type){
            case "nearest_city":
                return { color: 'blue', fillColor: 'blue' };
            case "origin_city":
                return { color: 'purple', fillColor: 'purple' };
            case "demand_city":
                return { color: 'red', fillColor: 'red' };
            default:
                return { color: 'pink', fillColor: 'pink' };
        }
    }

    return (
        information?.map((item: { properties: { Type: string; }; geometry: { radius: number | undefined; }; }, i: number)=>(
            item.properties.Type === "demand_city"?
                <DemandZone 
                    key={i}
                    index={i} 
                    information={item} 
                    pathOptions={setPathOptions(item.properties.Type)} 
                    radius={item.geometry.radius}
                    onClick={()=>console.log("clique")}
                />
            :

                <Zone 
                    key={i}
                    index={i} 
                    information={item} 
                    pathOptions={setPathOptions(item.properties.Type)} 
                    radius={item.geometry.radius}
                />
        ))
    )
}

export default LayerGroupComponent;