import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import Picasa from './components/pages/Picasa';
import App from './App';

export const HomeStack = StackNavigator({
    Picasa: {
        screen: Picasa,
        navigationOptions: {
            title: 'Trang chủ',
        },
    },
    // App: {
    //     screen: App,
    // },
});