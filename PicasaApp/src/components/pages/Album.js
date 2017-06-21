// List Album
import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAlbum } from '../../actions/index';

import ListAlbum from './ListAlbum';

import Api from '../../services/Api';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoadingAlbum: true,
            albums: [],
        };
        this.getAlbums = this.getAlbums.bind(this);
    }

    getAlbums() {
        this.setState({
            albums: this.props.gallery.albums,
            selectedAlbum: '',
            isLoadingAlbum: false,
        });
    }

    componentDidMount() {
        Api.getAllAlbum('FETCHING_ALBUM', this.props.login.user.id, this.props.login.user.accessToken)
        .then((albums) => {
            this.props.fetchingAlbum(albums);
        })
        .then(() => {this.getAlbums()})
        .catch((error) => {
            console.warn(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {<ActivityIndicator animating={this.state.isLoadingAlbum} color="#000" size="large" />}
                <ListAlbum
                    albums={this.state.albums}
                    onPress={this.props.navigation.navigate}
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
    {fetchingAlbum}
)(Album);