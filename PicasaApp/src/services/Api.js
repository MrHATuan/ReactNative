
import { BASE_URL, PICASA} from '../constants/apiTypes';
import * as actionTypes from '../constants/actionTypes';

const buildApiURL = (apiType, userId, numresults=10) => {
    let url = BASE_URL;
    switch(apiType) {
        case actionTypes.FETCHING_PHOTO:
            url += userId + PICASA.LIST_NEW_PHOTO + numresults;
            break;
        case actionTypes.FETCHING_ALBUM:
            url += userId + PICASA.All_ALBUM;
            break;
        case actionTypes.VIEW_PHOTO:
            break;
        case actionTypes.ADD_ALBUM:
            break;
        case actionTypes.ADD_PHOTOS:
            break;
        default:
            url;
    }

    return url;
}

export default {
    getPhoto: (apiType, userId) => {
        return "oke";
    },

    getAllAlbum: (apiType, userId, accessToken, serverAuthCode) => {
        var album = null;
        fetch(buildApiURL(apiType, userId), {
            method: 'GET',
            headers: {
                'access_token': accessToken,
                'serverAuthCode': serverAuthCode,
                'Authorization': 'Bearer ' + accessToken
            },
        })
        .then((response) => response.text())
        .then((responseText) => {
            console.log(buildApiURL(apiType, userId));
            console.log(responseText);
            album = responseText
        })
        .catch((error) => {
            console.error(error);
        })
        .done();

            return album;
    },
};