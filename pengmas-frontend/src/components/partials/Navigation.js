import React, { Component } from "react";
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './css/navigation.css';

class Navigation extends Component {
    constructor(props, context) {
        super(props, context);
        
        this.handleSelect = this.handleSelect.bind(this);
        
        this.state = {
            activeKey: this.props.activeKey
        };
    }
      
    handleSelect(key) {
        this.setState({key});
    }

    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav 
                        onSelect={this.handleSelect} 
                        activeKey={this.state.activeKey}
                    >
                        <NavItem eventKey={1} href="#">
                            Beranda
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Berita
                        </NavItem>
                        <NavDropdown eventKey={3} title="Profil" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link Right
                    </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;