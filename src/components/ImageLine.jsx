import styled from 'styled-components';
import Image from './Image';

const ImageLine = ({
    img0Src, 
    img0Alt, 
    img1Src, 
    img1Alt,
    img2Src, 
    img2Alt, 
    img3Src, 
    img3Alt
        }) => {
    return (
        <Line>
            <Image src = {img0Src} alt = {img0Alt}/>
            <Image src = {img1Src} alt = {img1Alt}/>
            <Image src = {img2Src} alt = {img2Alt}/>
            <Image src = {img3Src} alt = {img3Alt}/>
        </Line>
    );
}

const Line = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: auto;
    @media screen and (min-width: 600px) {
        flex-direction: row;
    }
`;

export default ImageLine;
