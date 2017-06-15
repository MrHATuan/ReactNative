import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
    avatarUser: {
        flex: 1,
        paddingTop: 30,
        paddingBottom: 30,
        alignItems: 'center',
    },
    avatarImg: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },

    viewUserDetail: {
        flex: 1,
        alignItems: 'center',
    },
    viewUser: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 30,
    },
    userTitle: {
        flex: 1,
        flexDirection: 'column',
    },
    userContent: {
        flex: 1,
        flexDirection: 'column',
    },
    viewTitle: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#FFA500', 
    },
    textTitle: {
        fontSize: 17,
        fontWeight: '400',
        color: '#000',
    },
    viewContent: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        marginLeft: 15,
        marginRight: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#999',
    },
    textContent: {
        fontSize: 17,
        fontWeight: '100',
        color: '#444',
    },

    buttonLogOut: {
        flex: 2,
        marginTop: 20,
        marginLeft: 70,
        marginRight: 70,
    },

    flex3: {
        flex: 3,
    },
    flex7: {
        flex: 7,
    },
});

export default styles;