import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, Button,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { showAlbum } from '../../actions/index';

import LoadingImage from './LoadingImage';

class ListAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoadingAlbum: false,
    };
    this._goToDetailPhoto = this._goToDetailPhoto.bind(this);
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

  _goToDetailPhoto(album) {
    this.props.showAlbum(album);
    this.props.onPress('DetailAlbum', {title: album.title._});
  }

  render() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.gridContainer}>
                    {this.props.albums.map((album) => {
                        return (
                          <TouchableOpacity
                              key={'touchable' + album.id}
                              onPress={(e) => this._goToDetailPhoto(album)} 
                          >
                              <LoadingImage
                                key={album.id}
                                imageContainerStyle={styles.albumContainer}
                                url={album.thumbnail[0]['$']['url']}
                                style={ this.calculateThumbSize() }
                              />
                              <View style={styles.albumInfor}>
                                  <Text style={styles.albumTitle}>{album.title._}</Text>
                                  <Text style={styles.albumNumPhoto}>{album.numphoto} ảnh</Text>
                              </View>
                          </TouchableOpacity>
                        );
                    })}
                </View>
                {<ActivityIndicator animating={this.state.isLoadingAlbum} color="#000" size="large" />}
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
  },
  albumInfor: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  albumTitle: {
    fontSize: 17,
    fontWeight: '400',
    color: '#000',
  },
  albumNumPhoto: {
    fontSize: 14,
    fontWeight: '100',
  },
});

export default connect(null, {showAlbum})(ListAlbum);