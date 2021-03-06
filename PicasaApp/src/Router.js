import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';

import Login from './components/login/Login';
import Photo from './components/pages/Photo';
import Album from './components/pages/Album';
import Detail from './components/pages/Detail';
import User from './components/user/User';
import AddAlbum from './components/pages/AddAlbum';

// Login Screen
export const AppBeforeLogin = StackNavigator({
    LoginScreen: {
        screen: Login,
        navigationOptions: {
            title: 'Login',
        },
    },
});

export const AppShowAlbum = StackNavigator(
    {
        AlbumScreen: { screen: Album,
            navigationOptions: {
                header: null,
            }
        },
        DetailAlbum: { screen: Detail },
    },
    { initialRouteName: 'AlbumScreen', }
);

// Tab Navigator
export const AppTabNav = TabNavigator(
    {
        User: { 
            screen: User,
            navigationOptions: { 
                tabBarLabel: 'User',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require('./assets/images/user.png')}
                        style={{width: 26, height: 26, tintColor: tintColor}}
                    />
                ),
            }
        },
        Image: { 
            screen: Photo,
            navigationOptions: { 
                tabBarLabel: 'Ảnh',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require('./assets/images/photo.png')}
                        style={{width: 26, height: 26, tintColor: tintColor}}
                    />
                ),
            }
        },
        Album: { 
            screen: AppShowAlbum,
            navigationOptions: { 
                tabBarLabel: 'Album',
                tabBarIcon: ({tintColor}) => (
                    <Image source={require('./assets/images/album.png')}
                        style={{width: 26, height: 26, tintColor: tintColor}}
                    />
                ),
            }
        },
    },
    {
        tabBarPosition: 'bottom',
        initialRouteName: 'Image',
        tabBarOptions: {
            activeTintColor: '#0080ff',
            inactiveTintColor: '#333',
            style: { backgroundColor: '#fff',},
            labelStyle: {
                fontSize: 12,
            },
            showIcon: true,
            tabStyle: {
                margin: 0,
                padding: 0,
            },
            
        },
    }
);

// Home Route
export const HomeStack = StackNavigator({
    Home: {
        screen: AppTabNav,
        navigationOptions: {
            header: null,
        },
    },
    AddAlbumPage: { screen: AddAlbum },
});