import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h1 className="page-header">
                        Blank Page
                        <small>Subheading</small>
                    </h1>
                    <ol className="breadcrumb">
                        <li>
                            <i className="fa fa-dashboard"></i>  <a href="index.html">Dashboard</a>
                        </li>
                        <li className="active">
                            <i className="fa fa-file"></i> Blank Page
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}
export default Dashboard;