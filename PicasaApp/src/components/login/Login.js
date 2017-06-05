import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { connect } from 'react-redux';
// import { login } from '../../actions/index';
// import { getLogin } from '../../reducers/index';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoggedIn: false,
      user: null
    };
  }

  // componentDidMount() {
  //   this._setupGoogleSignin();
  // }

  // async _setupGoogleSignin() {
  //   try {
  //     await GoogleSignin.hasPlayServices({ autoResolve: true });
  //     await GoogleSignin.configure({
  //       webClientId: '603421766430-60og8n04mebic8hi49u1mrcmcdmugnd5.apps.googleusercontent.com',
  //       offlineAccess: false
  //     });

  //     const user = await GoogleSignin.currentUserAsync();
  //     console.log(user);
  //     this.setState({user});
  //   }
  //   catch(err) {
  //     console.log("Play services error", err.code, err.message);
  //   }
  // }

  // _signIn() {
  //   GoogleSignin.signIn()
  //   .then((user) => {
  //     console.log(user);
  //     this.setState({user: user});
  //     // this.props.onLogin(this.state.user);
  //     e.preventDefault();
  //   })
  //   .catch((err) => {
  //     console.log('WRONG SIGNIN', err);
  //   })
  //   .done();
  // }

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton style={{width: 120, height: 44}} 
            color={GoogleSigninButton.Color.Light}
            size={GoogleSigninButton.Size.Icon}
            onPress={() => { this._signIn(); }}/>
      </View>
    );
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