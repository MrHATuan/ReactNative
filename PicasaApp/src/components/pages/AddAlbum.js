import React, { Component } from 'react';
import { StyleSheet, Dimensions, Animated, TouchableOpacity, TouchableHighlight,
    View, Text, ScrollView, TextInput, Button
} from 'react-native';
import { connect } from 'react-redux';
import { addAlbum } from '../../actions/index';

import LoadingImage from './LoadingImage';

import Api from '../../services/Api';

class AddAlbum extends Component {
    static navigationOptions = {
        headerRight: <Button title="Save" color="#05A5D1"/>,
        headerStyle: {
            backgroundColor: '#05A5D1',
        },
    };

    constructor(props) {
        super(props);
        this.state = {
          images: null,
          height: 50,
        };
        this.calculateThumbSize = this.calculateThumbSize.bind(this);
    }

    componentDidMount() {
        this.setState({ images: this.props.gallery.imageUpload});
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

    displayAllPhoto() {
        if(this.state.images) {
            return (
                <View>
                    <View>
                        <View style={styles.albumViewTitle}>
                            <TextInput style={[styles.albumTitle, {height: Math.max(50, this.state.height)}]} placeholder="Chưa có tên" 
                                multiline = {true} numberOfLines = {4}
                                onChange={(event) => { this.setState({ height: event.nativeEvent.contentSize.height }); }}
                            />
                        </View>
                    </View>
                    <View style={styles.gridContainer}>
                        {this.props.gallery.imageUpload.map((image) => {
                            return (
                                <LoadingImage
                                    key={image.fileSize}
                                    imageContainerStyle={styles.imageContainer}
                                    url={image.uri}
                                    style={ this.calculateThumbSize() }
                                />
                            );
                        })}
                    </View>
                </View>
            );
        }
    }

    render() {
        // console.log(this.props.gallery.imageUpload[0]['data']);
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scroll}>
                    {this.displayAllPhoto()}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    scroll: {
        flex: 1,
    },
    albumViewTitle: {
        marginTop: 35,
        marginBottom: 35,
        marginLeft: 60,
        marginRight: 10,
    },
    albumTitle: {
        width: Dimensions.get('window').width - 70,
        fontSize: 20,
        color: '#000',
    },
    gridContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
    },
});

export default connect(
    (state) => ({
        login: state.loginReducer,
        gallery: state.picasaReducer,
    }),
    {addAlbum}
)(AddAlbum);