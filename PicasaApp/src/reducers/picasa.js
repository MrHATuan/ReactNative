import * as actionTypes from '../constants/actionTypes';

const initialState = {
    title: 'snaps',
    hasLoadedPhoto: false,
    hasLoadedAlbum: false,
    fetchingPhoto: false,
    fetchingAlbum: false,
    viewPhoto: undefined,
    scrollOffsetY: 0,
    images: [],
    albums: [],
};

export default function gallery(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHING_PHOTO:
            return {
                ...state,
                fetchingPhoto: true,
                images: action.images
            };
        case actionTypes.FETCHING_ALBUM:
            return {
                ...state,
                fetchingAlbum: true,
                albums: action.albums
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

