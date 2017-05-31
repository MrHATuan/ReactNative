import React, { Component } from 'react';
import {
    Text, View, StyleSheet, ListView, StatusBar, TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

var deviceScreen = require('Dimensions').get('window');

// var URL_API = 'http://10.0.2.2:80/tuanha/AppCancer_API/Category.php';
// var URL     = 'http://localhost/tuanha/AppCancer_API/Sickness.php';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            URL_API: 'http://ketqua.net/xo-so-truyen-thong.php?ngay=',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            date: new Date(),
        };
        this.pushView = this.pushView.bind(this);
    }

    fetchData(date) {
        console.warn(this.state.URL_API + date);

        fetch(this.state.URL_API + date, {method: "POST", body: null})
        .then((response) => console.warn(response))
        //     // .then((response) => response.json())
        //     // .then((responseJson) => {
        //     //     console.log(responseJson);
        //     //     // this.setState({
        //     //     //     dataSource: this.state.dataSource.cloneWithRows(responseJson)
        //     //     // });
            // })
        //     .catch((error) => {
        //         console.warn(error);
            // })
            .done();
    }

    pushView(id, name) {
        // fetch(URL, {method: "POST", body: JSON.stringify({categoryId: id})})
        //     .then((response) => response.json())
        //     .then((responseData) => {
        //         this.props.navigator.push({
        //             name: 'Sickness',
        //             component: require('./Sickness'),
        //             props: {title: name, sickness: responseData}
        //         });
        //     })
        //     .done()
    }

    componentDidMount() {
        this.fetchData(Moment(this.state.date).format('DD-MM-YYYY'));
    }

    createRows(property) {
        return(
            <TouchableOpacity style={styles.rows} onPress={() => this.pushView(property.categoryId, property.categoryName)}>
                <View style={styles.titleCatagory}>
                    <Text style={styles.nameCatagory}>{property.categoryName}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} />
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.titleHeader}>Back</Text>    
                    </TouchableOpacity>
                    <View style={styles.titleBox}>
                        <Text style={styles.titleHeader}>Tin Tức</Text>
                    </View>
                </View>

                <View style={styles.listCategory}>
                    <ListView dataSource = {this.state.dataSource}
                    renderRow = {this.createRows.bind(this)} />
                </View>

                <View style={styles.datepicker}>
                    <DatePicker
                        style={{width: 300}}
                        date={this.state.date}
                        mode="date"
                        placeholder="placeholder"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        locale="vi"
                        customStyles={{
                            datePickerMask: {
                                backgroundColor: '#ff0000',
                            },
                            datePickerCon: {
                                backgroundColor: '#000',
                            },
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                marginLeft: 40,
                                borderWidth: 2,
                                borderColor: '#ff0000',
                            },
                            dateText: {
                                fontSize: 20,
                            },
                            btnTextCancel: {
                                color: '#ff0000',
                            },
                            datePicker: {
                                backgroundColor: '#ff0000'
                            }
                        }}
                        onDateChange={(date) => {this.setState({date: date}), this.fetchData(date)}}
                    />
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
    listCategory: {
        flex: 10,
        alignItems: 'center',
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
    datepicker: {
        flex: 5,
        paddingTop: 15,
        alignItems: 'center',
    },
});

module.exports = Category;