// Google Login page
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../actions/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this._onSignInSuccess = this._onSignInSuccess.bind(this);
  }

  // componentDidMount() {
  //   this._setupGoogleSignin();
  // }

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton style={{width: 200, height: 65}} 
            color={GoogleSigninButton.Color.Light}
            size={GoogleSigninButton.Size.Standard}
            onPress={() => { this._signIn(); }}/>
      </View>
    );
  }

  // async _setupGoogleSignin() {
  //   try {
  //     await GoogleSignin.hasPlayServices({ autoResolve: true });
  //     await GoogleSignin.configure({
  //       iosClientId: '125267211347-rgk23m97vdc4i2i9co5pk3604cs4ic3s.apps.googleusercontent.com',
  //       webClientId: '125267211347-0v165q7j9re2fv0ggjduv523b9h8d8bb.apps.googleusercontent.com',
  //       offlineAccess: true
  //     });

  //     const user = await GoogleSignin.currentUserAsync();
  //     console.log(user);
  //     this.setState({user});
  //   }
  //   catch(error) {
  //     console.warn("Play services error", error.code, error.message);
  //   }
  // }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      // console.log(user);
      this.setState({user: user});
    })
    .then(() => {this._onSignInSuccess();})
    .catch((error) => {
      console.warn('WRONG SIGNIN', error);
    })
    .done();
  }

  _onSignInSuccess() {
    console.log("Login success! Day la user:", this.state.user);
    const user = this.state.user;
    this.props.login(user);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default connect(null,{login})(Login);