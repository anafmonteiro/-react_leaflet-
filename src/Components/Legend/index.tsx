import React from "react";
import Control from "react-leaflet-custom-control";

import { Container, InformationContainer, Round, Title, LegendTitle, Section } from "./styles";

import site_type from "../../site_type.json";
import volume from "../../volume.json";
import CheckboxComponent from "../Checkbox";

interface LegendProps {
    check:{
        demand_check:boolean,
        origin_check:boolean,
        all_check:boolean
    };
    onClick: (value:string) => void;
}

const Legend:React.FC<LegendProps> = (props:LegendProps) => {

    const { check, onClick } = props

    return (
        <Control prepend position='topright'>
            <Container>
                <Title>Legend</Title>
                {site_type.map((item,i)=>(
                    <InformationContainer key={i}>
                        <Round color={item.color}/>
                        <LegendTitle>{item.site_type}</LegendTitle>
                    </InformationContainer>
                ))}
                <Section/>
                <Title>Volume</Title>
                {volume.map((item,i)=>(
                    <InformationContainer key={i}>
                        <Round style={{width:item.width, height:item.height}}/>
                        <LegendTitle>{item.volume}</LegendTitle>
                    </InformationContainer>
                ))}
                <Section/>
                <Title>Filters</Title>
                <CheckboxComponent onClick={onClick} check={check}/>
            </Container>
        </Control>
    )
}

export default Legend