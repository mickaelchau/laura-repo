import React from 'react';
import styled from 'styled-components';

const Description = ({txt1, txt2}) => {
    return (
        <Container>
            <p>{txt1}</p>
            <p>{txt2}</p>
        </Container>
    );
}

const Container = styled.div`
    width: 80%;
    margin: auto;
    & > p {
        font-family: 'Kranky', cursive;
        font-weight: normal;
        font-size: 25px;
        text-align: center;
        margin: 25px 0 ;
        @media screen and (min-width: 768px) {
            font-size: 45px;
            margin: 45px 0 ;
        }
    }
`;



export default Description;
