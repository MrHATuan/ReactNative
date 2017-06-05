import * as actionTypes from '../constants/actionTypes';

// Google login logout
export function login(user) {
    return { 
        type: actionTypes.GOOGLE_LOGIN,
        user: user 
    };
}

export function logout() {
    return { type: actionTypes.GOOGLE_LOGOUT };
}


//App related
export function isFetching() {
    return { type: actionTypes.IS_FETCHING };
}

export function doneFetching() {
    return { type: actionTypes.DONE_FETCHING };
}

export function viewPhoto(photo) {
    return { type: actionTypes.VIEW_PHOTO, photo };
}

export function closePhoto(photo) {
    return { type: actionTypes.CLOSE_PHOTO, photo };
}

export function setScrollOffsetY(offset) {
    return { type: actionTypes.SET_SCROLL_OFFSET_Y, offset };
}


//Photo related
export function addAlbum(album) {
    return { type: actionTypes.ADD_ALBUM, album };
}

export function delAlbum(album) {
    return { type: actionTypes.DEL_ALBUM, album };
}

export function addPhotos(photos) {
    return { type: actionTypes.ADD_PHOTOS, photos };
}

export function delPhotos(photos) {
    return { type: actionTypes.DEL_PHOTOS, photos };
}