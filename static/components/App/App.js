
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AppActions from '../../actions/AppActions';
import Table from '../Table/Table';

import MainPage from '../MainPage/MainPage';
import AboutPage from '../AboutPage/AboutPage';
import DailyPage from '../DailyPage/DailyPage';
import StatisticsPage from '../StatisticsPage/StatisticsPage';
import SettingsPage from '../SettingsPage/SettingsPage';

import {
    Router,
    Route,
    browserHistory
} from 'react-router'

import css from './App.css';

class App extends React.Component {
    render() {
        const {
            isReady,
            loggedIn,
            tables
        } = this.props;

        const ConnectedDailyPage = connect(x => x, mapDispatchToProps)(DailyPage);
        const ConnectedSettingsPage = connect(x => x, mapDispatchToProps)(SettingsPage);

        return (
            <Router history={browserHistory}>
                <Route path="/" component={MainPage} />
                <Route path="about" component={AboutPage}/>
                <Route path="daily" component={ConnectedDailyPage}/>
                <Route path="user" component={AboutPage}/>
                <Route path="settings" component={ConnectedSettingsPage}/>
                <Route path="statistics" component={StatisticsPage}/>
                <Route path="auth" component={AboutPage}/>
            </Router>           
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AppActions, dispatch);
}

export default connect(x => x, mapDispatchToProps)(App);
