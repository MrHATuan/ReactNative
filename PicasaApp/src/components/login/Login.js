import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../actions/index';

import { StackNavigator} from 'react-navigation';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

import Picasa from '../pages/Picasa';

const ModalStack = StackNavigator({
  PicasaScreen: {
    screen: Picasa,
    navigationOptions: {
      title: 'Trang chủ',
    },
  },

});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this._onSignInSuccess = this._onSignInSuccess.bind(this);
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }

  render() {
    // if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton style={{width: 120, height: 44}} 
              color={GoogleSigninButton.Color.Light}
              size={GoogleSigninButton.Size.Icon}
              onPress={() => { this._signIn().bind(this); }}/>
        </View>
      );
    // }

    // if (this.state.user) {
    //   return (
    //     <View style={styles.container}>
    //       <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
    //       <Text>Your email is: {this.state.user.email}</Text>

    //       <TouchableOpacity onPress={() => {this._signOut() }}>
    //         <View style={{marginTop: 50}}>
    //           <Text>Log out</Text>
    //         </View>
    //       </TouchableOpacity>
    //     </View>
    //   );
    // }
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        webClientId: '125267211347-0v165q7j9re2fv0ggjduv523b9h8d8bb.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({user});
    }
    catch(error) {
      console.warn("Play services error", error.code, error.message);
    }
  }

  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
    })
    .then(() => {this._onSignInSuccess();})
    .catch((error) => {
      console.log('WRONG SIGNIN', error);
    })
    .done();
  }

  // _signOut() {
  //       GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
  //           this.setState({user: null});
  //           // this.props.onLogout();
  //       })
  //       .done();
  //   }

  _onSignInSuccess() {
    console.log("Day la user:", this.state.user);
    const user = this.state.user;
    this.props.login(user);
    this.props.navigation.navigate('PicasaScreen');
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