// User Detail
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, ScrollView, Text, View, Button, Image } from 'react-native';
import { logout } from '../../actions/index';

import Style from '../../assets/css/UserStyle';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class User extends Component {
    constructor(props) {
        super(props);
        this._onLogOut = this._onLogOut.bind(this);
    }

    render() {
        return (
            <View style={Style.container}>
                <ScrollView style={Style.scroll}>
                    <View style={Style.avatarUser}>
                        <Image source={{uri: this.props.login.user.photo}} style={Style.avatarImg} />
                    </View>

                    <View style={Style.viewUserDetail}>
                        <View style={Style.viewUser}>
                            <View style={Style.flex3}>
                                <View style={Style.userTitle}>
                                    <View style={Style.viewTitle}>
                                        <Text style={Style.textTitle}>Name:</Text>
                                    </View>
                                    <View style={Style.viewTitle}>
                                        <Text style={Style.textTitle}>Email:</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={Style.flex7}>
                                <View style={Style.userContent}>
                                    <View style={Style.viewContent}>
                                        <Text style={Style.textContent}>{this.props.login.user.name}</Text>
                                    </View>
                                    <View style={Style.viewContent}>
                                        <Text style={Style.textContent}>{this.props.login.user.email}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={Style.buttonLogOut}>
                        <Button onPress={(e) => this._signOut()} title="Logout"/>
                    </View>
                </ScrollView>
            </View>
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
)(User);