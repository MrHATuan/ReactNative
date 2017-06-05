import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { ScrollView, Text, View, Button, TouchableOpacity } from 'react-native';
// import configureStore from './store/configureStore';

import Login from './components/login/Login';
import Picasa from './components/pages/Picasa';

// const store = configureStore();

export default class App extends Component {
    constructor(props) {
        super(props);
    }


    render () {
        // return (
        //     <ScrollView style={{padding: 20}}>
        //         <Text style={{fontSize: 27}}>
        //             Welcome hello
        //         </Text>

        //         <View style={{margin: 20}}>
        //             {<Button title="Logout"/>}
        //             <TouchableOpacity>
        //                 <View style={{marginTop: 50}}>
        //                     <Text>Log out</Text>
        //                 </View>
        //             </TouchableOpacity>
        //         </View>
        //     </ScrollView>
        // );
        if (this.props.currentUser.isLoggedIn && this.props.currentUser.user) {
            return (
                <Picasa />
            );
        } else {
            return (
                <Login />
            );
        }
    }
}

// function mapStateToProps(state) {
//     return {
//         currentUser: state.loginReducer,
//     };
// }

// export default connect(mapStateToProps)(App)

export default connect(state => ({
    currentUser: state.loginReducer
  })
)(App);