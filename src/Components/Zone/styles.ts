import styled from "styled-components";

const Round = styled.div`
    width: 1rem;
    height: 1rem;
    padding: 1rem;
    border-radius: 100%;
    border: 1px solid ${props => props.color};
    background-color: ${props => props.color};
`;

export {
    Round
}