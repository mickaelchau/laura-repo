import styled from 'styled-components';

const Image = ({src, alt}) => {
    return (
        <Container>
            <div>
                <img src = {src} alt = {alt}/>
            </div>
        </Container>
    );
}

const Container = styled.button`
    width: 100%;
    padding: 15px 0;
    overflow: visible;
    cursor: pointer;
    background-color: transparent;
    border: none;
    & > div {
        overflow: hidden;
        & > img {
            width: 100%;
            box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            &:hover {
                transform: scale(1.3);
                transition-duration: 1s;
            }
        }
    }
    @media screen and (min-width: 600px) {
        width: 25%;
        padding: 15px;
    }
`; 

export default Image;
