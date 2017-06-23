import React, { Component } from 'react';
import { StyleSheet, Animated, TouchableOpacity,
    View, Text, Button
} from 'react-native';
import { connect } from 'react-redux';
import { addPhotos } from '../../actions/index';
import ImagePicker from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-crop-picker';

class MenuAdd extends Component {
    constructor(props) {
        super(props);
        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
    }

    selectPhotoTapped() {
        const options = {
            title: 'Select Picture',
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            takePhotoButtonTitle: null,
        };

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                // let source = { uri: response.uri };
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                var images = [];
                images.push(response);
                this.props.addPhotos(images);
                this.props.onPress('AddAlbumPage');
            }
        });

        // ImagePicker.openPicker({
        //     multiple: true,
        //     waitAnimationEnd: false
        // }).then(images => {
        //     this.props.addPhotos(images);
        //     this.props.onPress('AddAlbumPage');
        // }).catch((error) => {
        //     console.warn(error);
        // });
    }

    render() {
        return (
            <Animated.View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        zIndex: 10,
        bottom: 20,
        right: 20,
        width: 56,
        height: 56,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowRadius: 10,
    },
    addText: {
        fontSize: 40,
        fontWeight: '400',
        color: '#1f1f1f',
    },
});

export default connect(null, {addPhotos})(MenuAdd);