import React, { Component } from 'react';
import {
    Text, View, Styleheet, ListView, StatusBar, TouchableOpacity, 
    WebView,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Moment from 'moment';

import Style from '../../stylesheets/HomeStyle';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: Moment(new Date()).format('DD-MM-YYYY'),
            dateText: null,
            specialPrizes: [],
            firstPrizes: [],
            secondPrizes: [],
            thirdPrizes: [],
            fourthPrizes: [],
            fifthPrizes: [],
            sixthPrizes: [],
            seventhPrizes: [],
        };
        this.createViewTable = this.createViewTable.bind(this);
    }

    fetchData(date) {
        var URL = 'http://ketqua.net/xo-so-truyen-thong.php?ngay=' + date;
        var dataPrize = {};

        fetch(URL, {method: "GET"})
        .then((response) => response.text())
            .then((responseText) => {
                var startIndex = responseText.indexOf('<table class="table table-condensed kqcenter kqvertimarginw table-kq-border table-kq-hover table-kq-north-west table-bordered kqbackground table-kq-bold-border" id="result_tab_mb" style="text-align:center;">');
                var endIndex = responseText.indexOf('</table>', startIndex) + 8;
                var tableText = responseText.substring(startIndex, endIndex);

                this.getDataFromWebText(tableText);
            })
            .catch((error) => {
                console.warn(error);
            })
            .done();
    }

    getDataFromWebText(webText) {
        var DomParser = require('react-native-html-parser').DOMParser;
        var textHTML = new DomParser().parseFromString(webText, 'text/html');
        var listTD = textHTML.getElementsByTagName('td');

        // replace clear newline (enter)
        this.setState({dateText: listTD[0].childNodes[2].textContent.replace(/(?:\r\n|\r|\n)/g, '')});

        var prizesArray = [];
        
        for (var i = 0; i < listTD.length; i++) {
            if (!isNaN(listTD[i].textContent) && listTD[i].textContent) {
                prizesArray.push(listTD[i].textContent);
            }
        }

        this.setState({
            specialPrizes: prizesArray.slice(0, 1), 
            firstPrizes: prizesArray.slice(1, 2),
            secondPrizes: prizesArray.slice(2, 4),
            thirdPrizes: prizesArray.slice(4, 10),
            fourthPrizes: prizesArray.slice(10, 14),
            fifthPrizes: prizesArray.slice(14, 20),
            sixthPrizes: prizesArray.slice(20, 23),
            seventhPrizes: prizesArray.slice(23, 27),
        });
    }

    componentWillMount() {
        this.fetchData(this.state.date);
    }

    createViewTable() {
       return(
            <View style={Style.tableView}>
                <View style={Style.tableHeader}>
                    <Text style={Style.tableTitle}>XỔ SỐ TRUYỀN THỐNG</Text>
                    <Text style={Style.tableDate}>{this.state.dateText}</Text>
                </View>
                <View style={[Style.flexRows, Style.flex10]}>
                    <View style={Style.flex2}>
                        <View style={[Style.flexColumn, Style.flex1]}>
                            <View style={[Style.prizeTitle, Style.flex1]}>
                                <Text style={[Style.prizeName, Style.colorRed]}>Đặc biệt</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex1]}>
                                <Text style={Style.prizeName}>Giải nhất</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex1]}>
                                <Text style={Style.prizeName}>Giải nhì</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex2]}>
                                <Text style={Style.prizeName}>Giải ba</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex1]}>
                                <Text style={Style.prizeName}>Giải tư</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex2]}>
                                <Text style={Style.prizeName}>Giải năm</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex1]}>
                                <Text style={Style.prizeName}>Giải sáu</Text>
                            </View>
                            <View style={[Style.prizeTitle, Style.flex1]}>
                                <Text style={Style.prizeName}>Giải bảy</Text>
                            </View>
                        </View>
                    </View>
                    <View style={Style.flex10}>
                        <View style={[Style.flexColumn, Style.flex1]}>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={[Style.prizeNumber, Style.colorRed]}>{this.state.specialPrizes[0]}</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>{this.state.firstPrizes[0]}</Text>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.secondPrizes[0]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.secondPrizes[1]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.thirdPrizes[0]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.thirdPrizes[1]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.thirdPrizes[2]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.thirdPrizes[3]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.thirdPrizes[4]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.thirdPrizes[5]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fourthPrizes[0]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fourthPrizes[1]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fourthPrizes[2]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fourthPrizes[3]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fifthPrizes[0]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fifthPrizes[1]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fifthPrizes[2]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fifthPrizes[3]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fifthPrizes[4]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.fifthPrizes[5]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.sixthPrizes[0]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.sixthPrizes[1]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.sixthPrizes[2]}</Text>
                                </View>
                            </View>
                            <View style={[Style.flexRows, Style.flex1]}>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.seventhPrizes[0]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.seventhPrizes[1]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.seventhPrizes[2]}</Text>
                                </View>
                                <View style={[Style.prizeContent, Style.flex1]}>
                                    <Text style={Style.prizeNumber}>{this.state.seventhPrizes[3]}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        Moment.locale('vi');

        return(
            <View style={Style.container}>
                <StatusBar hidden={true} />

                <View style={Style.datepicker}>
                    <DatePicker
                        style={{width: 300}}
                        date={this.state.date}
                        mode="date"
                        format="DD-MM-YYYY"
                        minDate="01-01-2006"
                        maxDate={new Date()}
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 40,
                                borderWidth: 2,
                                borderColor: '#ff0000',
                            },
                            dateText: {
                                fontSize: 20,
                                fontWeight: '400',
                            },
                        }}
                        onDateChange={(date) => {this.setState({date: date}), this.fetchData(date)}}
                    />
                </View>
                <View style={Style.viewPrize}>
                    {this.createViewTable()}

                    {/*<ListView dataSource = {this.state.dataPrize}
                    renderRow = {this.createViewTable.bind(this)} />*/}
                </View>
            </View>
        );
    }
}

module.exports = Home;