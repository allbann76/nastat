import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import React from 'react';
import BaseComponent from '../BaseComponent/BaseComponent';
import * as AppActions from '../../actions/AppActions';
import Container from '../Container/Container';
import Col from '../Col/Col';

import Header from '../Header/Header';

import List from '../List/List';

import {
    Button
} from 'react-bootstrap';

const mapStateToProps = ({questions, answers}) => ({questions, answers});

const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(List);

export default class DailyPage extends BaseComponent {
    componentDidMount() {
        const {
            onQuestionsRecieved,
            currentDate,
            dispatch
        } = this.props;

        fetch(`/questions?currentDate=${currentDate}`)
            .then(stream => stream.json())
            .then(onQuestionsRecieved);
    }

    render() {
        const {
            questions,
            answers,

            onSendDaily,
            currentDate,
            store
        } = this.props;

        return (
            <div>
                <Header />
                <Container row={true}>
                    <Col md="12" lg="12" sm="12" xs="12">
                        <h1>Daily</h1>
                    </Col>
                </Container>
                <Container row={true}>
                    <Col md="6" lg="9" sm="8" xs="12">
                        <ConnectedList />
                    </Col>
                    <Col md="6" lg="3" sm="4" xs="12">
                        <div>
                            <label> Current Date: <strong> {currentDate} </strong> </label>
                        </div>
                        <Button bsStyle="success" onClick={(e) => onSendDaily(e, store)}>
                            Send
                        </Button>
                    </Col>
                </Container>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}
