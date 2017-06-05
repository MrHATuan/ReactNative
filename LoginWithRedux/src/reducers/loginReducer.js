// @flow weak
import * as actionTypes from '../constants/actionTypes';

// Reducer
const DEFAULT_STATE = {onLoggin: false}
export default function(state = DEFAULT_STATE, action) {
  switch(action.type) {
    case actionTypes.ON_LOGIN:
      return {...state, onLogging: true};
    default:
      return state;
  }
}

// Selectors (mapStateToProps)
export const getLogin = ({onLogging}) => ({
  onLogging
})