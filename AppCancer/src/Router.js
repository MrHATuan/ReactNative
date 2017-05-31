import React, { Component } from 'react';
import { StackNavigator} from 'react-navigation';

import Home from './screens/Home';
import Category from '../components/Category';

import Calendar from './screens/Calendar';

export const HomeStack = StackNavigator({
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chủ',
        },
    },
    Category: {
        screen: Category,
        navigationOptions: {
            title: 'Tin Tức',
        },
    },
    Calendar_Screen: {
        screen: Calendar,
        navigationOptions: {
            title: 'Trang Lịch',
        },
    },

});