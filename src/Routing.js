import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/login/login';
import Signup from './component/login/signup';
import Survey from './component/surveyform/survey';
import DisplayApi from './component/surveyform/DisplayApi';
import Contact from './component/Navbar/contact';
import About from './component/Navbar/about';

const Routing = () => {
    return(
        <BrowserRouter> 
            <Route exact path="/" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/Home" component={Home}/>
            <Route exact path="/surveyform" component={Survey}/>
            <Route exact path="/viewBooking" component={DisplayApi}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
        </BrowserRouter>
    )
}

export default Routing;