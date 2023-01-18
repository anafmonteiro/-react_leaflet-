import React from "react";
import { Tooltip, Circle } from 'react-leaflet';

interface ZoneProps {
    index:number;
    information:any;
    pathOptions: { color: string, fillColor: string };
}

const Zone:React.FC<ZoneProps> = (props:ZoneProps) => {
    const {information} = props
    return (
    <Circle 
        key={props.index}
        center={information.geometry.coordinates} 
        pathOptions={props.pathOptions} 
        radius={200000} 
    >
         <Tooltip direction="top" offset={[10, 0]}>
            <span style={{ fontSize: 14, fontWeight: "bold" }}>
                {information?.properties?.Name}
            </span>
        </Tooltip>
    </Circle>
    )
}

export default Zone