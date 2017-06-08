
import { combineReducers } from 'redux';
import loginReducer, * as fromLogin from './login';
import picasaReducer from './picasa'; 
import nav from './navigator';

export default combineReducers ({
    nav,
    loginReducer,
    picasaReducer
});