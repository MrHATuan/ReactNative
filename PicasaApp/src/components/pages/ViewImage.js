import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
  Modal, TouchableHighlight,
} from 'react-native';

import LoadingImage from './LoadingImage';

export default class ViewImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
    this.calculateThumbSize = this.calculateThumbSize.bind(this);
  }

  componentDidMount() {
    this.makeItBig();
  }

  makeItBig() {
    this.setState({ modalVisible: true });
  }

  dismiss() {
    this.setState({ modalVisible: !this.state.modalVisible, });
    this.props.onPress('');
  }

  calculateThumbSize() {
    if (Dimensions.get('window').width > Dimensions.get('window').height) {
      //Landscape
      return {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').height,
      }
    } else {
      //Portrait
      return {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 30,
      }
    }
  }

  render() {
    return (
      <Modal animationType={"fade"} transparent = {true} visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}} >
        <View style={styles.modalView}>
          <View style={styles.viewClose}>
            <TouchableHighlight onPress={this.dismiss.bind(this)}>
              <Text style={styles.closeBtn}> ✕ </Text>
            </TouchableHighlight>
          </View>

          <View style={styles.container}>
            <LoadingImage
              imageContainerStyle={styles.imageContainer}
              url={this.props.url}
              style={[{resizeMode: 'contain'}, this.calculateThumbSize()]}
            />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  imageContainer: {
    flex: 1,
    // marginTop: 15,
    // marginLeft:10,
    // marginRight:10,
    // marginBottom: 15,
  },
  viewClose: {
    position: 'absolute',
    // height: 20,
    // width: 20,
    zIndex: 10,
    top: 15,
    left: 15,
  },
  closeBtn: {
    color: '#fff',
    fontSize: 25,
  },
});