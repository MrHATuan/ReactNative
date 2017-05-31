import {StyleSheet} from 'react-native';

var deviceScreen = require('Dimensions').get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    datepicker: {
        // flex: 1,
        paddingTop: 20,
        alignItems: 'center',
    },
    webView: {
        // flex: 2,
        marginTop: 20,
        alignItems: 'center',
    },
    tableView: {
        flex: 1,
        marginTop: 20,
        borderWidth: 4,
        borderColor: '#7e7e7e',
    },
    tableHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#7E7E7E',
    },
    tableTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
    },
    tableDate: {
        fontSize: 15,
        fontWeight: '100',
        color: '#990000',
    },
    listResuilt: {
        flexDirection: 'row',
        flex: 1,
    },
    prizeTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRightColor: '#7E7E7E',
    },
    prizeName: {
        fontSize: 15,
        fontWeight: '100',
        color: '#000',
    },
    prizeContent: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    prizeNumber: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
    },
    rowOne: {
        flex: 12,
    },
    rowTwo: {
        flex: 6,
    },
    rowThree: {
        flex: 4,
    },
    rowFour: {
        flex: 3,
    },
});

export default styles;