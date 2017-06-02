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
            dataPrize: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            date: Moment(new Date()).format('DD-MM-YYYY'),
        };
        // this.createViewTable = this.createViewTable.bind(this);
    }

    fetchData(date) {
        var URL = 'http://ketqua.net/xo-so-truyen-thong.php?ngay=' + date;
        var dataPrize = {};

        var request = new XMLHttpRequest();
        request.open('GET', URL, true);
        request.send();

        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
                var res = request.responseText.match();
                // console.log(request.response);
                console.log(request.responseText);
            } else {
                console.warn('connected error');
            }
        };

    }

    componentWillMount() {
        this.fetchData(this.state.date);
    }

    createViewTable(property) {
       return(
            <View style={Style.tableView}>
                <View style={Style.tableHeader}>
                    <Text style={Style.tableTitle}>XỔ SỐ TRUYỀN THỐNG</Text>
                    <Text style={Style.tableDate}>{property.lotteryDay}</Text>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={[Style.prizeName, Style.colorRed]}>Đặc biệt</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex12]}>
                        <Text style={[Style.prizeNumber, Style.colorRed]}>59431</Text>
                    </View>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải nhất</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex12]}>
                        <Text style={Style.prizeNumber}>62264</Text>
                    </View>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải nhì</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex6]}>
                        <Text style={Style.prizeNumber}>19529</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex6]}>
                        <Text style={Style.prizeNumber}>91706</Text>
                    </View>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải ba</Text>
                    </View>
                    <View style={Style.flex12}>
                        <View style={[Style.flexRows, Style.flex1]}>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>63512</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>16388</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>91015</Text>
                            </View>
                        </View>
                        <View style={[Style.flexRows, Style.flex1]}>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>63512</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>16388</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>91015</Text>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải tư</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>3926</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>7461</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>1925</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>2810</Text>
                    </View>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải năm</Text>
                    </View>
                    <View style={[Style.flex12, Style.flexColumn]}>
                        <View style={[Style.flexRows, Style.flex1]}>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>9910</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>1193</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>5161</Text>
                            </View>
                        </View>
                        <View style={[Style.flexRows, Style.flex1]}>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>9910</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>1193</Text>
                            </View>
                            <View style={[Style.prizeContent, Style.flex1]}>
                                <Text style={Style.prizeNumber}>5161</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải sáu</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex4]}>
                        <Text style={Style.prizeNumber}>738</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex4]}>
                        <Text style={Style.prizeNumber}>750</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex4]}>
                        <Text style={Style.prizeNumber}>694</Text>
                    </View>
                </View>
                <View style={[Style.flexRows, Style.flex1]}>
                    <View style={[Style.prizeTitle, Style.flex3]}>
                        <Text style={Style.prizeName}>Giải bảy</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>88</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>71</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>09</Text>
                    </View>
                    <View style={[Style.prizeContent, Style.flex3]}>
                        <Text style={Style.prizeNumber}>90</Text>
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

                {/*<ListView dataSource = {this.state.dataPrize}
                renderRow = {this.createViewTable.bind(this)} />*/}

            </View>

        );
    }
}

module.exports = Home;