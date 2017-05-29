import React, { Component } from 'react';
import {
    Text, View, StyleSheet, ListView, StatusBar, TouchableOpacity
} from 'react-native';

var MENU = [
    {name: 'Tin Tức'},
    {name: 'Hỏi đáp'},
    {name: 'Nhật ký'}
];

class Home extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(MENU),
            hidden: true
        };
        // this._pushView = this._pushView.bind(this);
        this.createRows = this.createRows.bind(this);
    }

    // _pushView(menuName) {
        // if(menuName == "Tin Tức") {
        //     this.props.navigator.push({
        //         name: 'Components',
        //         component: require('./Category'),
        //         props: {title: menuName}
        //     });
        // }
        // if(menuName == "Hỏi đáp") {
        //     this.props.navigator.push({
        //         name: 'Components',
        //         component: require('./HoiDap'),
        //         props: {title: menuName}
        //     });
        // }
        // if(menuName == "Nhật ký") {
        //     this.props.navigator.push({
        //         name: 'Components',
        //         component: require('./NhatKy'),
        //         props: {title: menuName}
        //     });
        // }
    // }

    createRows(property) {
        return (
            <TouchableOpacity style={styles.rows}>
                <View style={styles.title}>
                    <Text style={styles.text}>{property.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={this.state.hidden}/>
                {/*<View style={styles.header}>
                    <Text style={styles.headerText}></Text>
                </View>*/}
                <View style={styles.listMenu}>
                    <ListView dataSource={this.state.dataSource}
                    renderRow={this.createRows} />
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09c',
    },
    headerText: {
        color: 'white',
        fontSize:20,
        fontWeight: '400',
    },
    listMenu: {
        flex: 1,
        backgroundColor: 'white',
    },
    rows: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#09c',
    },
    title: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: '300',
    },
});

module.exports = Home;