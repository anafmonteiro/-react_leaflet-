import React from "react";
import { Tooltip, Circle } from 'react-leaflet';

import {
    TooltipContainer,
    Label,
    InformationText
} from "./styles";

interface ZoneProps {
    index:number;
    information:any;
    pathOptions: { color: string, fillColor: string };
    radius?:number;
}

const DemandZone:React.FC<ZoneProps> = (props:ZoneProps) => {
    const {information} = props
    return (
    <Circle 
        key={props.index}
        center={information.geometry.demand_coordinates} 
        pathOptions={props.pathOptions} 
        radius={props.radius || 200000} 
    >
         <Tooltip direction="top" offset={[10, 0]}>
            <TooltipContainer>
                <Label>Cidade de destino:</Label>
                <InformationText>{information.geometry.demand_name}</InformationText>
            </TooltipContainer>
            <TooltipContainer>
                <Label>Cidade de origem:</Label>
                <InformationText>{information.geometry.origin_name}</InformationText>
            </TooltipContainer>
            <TooltipContainer>
                <Label>Volume de demanda:</Label>
                <InformationText>{information.geometry.radius}</InformationText>
            </TooltipContainer>
        </Tooltip>
    </Circle>
    )
}

export default DemandZone