import * as actionTypes from '../constants/actionTypes';

const initialState = {
    title: 'snaps',
    hasLoaded: false,
    isFetching: false,
    viewPhoto: undefined,
    scrollOffsetY: 0
};

export default function gallery(state = initialState, action) {
    switch (action.type) {
        case actionTypes.IS_FETCHING:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.DONE_FETCHING:
            return {
                ...state,
                isFetching: false,
                hasLoaded: true
            };
        case actionTypes.VIEW_PHOTO:
            return {
                ...state,
                viewPhoto: action.photo
            };
        case actionTypes.CLOSE_PHOTO:
            return {
                ...state,
                viewPhoto: undefined
            };
        case actionTypes.SET_SCROLL_OFFSET_Y:
            return {
                ...state,
                scrollOffsetY: action.offset
            };
        default: 
            return state;
    }
};