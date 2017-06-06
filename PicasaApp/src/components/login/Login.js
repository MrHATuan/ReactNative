import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import { connect } from 'react-redux';
// import { login } from '../../actions/index';
// import { getLogin } from '../../reducers/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this._setupGoogleSignin();
  }


  render() {
    if (!this.state.user) {
      return (
        <View style={styles.container}>
          <GoogleSigninButton style={{width: 120, height: 44}} 
              color={GoogleSigninButton.Color.Light}
              size={GoogleSigninButton.Size.Icon}
              onPress={() => { this._signIn(); }}/>
        </View>
      );
    }

    if (this.state.user) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.state.user.name}</Text>
          <Text>Your email is: {this.state.user.email}</Text>

          <TouchableOpacity onPress={() => {this._signOut(); }}>
            <View style={{marginTop: 50}}>
              <Text>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    }
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
      console.log(123);
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
      console.log(456);
      this.setState({user: user});
      // this.props.login(this.state.user);
    })
    .catch((error) => {
      console.log('WRONG SIGNIN', error);
    })
    .done();
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

// const mapStateToProps = (state) => {
//     return {
//         isLoggedIn: state.login.isLoggedIn,
//         user: state.login.user
//     };
// }
 
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogin: (user) => { dispatch(login(user)); },
//     }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(Login);