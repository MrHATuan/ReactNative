import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
import { logout } from '../../actions/index';
 
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Login from '../login/Login';

const ModalStack = StackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      title: 'Trang chủ',
    },
  },

});

class Picasa extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // user: null
        };
        this._onLogOut = this._onLogOut.bind(this);
    }

    componentDidMount() {
        this._setupGoogleSignin();
      }

    render() {
        console.log("day la: ", this.props.user.name);
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {/*{`Welcome ${this.props.username}`}*/}
                    Welcome hello
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.props.user.name}</Text>
                <Text>Your email is: {this.props.user.email}</Text>

                <View style={{margin: 20}}>
                    {<Button onPress={(e) => this._signOut()} title="Logout"/>}
                    <TouchableOpacity onPress={() => {this._signOut(); }}>
                        <View style={{marginTop: 50}}>
                            <Text>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }

    // async _setupGoogleSignin() {
    //     try {
    //         await GoogleSignin.hasPlayServices({ autoResolve: true });
    //         await GoogleSignin.configure({
    //             webClientId: '125267211347-0v165q7j9re2fv0ggjduv523b9h8d8bb.apps.googleusercontent.com',
    //             offlineAccess: true
    //         });

    //         const user = await GoogleSignin.currentUserAsync();
    //         console.log(user);
    //         this.setState({user});
    //     }
    //     catch(error) {
    //         console.warn("Play services error", error.code, error.message);
    //     }
    // }

    _signOut() {
        GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
            this.setState({user: null});
            this.props.onLogout();
        })
        .done();
        this._onLogOut();
    }

    _onLogOut() {
        this.props.logout();
        this.props.navigation.navigate('LoginScreen');
        // this.props.navigator.pop()
    }
}

export default connect(null, {logout})(Picasa);

