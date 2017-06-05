
import { combineReducers } from 'redux';
import loginReducer from './login';
import picasaReducer from './picasa'; 

export default combineReducers ({
    loginReducer,
    picasaReducer
});