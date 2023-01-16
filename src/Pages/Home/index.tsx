import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title } from "./styles";

const HomePage:React.FC = () => {

    const navigate = useNavigate();

    return(
        <Container>
            <Title>
                Quick Quiz!
            </Title>
        </Container>
    )
}

export default HomePage