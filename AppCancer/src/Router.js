import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import Home from './screens/Home';

export const HomeStack = StackNavigator({
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chủ',
        },
    },

});