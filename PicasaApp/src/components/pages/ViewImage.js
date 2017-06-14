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
        height: Dimensions.get('window').height - 100,
        width: Dimensions.get('window').height
      }
    } else {
      //Portrait
      return {
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').width
      }
    }
  }

  render() {
    return (
      <Modal animationType={"fade"} transparent = {true} visible={this.state.modalVisible}
        onRequestClose={() => {alert("Modal has been closed.")}} >
        <View style={styles.modalView}>
          <TouchableHighlight onPress={this.dismiss.bind(this)}>
            <Text style={styles.closeBtn}> ✕ </Text>
          </TouchableHighlight>

          <View style={styles.container}>
            <ScrollView maximumZoomScale={5} minimumZoomScale={1}>
              <LoadingImage
                imageContainerStyle={styles.imageContainer}
                url={this.props.url}
                style={[{resizeMode: 'contain'}, this.calculateThumbSize()]}
              />
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft:10,
    marginRight:10,
    marginBottom: 10,
  },
  closeBtn: {
    color: '#808080',
    fontSize: 30,
  },
});