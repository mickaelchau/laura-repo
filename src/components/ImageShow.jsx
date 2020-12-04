import React from 'react';
import styled from 'styled-components';
import ImageLine from './ImageLine';


const ImageShow = () => {
    return (
        <>
            <Title>Clickez pour découvrir les photos !</Title>
            <Container>
                <ImageLine
                    img0Src = "/img/0.jpg"
                    img0Alt = "dessin initial"
                    img1Src = "/img/1.jpg"
                    img1Alt = "variation 1"
                    img2Src = "/img/2.jpg"
                    img2Alt = "variation 2"
                    img3Src = "/img/3.jpg"
                    img3Alt = "variation 3"/>     
                <ImageLine
                    img0Src = "/img/4.jpg"
                    img0Alt = "variation 4"
                    img1Src = "/img/5.jpg"
                    img1Alt = "variation 5"
                    img2Src = "/img/6.jpg"
                    img2Alt = "variation 6"
                    img3Src = "/img/7.jpg"
                    img3Alt = "variation 7"/>    
                <ImageLine
                    img0Src = "/img/8.jpg"
                    img0Alt = "variation 8"
                    img1Src = "/img/9.jpg"
                    img1Alt = "variation 9"
                    img2Src = "/img/10.jpg"
                    img2Alt = "variation 10"
                    img3Src = "/img/11.jpg"
                    img3Alt = "variation 11"/>      
            </Container>
        </>
    );
}

const Title = styled.h2`
    font-family: 'Kaushan Script', cursive;
    font-weight: normal;
    font-size: 35px;
    text-align: center;
    margin: 15px auto;
    @media screen and (min-width: 600px) {
        font-size: 45px;
    }
    @media screen and (min-width: 1024px) {
        margin: 30px auto;
        font-size: 65px;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export default ImageShow;
