
import { combineReducers } from 'redux';
import loginReducer, * as fromLogin from './login';
import picasaReducer from './picasa'; 

export default combineReducers ({
    loginReducer,
    picasaReducer
});