import {StyleSheet} from 'react-native';

var deviceScreen = require('Dimensions').get('window');

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    datepicker: {
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
    },
    viewPrize: {
        flex: 10,
        alignItems: 'center',
    },
    tableView: {
        flex: 1,
        width: '100%',
        borderWidth: 4,
        borderColor: '#7e7e7e',
        backgroundColor: '#fff',
    },
    tableHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 5,
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
    prizeTitle: {
        // flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRightWidth: 1,
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
        borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    prizeNumber: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
    },
    flexRows: {
        flexDirection: 'row',
    },
    flexColumn: {
        flexDirection: 'column',
    },
    flex1: {
        flex: 1,
    },
    flex2: {
        flex: 2,
    },
    flex3: {
        flex:  3,
    },
    flex4: {
        flex: 4,
    },
    flex6: {
        flex: 6,
    },
    flex10: {
        flex: 10,
    },
    flex12: {
        flex: 12,
    },
    colorRed: {
        color: '#ff0000',
    },
    
});

export default styles;