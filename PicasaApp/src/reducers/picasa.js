import * as actionTypes from '../constants/actionTypes';

const initialState = {
    hasLoadedPhoto: false,
    hasLoadedAlbum: false,
    fetchingPhoto: false,
    fetchingAlbum: false,
    viewPhoto: undefined,
    showAlbum: undefined,
    images: [],
    albums: [],
    imageUpload: undefined,
    albumUpload: undefined,
};

export default function gallery(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCHING_PHOTO:
            return {
                ...state,
                fetchingPhoto: true,
                images: action.images,
            };
        case actionTypes.FETCHING_ALBUM:
            return {
                ...state,
                fetchingAlbum: true,
                albums: action.albums,
            };
        case actionTypes.SHOW_ALBUM:
            return {
                ...state,
                showAlbum: action.album,
            };
        case actionTypes.VIEW_PHOTO:
            return {
                ...state,
                viewPhoto: action.image,
            };
        case actionTypes.CLOSE_PHOTO:
            return {
                ...state,
                viewPhoto: undefined,
            };
        case actionTypes.ADD_PHOTOS:
            return {
                ...state,
                imageUpload: action.images
            };
        case actionTypes.ADD_ALBUM:
            return {
                ...state,
                albumUpload: action.album
            };
        default: 
            return state;
    }
};

