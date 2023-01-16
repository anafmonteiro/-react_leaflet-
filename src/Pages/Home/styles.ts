import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
    padding: 2rem;
`;

const Title = styled.h1`
    font-size: 5.4rem;
    color: #56a5eb;
    margin-bottom: 5rem;
`;


export {
    Container,
    Title,
}