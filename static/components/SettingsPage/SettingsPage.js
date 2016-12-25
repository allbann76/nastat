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

// const mapStateToProps = ({questions, answers}) => ({questions, answers});

// const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(List);

export default class SettingsPage extends BaseComponent {
    componentDidMount() {
        const {
            user,
            onSettingsLoad
        } = this.props;

        fetch(`/settings/${user}`)
            .then(stream => stream.json())
            .then(onSettingsLoad);
    }

    render() {
        const {
            settings
        } = this.props;

        const questions = settings.questions && settings.questions.map(({text}) => {
            return (<p> {text} </p>);
        });
        return (
            <div>
                <Header />
                <Container row={true}>
                    <Col md="12" lg="12" sm="12" xs="12">
                        <p> Hello,&nbsp; 
                            <strong>
                                {settings.user && settings.user.userdata.name}
                            </strong>
                        </p>
                        <hr/>
                    </Col>
                    <Col md="12" lg="12" sm="12" xs="12">
                        {questions}
                    </Col>
                </Container>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}
