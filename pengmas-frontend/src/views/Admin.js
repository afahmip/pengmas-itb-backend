import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import Navigation from '../components/admin/Navigation';
import Dashboard from '../components/admin/Dashboard';
import './css/admin.css';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.path = '/admin';
    }

    render() {
        return (
            <div>
                <Navigation path={this.path}/>
                <div id="admin-wrapper">
                    <Grid fluid>
                        {/* <div className="row">
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
                        </div> */}
                        <Switch>
                            <Route path={this.path} component={Dashboard}/>
                        </Switch>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Admin;