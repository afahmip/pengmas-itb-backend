import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import './css/admin.css';
import Navigation from '../components/admin/Navigation';
import Dashboard from '../components/admin/Dashboard';
import Database from '../components/admin/Database';

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
                        <Switch>
                            <Route exact path={this.path + '/database'} component={Database}/>
                            <Route path={this.path} component={Dashboard}/>
                        </Switch>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Admin;