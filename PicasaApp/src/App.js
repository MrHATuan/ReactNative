import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/index';
import { getLogin } from './reducers/index';

import { AppBeforeLogin, AppTabNav } from './Router';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log("abc: ", this.props.login);
        if (this.props.login.isLoggedIn && this.props.login.user) {
            console.log("Go to Picasa");
            return (
                <AppTabNav />
            );
        } else {
            console.log("Go to Login");
            return (
                <AppBeforeLogin />
            );
        }
    }
}

export default connect(
    (state) => ({
        login: state.loginReducer,
    }),
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(App);

