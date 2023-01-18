import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 2rem;
    background-color: white;
    align-items: center;   
    width: 20rem;
    height: 10rem;
`;

const Title = styled.p`
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

export {
    Container,
    Title,
    Round
}