import styled from 'styled-components';
import Header from './components/Header';
import Index from './pages/index';
import Footer from './components/Footer';
import {
    Switch,
    Route
  } from "react-router-dom";


function App() {
    return (
        <Base>
            <Header title = "Projet: “Feuille”"/>
            <Switch>
            <Route exact path="/">
                <Index/>
            </Route>
            <Route exact path="/test">
                <Footer/>
            </Route>
            </Switch>
            <Footer
                author = "Laura Parouty"
                phone = "0709932332"
                twitter = "https://twitter.com/me_againnn?s=09"
                instagram = "https://instagram.com/lrppp0_00?igshid=m5f86hoqhrof"
                linkedin = ""
                mail = "laura.parauty@gmail.com"
                year = "2020"/>
        </Base>
    );
}

const Base = styled.div`
    width: 100%;
    background-color: #FFFFE8;
`;

export default App;
