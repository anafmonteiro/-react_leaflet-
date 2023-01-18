import React from "react";
import Control from 'react-leaflet-custom-control'
import { Container, Round, Title } from "./styles";

import legend from "../../legend.json";

const Legend:React.FC = () => {
    return (
        <Control prepend position='topright'>
            {legend.map((item,i)=>(
                <Container key={i}>
                    <Round color={item.color}/>
                    <Title>{item.site_type}</Title>
                </Container>
            ))}
        </Control>
    )
}

export default Legend