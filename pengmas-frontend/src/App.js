import React, { Component } from 'react';
import Navigation from './components/partials/Navigation';
import Home from './views/Home';
import Footer from './components/partials/Footer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Home/>
        <Footer/>
      </div>
    );
  }
}

export default App;
