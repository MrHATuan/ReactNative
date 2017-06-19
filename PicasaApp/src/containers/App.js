import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import configureStore from '../store/configureStore';
import { getLogin } from '../reducers/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Picasa from './Picasa';

const store = configureStore();

class App extends Component {
    constructor(props) {
        super(props);
        this._setupGoogleSignin = this._setupGoogleSignin.bind(this);
    }

    componentDidMount() {
        this._setupGoogleSignin();
    }

    render() {
        return (
            <Provider store={store}>
                <Picasa />
            </Provider>
        );
    }

    async _setupGoogleSignin() {
        try {
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                scopes: ['http://picasaweb.google.com/data/'],
                iosClientId: '125267211347-rgk23m97vdc4i2i9co5pk3604cs4ic3s.apps.googleusercontent.com',
                webClientId: '125267211347-0v165q7j9re2fv0ggjduv523b9h8d8bb.apps.googleusercontent.com',
                service: 'lh2',
                offlineAccess: true,
            });

            const user = await GoogleSignin.currentUserAsync();
            console.log(user);

            if(user != null) {
                this.props.actions.login(user);
            }
        }
        catch(error) {
            console.warn("Play services error", error.code, error.message);
        }
    }
};

export default connect(null,{login})(App);