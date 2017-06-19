import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

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
        width: (Dimensions.get('window').width - 60)/3,
        height: (Dimensions.get('window').width - 60)/3
      }
    } else {
      //Portrait
      return {
        width: (Dimensions.get('window').width - 40)/2,
        height: (Dimensions.get('window').width - 40)/2
      }
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.gridContainer}>
                    {this.props.albums.map((album) => {
                        <TouchableOpacity
                            // key={'touchable' + album.id}
                            // onPress={() => this.props.onPress(album.link)}
                        >
                            <View style={styles.albumContainer}>
                                <Text>this album</Text>
                                {/*<Image source={{uri: album.url}} style={this.calculateThumbSize()} />*/}
                            </View>
                        </TouchableOpacity>
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
  albumContainer: {
    margin: 10,
    // borderWidth: 7,
    // backgroundColor: 'white',
    // borderColor: 'white',
  },
});