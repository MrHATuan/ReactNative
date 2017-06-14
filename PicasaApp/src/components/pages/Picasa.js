// Show all Image
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, ActivityIndicator, ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { logout } from '../../actions/index';

import GifGrid from './GifGrid';
import ViewImage from './ViewImage';

import Api from '../../services/Api';

class Picasa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            images: [],
            // offSet: 0,
            // page: 1,
            showFullScreen: false,
        };
        this.displayFullScreen = this.displayFullScreen.bind(this);
    }

    async getImages() {
        var list_url = [
            {"id": 1, "url": require('../../assets/images/anh1.jpg')},
            {"id": 2, "url": require('../../assets/images/anh2.jpg')},
            {"id": 3, "url": require('../../assets/images/anh1.jpg')},
            {"id": 4, "url": require('../../assets/images/anh1.jpg')},
            {"id": 5, "url": require('../../assets/images/anh2.jpg')},
            {"id": 6, "url": require('../../assets/images/anh1.jpg')},
            {"id": 7, "url": require('../../assets/images/anh2.jpg')},
            {"id": 8, "url": require('../../assets/images/anh1.jpg')},
            {"id": 9, "url": require('../../assets/images/anh2.jpg')},
            {"id": 10, "url": require('../../assets/images/anh1.jpg')},
            {"id": 11, "url": require('../../assets/images/anh2.jpg')},
            {"id": 12, "url": require('../../assets/images/anh1.jpg')},
            {"id": 13, "url": require('../../assets/images/anh2.jpg')},
            {"id": 14, "url": require('../../assets/images/anh2.jpg')},
            {"id": 15, "url": require('../../assets/images/anh1.jpg')}
        ];

        this.setState({
            images: list_url,
            selectedImage: '',
            isLoading: false,
        })
    }

    componentDidMount() {
        this.getImages();
        Api.getAllAlbum('FETCHING_ALBUM', this.props.login.user.id, this.props.login.user.accessToken, this.props.login.user.serverAuthCode);
    }

    toggleFullScreen(url) {
        this.setState({
            showFullScreen: !this.state.showFullScreen,
            selectedImage: url,
        });
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

// export default Picasa;

export default connect(
    (state) => ({
        login: state.loginReducer,
    }),
)(Picasa);

// export default connect(null, {logout})(Picasa);

