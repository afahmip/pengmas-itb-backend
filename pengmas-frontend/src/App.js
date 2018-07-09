import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Navigation from './components/partials/Navigation';
import Kkn from './views/Kkn';
import Home from './views/Home';
import Footer from './components/partials/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
render() {
    return (
    <div className="App">
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

export default App;
