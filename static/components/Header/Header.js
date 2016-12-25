import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

import Container from '../Container/Container';
import Col from '../Col/Col';

import css from './Header.css';

import {
    Navbar,
    Nav,
    NavItem,
    MenuItem,
    NavDropdown
} from 'react-bootstrap';

import {Link} from 'react-router'

export default class Header extends BaseComponent {
    _getHeader() {

    }

    render() {
        return (
            <div className={css.header}>
                <Container row={true}>
                    <Navbar collapseOnSelect>
                        <Navbar.Header>
                          <Navbar.Brand>
                            <Link to='/'>Stat</Link>
                          </Navbar.Brand>
                          <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav>
                                <NavItem eventKey={1}>
                                    <Link to='/daily'>Daily</Link>
                                </NavItem>
                                
                                <NavItem eventKey={2}>
                                    <Link to='/statistics'>Statistics</Link>
                                </NavItem>

                                <NavItem eventKey={3}>
                                    <Link to='/settings'>Settings</Link>
                                </NavItem>

                                <NavItem eventKey={4}>
                                    <Link to='/about'>About</Link>
                                </NavItem>
                          </Nav>
                          <Nav pullRight>
                                <NavItem eventKey={2}>
                                    <Link to='/auth'>Sign Up</Link>
                                </NavItem>
                                <NavItem eventKey={2}>
                                    <Link to='/auth'>Sign In</Link>
                                </NavItem>
                          </Nav>
                        </Navbar.Collapse>
                  </Navbar>
                </Container>
            </div>
        );
    }
}
