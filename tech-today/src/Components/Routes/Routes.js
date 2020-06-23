import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from '../MainPage/MainPage';
import GamingPage from '../GamingPage/GamingPage';
import ContactPage from '../ContactPage/ContactPage';
import SciencePage from '../SciencePage/SciencePage';
import SpacePage from '../SpacePage/SpacePage';


const routes = () => {
    return(
        <Router>
            <div>
                <Route exact path='/' component={MainPage}/>
                <Route exact path='/gaming' component={GamingPage}/>
                <Route exact path='/contact' component={ContactPage}/>
                <Route exact path='/science' component={SciencePage}/>
                <Route exact path='/space' component={SpacePage}/>

            </div>
        </Router>
    )
};

export default routes;