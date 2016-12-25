import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';

import Container from '../Container/Container';
import Col from '../Col/Col';

import Header from '../Header/Header';

export default class MainPage extends BaseComponent {
    _getHeader() {
        
    }

    render() {
        return (
            <div>
                <Header />
                <Container row={true}>
                    <h1>Main Page</h1>
                </Container>
            </div>
        );
    }
}
