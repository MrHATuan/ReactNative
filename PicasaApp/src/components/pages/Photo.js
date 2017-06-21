// Show all Image
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingPhoto } from '../../actions/index';

import GifGrid from './GifGrid';
import ViewImage from './ViewImage';

import Api from '../../services/Api';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            images: [],
            // offSet: 0,
            // page: 1,
            showFullScreen: false,
        };
        this.getImages = this.getImages.bind(this);
        this.displayFullScreen = this.displayFullScreen.bind(this);
    }

    getImages() {
        this.setState({
            images: this.props.gallery.images,
            selectedImage: '',
            isLoading: false,
        });
    }

    componentDidMount() {
        Api.getAllPhoto('FETCHING_PHOTO', this.props.login.user.id, this.props.login.user.accessToken)
        .then((images) => {
            this.props.fetchingPhoto(images);
        })
        .then(() => {this.getImages()})
        .catch((error) => {
            console.warn(error);
        });
    }

    toggleFullScreen(url) {
        if(url){
            Api.getPhoto(url, this.props.login.user.accessToken)
            .then((photo) => {
                this.setState({
                    showFullScreen: !this.state.showFullScreen,
                    selectedImage: photo[0]['$']['url'],
                });
                
            })
            .catch((error) => {
                console.warn(error);
            });
        } else {
            this.setState({
                    showFullScreen: !this.state.showFullScreen,
                    selectedImage: '',
                });
        }
    }

    displayFullScreen() {
        if (this.state.showFullScreen){
            return (
                <ViewImage
                    url={this.state.selectedImage}
                    onPress={this.toggleFullScreen.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.displayFullScreen()}
                {<ActivityIndicator animating={this.state.isLoading} color="#000" size="large" />}
                <GifGrid
                    images={this.state.images}
                    onPress={this.toggleFullScreen.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dfdfdf',
  },
});

export default connect(
    (state) => ({
        login: state.loginReducer,
        gallery: state.picasaReducer,
    }),
    {fetchingPhoto}
)(Photo);