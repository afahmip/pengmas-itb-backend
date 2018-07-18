import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './views/Main';
import Admin from './views/Admin';
import './App.css';

class App extends Component {
render() {
    return (
        <div className="App">
            <Switch>
                <Route path='/admin' component={Admin}/>
                <Route path='/' component={Main}/>
            </Switch>
        </div>
    );
}
}

export default App;
