import React, { Component } from 'react';
import {
    Text, View, StyleSheet, ListView, StatusBar, TouchableOpacity
} from 'react-native';


var deviceScreen = require('Dimensions').get('window');

var URL_API = 'http://localhost/tuanha/AppCancer_API/Category.php';
var URL     = 'http://localhost/tuanha/AppCancer_API/Sickness.php';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        };
        this.pushView = this.pushView.bind(this);
    }

    fetchData() {
        fetch(URL_API, {method: "POST", body: null})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseData)
                })
            })
            .done()
    }

    pushView(id, name) {
        fetch(URL, {method: "POST", body: JSON.stringify({categoryId: id})})
            .then((response) => response.json())
            .then((responseData) => {
                this.props.navigator.push({
                    name: 'Sickness',
                    component: require('./Sickness'),
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
            <TouchableOpacity style={styles.rows} onPress={() => this.pushView(property.categoryId, property.categoryName)}>
                <View style={styles.titleCatagory}>
                    <Text style={styles.nameCatagory}>{property.categoryName}</Text>
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
                        <Text style={styles.titleHeader}>Tin Tuc</Text>
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