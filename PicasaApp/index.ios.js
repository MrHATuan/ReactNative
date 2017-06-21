/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import { AppRegistry } from 'react-native';
// import App from './src/containers/App';

// AppRegistry.registerComponent('PicasaApp', () => App);

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

import App from './src/App';

const store = configureStore();

export default class PicasaApp extends Component {
    constructor(props) {
        super(props)
      }

    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('PicasaApp', () => PicasaApp);