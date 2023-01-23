import styled from "styled-components";

const Container = styled.div`
    background-color: white;
    align-items: center;   
    width: 20rem;
    height: 100rem;
`;

const InformationContainer = styled.div`
    display: flex;
    padding: 2rem;
    align-items: center; 
`;

const Title = styled.h3`
    text-align:center;
`;

const LegendTitle = styled.p`
    margin-left: 1rem;
    font-size: 2rem;
`;

const Round = styled.div`
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    border-radius: 100%;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.color};
`;

const Section = styled.div`
    border-bottom: 1px solid lightgray;
    margin: 1rem 0;
`;

export {
    Container,
    InformationContainer,
    Title,
    LegendTitle,
    Round,
    Section
}