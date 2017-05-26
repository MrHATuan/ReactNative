/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator
} from 'react-native';

export default class AppCancer extends Component {
  render() {
    return (
      <Navigator 
        initiaRoute = {{name: "Home", component: Home}}
        renderScene = {{route, navigator} => {
          if (route.component) {
            
          }
        }}
      />
    );
  }
}



AppRegistry.registerComponent('AppCancer', () => AppCancer);
