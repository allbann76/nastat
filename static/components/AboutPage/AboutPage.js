import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

import Container from '../Container/Container';
import Col from '../Col/Col';

import Header from '../Header/Header';


export default class AboutPage extends BaseComponent {
    render() {
        return (
            <div>
                <Header />
                <Container row={true}>
                    <Col md="12" lg="12" sm="12" xs="12">
                        <h1>About Stat</h1>
                    </Col>
                </Container>
                <Container row={true}>
                    <Col md="6" lg="6" sm="6" xs="12">
                        <h2>How to use</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col md="6" lg="6" sm="6" xs="12">
                        <h2>Rationale</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                </Container>
            </div>
        );
    }
}
