import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

import Container from '../Container/Container';
import Col from '../Col/Col';

import Header from '../Header/Header';


export default class StatisticsPage extends BaseComponent {
    render() {
        return (
            <div>
                <Header />
                <Container row={true}>
                    <Col md="12" lg="12" sm="12" xs="12">
                        <h1>Statistics</h1>
                        <p>Under construction</p>
                    </Col>
                </Container>
            </div>
        );
    }
}
