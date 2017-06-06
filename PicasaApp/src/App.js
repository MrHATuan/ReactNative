import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/index';
import { getLogin } from './reducers/index';

import Login from './components/login/Login';
import Picasa from './components/pages/Picasa';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        if (this.props.login.isLoggedIn && this.props.login.user) {
            return (
                <Picasa {...actions}/>
            );
        } else {
            return (
                <Login {...actions}/>
            );
        }
    }
}

export default connect(
    (state) => ({
        login: state.loginReducer
    }),
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(App);