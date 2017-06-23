
import { BASE_URL, PICASA} from '../constants/apiTypes';
import * as actionTypes from '../constants/actionTypes';
import RNFetchBlob from 'react-native-fetch-blob';

const buildApiURL = (apiType, userId, albumId) => {
    let url = BASE_URL;
    switch(apiType) {
        case actionTypes.FETCHING_PHOTO:
            if (albumId) {
                url += userId + PICASA.PHOTO_OF_ALBUM + albumId
            } else {
                url += userId + PICASA.All_PHOTO;
            }
            break;
        case actionTypes.FETCHING_ALBUM:
            url += userId + PICASA.All_ALBUM;
            break;
        case actionTypes.VIEW_PHOTO:
            break;
        case actionTypes.ADD_ALBUM:
            break;
        case actionTypes.ADD_PHOTOS:
            url += userId + PICASA.ADD_PHOTOS;
            break;
        default:
            url;
    }

    return url;
};

const getApiInfor = (accessToken) => {
    return info = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/atom+xml',
            'Authorization': 'Bearer ' + accessToken,
        },
    };
};
const postApiInfor = (accessToken, length, body) => {
    return info = {
        method: 'POST',
        headers: {
            'GData-Version': '2',
            'Content-Type': 'multipart/related; boundary="END_OF_PART"',
            'Content-Length': length,
            'MIME-version': '1.0',
            'Authorization': 'Bearer ' + accessToken,
        },
        body: body,
    };
};

const toBinary = (str) => {
    var binary = "";

    for (i = 0; i < str.length; i++) {
        binary +=str[i].charCodeAt(0).toString(2);
    }

    return binary
}

const Api = {
    getAllAlbum: (apiType, userId, accessToken) => {
        var albums = [];

        return new Promise((resolve, reject) => {
            fetch(buildApiURL(apiType, userId), getApiInfor(accessToken))
            .then((response) => response.text())
            .then((responseText) => {
                var parseString = require('react-native-xml2js').parseString;

                parseString(responseText, function (error, albumInfors) {
                    albumInfors.feed.entry.forEach(function(albumEntry) {
                        // console.log(albumEntry);
                        var id        = albumEntry['gphoto:id'][0];
                        var link      = albumEntry['id'][0];
                        var title     = albumEntry['title'][0];
                        var timestamp = albumEntry['gphoto:timestamp'][0];
                        var numphoto  = albumEntry['gphoto:numphotos'][0];
                        var thumbnail = albumEntry['media:group'][0]['media:thumbnail'];

                        albums.push({id: id, link: link, title: title, timestamp: timestamp, numphoto: numphoto, thumbnail: thumbnail});
                    });
                });
                resolve(albums);
            })
            .catch((error) => {
                console.error(error);
            })
        });
    },

    // Load all photo of album


    // Load All Photo (max: 100 photos)
    getAllPhoto: (apiType, userId, accessToken, albumId) => {
        var images = [];

        return new Promise((resolve, reject) => {
            fetch(buildApiURL(apiType, userId, albumId), getApiInfor(accessToken))
            .then((response) => response.text())
            .then((responseText) => {
                var parseString = require('react-native-xml2js').parseString;

                parseString(responseText, function (error, photoInfors) {
                    if(photoInfors.feed.entry) {
                        photoInfors.feed.entry.forEach(function(photoEntry) {
                            var id        = photoEntry['gphoto:id'][0];
                            var link      = photoEntry['id'][0];
                            var title     = photoEntry['title'][0][1];
                            var timestamp = photoEntry['gphoto:timestamp'][0];
                            var thumbnail = photoEntry['media:group'][0]['media:thumbnail'];

                            images.push({id: id, link: link, title: title, timestamp: timestamp, thumbnail: thumbnail});
                        });
                    }
                });
                resolve(images);
            })
            .catch((error) => {
                console.error(error);
            })
        });
    },

    getPhoto: (url, accessToken) => {
        var photo = null;
        return new Promise((resolve, reject) => {
            fetch(url, getApiInfor(accessToken))
            .then((response) => response.text())
            .then((responseText) => {
                var parseString = require('react-native-xml2js').parseString;

                parseString(responseText, function (error, photoInfors) {
                    var photoEntry = photoInfors.entry;

                    photo = photoEntry['media:group'][0]['media:content'];
                });
                resolve(photo);
            })
            .catch((error) => {
                console.error(error);
            })
        });
    },

    uploadAlbum: () => {
        return false;
    },

    uploadPhoto: (apiType, userId, accessToken, images) => {
        var rawImgXml = '';
        if (images ) {
            // console.log(RNFetchBlob.wrap(images[0]['uri']));
            // console.log(RNFetchBlob.base64.encode(images[0]['data']));

            // rawImgXml = 'Content-Type: multipart/related; boundary="END_OF_PART"\n' +
                        // 'Content-Length: 423478347\n' +
                        // 'MIME-version: 1.0\n\n' +
            rawImgXml = '' +
                        'Media multipart posting\n' +
                        '--END_OF_PART\n' +
                        'Content-Type: application/atom+xml\n\n' +
                        '<entry xmlns="http://www.w3.org/2005/Atom">\n' +
                            '<title>'+ images[0]['fileName'] +'</title>\n' +
                            '<summary>This my images</summary>\n' +
                            '<category scheme="http://schemas.google.com/g/2005#kind" term="http://schemas.google.com/photos/2007#photo"/>\n' +
                        '</entry>\n' +
                        '--END_OF_PART\n' +
                        'Content-Type: '+ images[0]['type'] +'\n' +
                        'Content-Length: '+ images[0]['fileSize'] +'\n' +
                        'Slug: '+ images[0]['fileName'] + '\n' +
                        // 'Slug: '+ images[0]['uri'] + '\n' + RNFetchBlob.base64.encode(images[0]['data']) + '\n' +
                        images[0]['data'] + '\n' +
                        // RNFetchBlob.base64.encode(images[0]['data']) + '\n' +
                        '--END_OF_PART--';

            console.log('image: ', rawImgXml);

            return new Promise((resolve, reject) => {
                fetch(buildApiURL(apiType, userId), postApiInfor(accessToken, rawImgXml.length, rawImgXml))
                .then((response) => response.text())
                .then((responseText) => {
                    console.log('response: ', responseText);

                    resolve(rawImgXml);
                })
                .catch((error) => {
                    console.error(error);
                })



            });
        }

        
    },
};

export default Api;