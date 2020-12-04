import React from 'react';
import styled from 'styled-components';
import Container from './TopBotContainer';

const Footer = ({author, phone, twitter, instagram, linkedin, mail, year}) => {
    return (
        <Container>
            <h3>{author}</h3>
            <FootContainer>
                <Flex>
                    <div>
                        <p>{phone}</p>
                        <p>{mail}</p>
                    </div>
                    <Media>
                        <a rel = "noreferrer" href = {twitter} target="_blank"><img src="/icons/twitter.svg" alt ="twitter"></img></a>
                        <a rel = "noreferrer" href = {instagram} target="_blank"><img src="/icons/insta.svg" alt ="instagram"></img></a>
                        <a rel = "noreferrer" href = {linkedin} target="_blank"><img src="/icons/linkedin.svg" alt ="linkedin"></img></a>
                    </Media>
                </Flex>
            <p>All Rights Reserved {year} - {author}</p>
            </FootContainer>
        </Container>
    );
};

const FootContainer = styled.div`
    p {
        text-align: center;
        color: #FFFFE8;
        font-size: 25px;
        padding: 10px 0 15px 0;
        @media screen and (min-width: 1024px) {
            font-size: 35px;

        }
    }
`;

const Flex = styled.div`
    display: flex;  
    margin: 30px auto; 
    flex-direction: column;
    justify-content: center; 
    @media screen and (min-width: 768px) {
        margin: 30px 150px; 
        flex-direction: row;
        & > div {
            width: 100%;
            & > p {
                text-align: left;
                padding: 0;
                &: nth-child(1) {
                    padding-top: 15px;
                }
                &: nth-child(2) {
                    padding-bottom: 15px;
                }
            }
        }
    }
`;

const Media = styled.div`
    display: flex;  
    width: 100%;  
    justify-content: flex-end;
    & > a > img {
        width: 50px;
        padding: 10px;
        &:hover {
            background-color: #FFFFE8;
            transition-duration: 1s;

        }
        @media screen and (min-width: 768px) {
            width: 80px;
        }
        @media screen and (min-width: 1024px) {
            width: 100px;
        }
    }
    
`;

export default Footer;
