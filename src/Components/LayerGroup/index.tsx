import React from "react";
import Zone from "../Zone";
import DemandZone from "../Zone/DemandZone";

interface LayerGroupComponentProps {
    information: any,
    onClick: (value:string) => void;
}

const LayerGroupComponent:React.FC<LayerGroupComponentProps> = (props:LayerGroupComponentProps) => {
    console.log("information", props.information)
    const { information } = props

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
                    onClick={props.onClick}
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