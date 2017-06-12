import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
} from 'react-native';

export default class LoadingImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  onLoad() {
    Animated.timing(this.state.opacity, {
      toValue: 1,
      duration: 500,
    }).start();
  }

  render() {
    return (
        <View style={this.props.imageContainerStyle} >
          <Image 
            source={this.props.url}
            style={this.props.style}
            onLoad={this.onLoad.bind(this)}
          />
        </View>
    );
  }
}