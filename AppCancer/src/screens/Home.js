import React, { Component } from 'react';
import {
    Text, View, Styleheet, ListView, StatusBar, TouchableOpacity, 
    WebView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

import Style from '../../stylesheets/HomeStyle';

var htmlView = '<style type="text/css">td {border: 1px solid #ccc; border-collapse: collapse;}</style>' +
                '<table style="text-align: center; border: 4px solid #7e7e7e; width: 100%;">' +
                    '<thead>' +
                        '<tr><td colspan="13"><h2>XỔ SỐ TRUYỀN THỐNG</h2></td></tr>' +
                    '</thead>' +
                    '<tbody>' +
                        '<tr>' +
                            '<td>Đặc biệt</td>' +
                            '<td colspan="12">59431</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Giải nhất</td>' +
                            '<td colspan="12">62264</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Giải nhì</td>' +
                            '<td colspan="6">19529</td>' +
                            '<td colspan="6">91706</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td rowspan="2">Giải ba</td>' +
                            '<td colspan="4">42212</td>' +
                            '<td colspan="4">52807</td>' +
                            '<td colspan="4">68981</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td colspan="4">39571</td>' +
                            '<td colspan="4">64597</td>' +
                            '<td colspan="4">92204</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Giải tư</td>' +
                            '<td colspan="3">1000</td>' +
                            '<td colspan="3">8339</td>' +
                            '<td colspan="3">0010</td>' +
                            '<td colspan="3">4054</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td rowspan="2">Giải năm</td>' +
                            '<td colspan="4">7981</td>' +
                            '<td colspan="4">5617</td>' +
                            '<td colspan="4">8195</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td colspan="4">9506</td>' +
                            '<td colspan="4">1720</td>' +
                            '<td colspan="4">5192</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Giải sáu</td>' +
                            '<td colspan="4">261</td>' +
                            '<td colspan="4">107</td>' +
                            '<td colspan="4">351</td>' +
                        '</tr>' +
                        '<tr>' +
                            '<td>Giải bảy</td>' +
                            '<td colspan="3">14</td>' +
                            '<td colspan="3">75</td>' +
                            '<td colspan="3">25</td>' +
                            '<td colspan="3">80</td>' +
                        '</tr>' +
                    '</tbody>' +
                '</table>';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            URL_API: 'http://ketqua.net/xo-so-truyen-thong.php?ngay=',
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            date: new Date(),
        };
        this.createViewTable = this.createViewTable.bind(this);
    }

    fetchData(date) {
        var URL = 'http://ketqua.net/xo-so-truyen-thong.php?ngay=' + date;

        this.setState({URL_API: URL})

        // fetch(URL, {method: "POST", body: null})
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         console.log(responseJson);
        //         // this.setState({
        //         //     dataSource: this.state.dataSource.cloneWithRows(responseJson)
        //         // });
        //     })
        //     .catch((error) => {
        //         console.warn(error);
        //     })
        //     .done();
    }


    componentDidMount() {
        this.fetchData(Moment(this.state.date).format('DD-MM-YYYY'));
    }

    createViewTable() {
       return(
            <View style={Style.tableView}>
                <View style={Style.tableHeader}>
                    <Text style={Style.tableTitle}>XỔ SỐ TRUYỀN THỐNG</Text>
                    <Text style={Style.tableDate}>{Moment(this.state.date).format('ddd DD-MM-YYYY')}</Text>
                </View>
                <View style={Style.listResuilt}>
                    <View style={Style.prizeTitle}>
                        <Text style={Style.prizeName}>Đặc biệt</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.rowOne]}>
                        <Text style={Style.prizeNumber}>59431</Text>
                    </View>
                </View>
                <View style={Style.listResuilt}>
                    <View style={Style.prizeTitle}>
                        <Text style={Style.prizeName}>Giải nhất</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.rowOne]}>
                        <Text style={Style.prizeNumber}>62264</Text>
                    </View>
                </View>
                <View style={Style.listResuilt}>
                    <View style={Style.prizeTitle}>
                        <Text style={Style.prizeName}>Giải nhì</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.rowTwo]}>
                        <Text style={Style.prizeNumber}>19529</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.rowTwo]}>
                        <Text style={Style.prizeNumber}>91706</Text>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return(
            <View style={Style.container}>
                <StatusBar hidden={true} />

                <View style={Style.datepicker}>
                    <DatePicker
                        style={{width: 300}}
                        date={this.state.date}
                        mode="date"
                        placeholder="placeholder"
                        format="DD-MM-YYYY"
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        locale="vi"
                        customStyle={{
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
                        }}
                        onDateChange={(date) => {this.setState({date: date}), this.fetchData(date)}}
                    />
                </View>
                
                {/*<WebView style={Style.webView}
                    source={{html: htmlView}}
                />*/}
                {this.createViewTable()}
            </View>

        );
    }
}

module.exports = Home;