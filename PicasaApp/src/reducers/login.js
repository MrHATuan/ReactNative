import * as actionTypes from '../constants/actionTypes';

// Reducer
const initialState = {
    isLoggedIn: false,
    user: null
};

export default function login(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GOOGLE_LOGIN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user
            };
        case actionTypes.GOOGLE_LOGOUT: 
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        default: 
            return state;
    }
};