import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
// import { logout } from '../../actions/index';
 
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

export default class Picasa extends Component {

    // _signOut() {
    //     GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
    //         this.setState({user: null});
    //         this.props.onLogout();
    //         // e.preventDefault();
    //     })
    //     .done();
    // }

    render() {
        return (
            <ScrollView style={{padding: 20}}>
                <Text style={{fontSize: 27}}>
                    {/*{`Welcome ${this.props.username}`}*/}
                    Welcome hello
                </Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', marginBottom: 20}}>Welcome {this.props.currentUser.user.name}</Text>
                <Text>Your email is: {this.props.currentUser.user.email}</Text>

                <View style={{margin: 20}}>
                    {<Button onPress={(e) => this.userLogout(e)} title="Logout"/>}
                    <TouchableOpacity onPress={() => {this._signOut(); }}>
                        <View style={{marginTop: 50}}>
                            <Text>Log out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.loginReducer
//     };
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onLogout: () => { dispatch(logout()); }
//     }
// }
 
// export default connect(mapStateToProps, mapDispatchToProps)(Picasa);
// export default connect(mapStateToProps)(Picasa);