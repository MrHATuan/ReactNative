
import { combineReducers } from 'redux';
import loginReducer from './login';
import picasaReducer from './picasa'; 

export default combineReducers ({
    login: loginReducer,
    picasa: picasaReducer
});