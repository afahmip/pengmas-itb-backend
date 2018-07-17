import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './css/navigation.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: this.props.path
        };
    }

    render() {
        return (
            <Navbar inverse fixedTop id='admin__navbar'>
                <Navbar.Header>
                    <Navbar.Toggle />
                    <Navbar.Brand>
                        <a href="index.html">Admin Page</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <ul className="nav navbar-right top-nav">
                    <NavDropdown title='Profile'>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-user"></i> Profile</a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-fw fa-power-off"></i> Log Out</a>
                        </li>
                    </NavDropdown>
                </ul>
                <Navbar.Collapse>
                    <ul className="nav navbar-nav side-nav">
                        <li>
                            <a href={this.props.path}><i className="fa fa-fw fa-home"></i> Dashboard</a>
                        </li>
                        <li>
                            <a href={this.props.path + '/database'}><i className="fa fa-fw fa-chart-bar"></i> Data Kegiatan</a>
                        </li>
                        <li>
                            <a href="tables.html"><i className="fa fa-fw fa-table"></i> Tables</a>
                        </li>
                        <li>
                            <a href="forms.html"><i className="fa fa-fw fa-edit"></i> Forms</a>
                        </li>
                        <li>
                            <a href="bootstrap-elements.html"><i className="fa fa-fw fa-desktop"></i> Bootstrap Elements</a>
                        </li>
                        <li>
                            <a href="bootstrap-grid.html"><i className="fa fa-fw fa-wrench"></i> Bootstrap Grid</a>
                        </li>
                        <li>
                            <a href="javascript:;" data-toggle="collapse" data-target="#demo"><i className="fa fa-fw fa-arrows-v"></i> Dropdown <i className="fa fa-fw fa-caret-down"></i></a>
                            <ul id="demo" className="collapse">
                                <li>
                                    <a href="#">Dropdown Item</a>
                                </li>
                                <li>
                                    <a href="#">Dropdown Item</a>
                                </li>
                            </ul>
                        </li>
                        <li className="active">
                            <a href="blank-page.html"><i className="fa fa-fw fa-file"></i> Blank Page</a>
                        </li>
                        <li>
                            <a href="index-rtl.html"><i className="fa fa-fw fa-dashboard"></i> RTL Dashboard</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;