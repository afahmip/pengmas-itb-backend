import React, { Component } from "react";
import Header from './../components/partials/Header';
import Map from './../components/home/Map';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Map/>
            </div>
        );
    }
}

export default Home;