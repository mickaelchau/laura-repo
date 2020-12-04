import React from 'react';
import styled from 'styled-components';

const Scan = ({name, author, imgSrc, imgAlt}) => {
    return (
        <Container>
            <h2>{name}</h2>
            <img 
                src = {imgSrc}
                alt = {imgAlt}/>
            <h3>Par {author}</h3>
        </Container>
    );
}

const Container = styled.div`
    width: 90%;
    margin: 100px auto;
    font-family: 'Kranky', cursive;
    & > h2 {
        margin-top 20px;
        font-size: 80px;
        text-align: center;
        font-weight: normal;
    }
    & > img {
        width: 100%;
        box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    }
    & > h3 {
        margin: 25px;
        font-size: 40px;
        font-weight: normal;
        text-align: end;
    }
    @media screen and (min-width: 600px) {
        & > h2 {
            font-size: 120px;
        }
        & > h3 {
            font-size: 80px;
        }
    }

    @media screen and (min-width: 1024px) {
        width: 80%;
        & > h2 {
            font-size: 170px;
        }
        & > h3 {
            font-size: 80px;
        }
    }

    @media screen and (min-width: 1440px) {
        width: 60%;
        & > h2 {
            margin-top 100px;
            font-size: 200px;
        }
        & > h3 {
            font-size: 80px;
        }
    }
`;


export default Scan;
