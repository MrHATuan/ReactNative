import React, { Component } from 'react';
import {
    Text, View, StyleSheet, ListView, StatusBar, TouchableOpacity
} from 'react-native';


var deviceScreen = require('Dimensions').get('window');

var URL     = 'http://localhost/tuanha/AppCancer_API/SicknessNews.php';

class Category extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(this.props.passProps.sickness),
        };
        this.pushView = this.pushView.bind(this);
    }

    pushView(name) {
        fetch(URL, {method: "POST", body: JSON.stringify({sickName: name})})
            .then((response) => response.json())
            .then((responseData) => {
                this.props.navigator.push({
                    name: 'SicknessNews',
                    component: require('./SicknessNews'),
                    props: {title: name, sickness: responseData}
                });
            })
            .done()
    }

    componentDidMount() {
        this.fetchData();
    }

    createRows(property) {
        return(
            <TouchableOpacity style={styles.rows} onPress={() => this.pushView(property.sickName)}>
                <View style={styles.titleCatagory}>
                    <Text style={styles.nameCatagory}>{property.sickName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigator.pop()}>
                        <Text style={styles.titleHeader}>Back</Text>
                    </TouchableOpacity>
                    <View style={styles.titleBox}>
                        <Text style={styles.titleHeader}>{this.props.passProps.title}</Text>
                    </View>
                </View>

                <View style={styles.list}>
                    <ListView dataSource = {this.state.dataSource}
                    renderRow = {this.createRows.bind(this)} />
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
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#09c',
    },
    backButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#09c',
    },
    titleBox: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: deviceScreen.width/7,
        backgroundColor: '#09c',
    },
    titleHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },
    list: {
        flex: 10,
        backgroundColor: '#f7f7f7',
    },
    rows: {
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#09c',
    },
    titleCatagory: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nameCatagory: {
        fontSize: 18,
        fontWeight: '300',
    },
});

module.exports = Category;