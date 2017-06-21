import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/index';
import { getLogin } from './reducers/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import { AppBeforeLogin, AppTabNav } from './Router';

class App extends Component {
    constructor(props) {
        super(props);
        this._setupGoogleSignin = this._setupGoogleSignin.bind(this);
    }

    componentDidMount() {
        this._setupGoogleSignin();
    }

    render () {
        // console.log("abc: ", this.props.login);
        if (this.props.login.isLoggedIn && this.props.login.user) {
            // console.log("Go to All Photo");
            return (
                <AppTabNav />
            );
        } else {
            // console.log("Go to Login");
            return (
                <AppBeforeLogin />
            );
        }
    }

    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                scopes: ['http://picasaweb.google.com/data/'],
                iosClientId: '125267211347-rgk23m97vdc4i2i9co5pk3604cs4ic3s.apps.googleusercontent.com',
                webClientId: '125267211347-akmkjosfjfrskuoej7fe5866kubhpj5j.apps.googleusercontent.com',
                service: 'lh2',
                offlineAccess: true,
            });

            const user = await GoogleSignin.currentUserAsync();
            // console.log(user);

            if(user != null) {
                this.props.actions.login(user);
            }
        }
        catch(error) {
            console.warn("Play services error", error.code, error.message);
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

