// Show all Image
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { logout } from '../../actions/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

// import GifGrid from './GifGrid';
// import ViewImage from './ViewImage';

class Picasa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isLoading: true,
            // images: [],
            // offSet: 0,
            // page: 1,
            // showFullScreen: false,
        };
        this._onLogOut = this._onLogOut.bind(this);
    }

    render() {
        console.log("day la: ", this.props.login.user);
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    Welcome hello
                </Text>
                <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.props.login.user.name}</Text>
                <Text>Your email is: {this.props.login.user.email}</Text>

                <View style={{margin: 20}}>
                    {<Button onPress={(e) => this._signOut()} title="Logout"/>}
                    <TouchableOpacity onPress={() => {this._signOut(); }}>
                        <View style={{marginTop: 50}}>
                            <Text style={{fontSize: 20}}>Log out</Text>
                        </View>
                    </TouchableOpacity>
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
)(Picasa);

// export default connect(null, {logout})(Picasa);

