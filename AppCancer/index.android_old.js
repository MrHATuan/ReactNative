/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('AppCancer', () => App);

// var Home = require('./components/Home');

// export default class AppCancer extends Component {
//   render() {
//     return (
//       <Navigator
//         initialRoute = {{name: "Home", component: Home}}
//         renderScene = {(route, navigator) => {
//           if (route.component) {
//             return React.createElement(route.component, {navigator, passProps: route.props});
//           }
//         }}
//       />
//     );
//   }
// }

// AppRegistry.registerComponent('AppCancer', () => AppCancer);