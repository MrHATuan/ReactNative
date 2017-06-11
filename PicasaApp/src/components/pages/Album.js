// List Album
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { logout } from '../../actions/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class Album extends Component {
    constructor(props) {
        super(props);
        this._onLogOut = this._onLogOut.bind(this);
    }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Welcome Show All Album
                </Text>
                {/*<Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.props.login.user.name}</Text>
                <Text>Your email is: {this.props.login.user.email}</Text>*/}

                <View style={{margin: 20}}>
                    {<Button onPress={(e) => this.props.navigation.navigate('DetailAlbum')} title="Go to List Image"/>}
                </View>
                <View style={{margin: 50}}>
                    {<Button onPress={(e) => this._signOut()} title="Logout"/>}
                </View>
            </ScrollView>
        );
    }

    _signOut() {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            this.setState({user: null});
        })
        .then(() => {this._onLogOut();})
        .done();
    }

    _onLogOut() {
        this.props.logout();
    }
}

export default connect(
    (state) => ({
        login: state.loginReducer,
    }),
    {logout}
)(Album);