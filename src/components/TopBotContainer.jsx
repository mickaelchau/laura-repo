import styled from 'styled-components';

const TopBotContainer = styled.div`
    width: 100%;
    background-color: #1D3104;
    box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    & > h1, h3 {
        font-size: 40px;
        font-family: 'Kaushan Script', cursive;
        font-weight: normal;
        color: #FFFFE8;
        text-align: center;
        padding: 25px;
        @media screen and (min-width: 600px) {
            font-size: 80px;
        }
    }
`;

export default TopBotContainer;
