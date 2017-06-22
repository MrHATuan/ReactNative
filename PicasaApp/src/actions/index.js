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
export function fetchingPhoto(images) {
    return { type: actionTypes.FETCHING_PHOTO, images };
}

export function fetchingAlbum(albums) {
    return { type: actionTypes.FETCHING_ALBUM, albums };
}

export function showAlbum(album) {
    return { type: actionTypes.SHOW_ALBUM, album };
}

export function doneFetching() {
    return { type: actionTypes.DONE_FETCHING };
}

export function viewPhoto(image) {
    return { type: actionTypes.VIEW_PHOTO, image };
}

export function closePhoto(image) {
    return { type: actionTypes.CLOSE_PHOTO, image };
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

export function addPhotos(images) {
    return { type: actionTypes.ADD_PHOTOS, images };
}

export function delPhotos(images) {
    return { type: actionTypes.DEL_PHOTOS, images };
}