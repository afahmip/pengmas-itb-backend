import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navigation from './../components/partials/Navigation';
import Kkn from './Kkn';
import Home from './Home';
import Footer from './../components/partials/Footer';

class Main extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <Switch>
                    <Route path='/kkn' component={Kkn}/>
                    <Route path='/' component={Home}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default Main;