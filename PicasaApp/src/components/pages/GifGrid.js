import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

import LoadingImage from './LoadingImage';

export default class GifGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      noMorePhotos: false,
    };
    this.calculateThumbSize = this.calculateThumbSize.bind(this);
  }

  calculateThumbSize() {
    if (Dimensions.get('window').width > Dimensions.get('window').height) {
      //Landscape
      return {
        width: (Dimensions.get('window').width - 40)/4,
        height: (Dimensions.get('window').width - 40)/4
      }
    } else {
      //Portrait
      return {
        width: (Dimensions.get('window').width - 30)/3,
        height: (Dimensions.get('window').width - 30)/3
      }
    }
  }
  
  // async onScroll(e) {
  //   var windowHeight = Dimensions.get('window').height,
  //     height = e.nativeEvent.contentSize.height,
  //     offset = e.nativeEvent.contentOffset.y;
  //   // if scroll is at the bottom of the page
  //   if(windowHeight + offset >= height + 50 && this.state.isLoading === false && !this.state.noMorePhotos){
  //     this.setState({
  //       isLoading: true,
  //     })
  //     if (await this.props.onScrollReachedEnd() === 0)
  //       this.setState({
  //         noMorePhotos: true,
  //       })
  //     this.setState({
  //       isLoading: false,
  //     })
  //   }
  // }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll}
          // onScroll={(e) => this.onScroll(e)}
        >
          <View style={styles.gridContainer}>
            {this.props.images.map((image) => {
              console.log(image);
              return (
                <TouchableOpacity
                  key={'touchable' + image.id}
                  onPress={() => this.props.onPress(image.link)}
                >
                  <LoadingImage
                    key={image.id}
                    imageContainerStyle={styles.imageContainer}
                    url={image.thumbnail[2]['$']['url']}
                    style={ this.calculateThumbSize() }
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          {<ActivityIndicator animating={this.state.isLoading} color="#000" size="large" />}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
  },
  gridContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    margin: 5,
    // borderWidth: 7,
    // backgroundColor: 'white',
    // borderColor: 'white',
  },
});