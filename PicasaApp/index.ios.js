/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import App from './src/App';

const store = configureStore();

export default class PicasaApp extends Component {
    render() {
        return (
            <Provider>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('PicasaApp', () => PicasaApp);