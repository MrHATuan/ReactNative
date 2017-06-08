import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/index';
import { getLogin } from './reducers/index';

// import AppWithNavigationState from './navigators/AppNavigator';

// import { HomeStack } from './Router';

import { addNavigationHelpers, StackNavigator} from 'react-navigation';

import Login from './components/login/Login';
import Picasa from './components/pages/Picasa';

const AppWithNavigationState = StackNavigator({
  PicasaScreen: {
    screen: Picasa,
    navigationOptions: {
      title: 'Trang chủ',
    },
  },
});

const AppBeforeLogin = StackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
    },
  },
});




class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        // console.log("abc: ",this.props.login);
        if (this.props.login.isLoggedIn && this.props.login.user) {
            return (
                // <Picasa {...actions}/>
                // <ModalStack screenProps={this.props.PicasaScreen} />
                // <ModalStack screenProps={{initialRouteName: 'PicasaScreen'}} />
                <AppWithNavigationState />
            );
        } else {
            return (
                // <Login {...actions}/>
                // <ModalStack screenProps={this.props.LoginScreen} />
                // <ModalStack screenProps={{initialRouteName: 'LoginScreen'}} />
                <AppBeforeLogin />
            );
        }
        // <AppWithNavigationState />
    }
}

export default connect(
    (state) => ({
        login: state.loginReducer,
        // nav: state.nav,
    }),
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(App);

// export default App;