import React from "react";
import LeafletMap from "../../Components/LeafleMap";
import { Container } from "./styles";

const HomePage:React.FC = () => {

    return(
        <Container>
            <LeafletMap/>
        </Container>
    )
}

export default HomePage