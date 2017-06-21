import React, { Component } from 'react';
import { StyleSheet, Animated, Image, Dimensions, TouchableOpacity, TouchableNativeFeedback, View, Text } from 'react-native';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.containerHeight = new Animated.Value(56);
        this.buttonScale = new Animated.Value(0);
        this.state = {
            buttons: undefined,
            active: false,
        };
    }

    _animateUp() {
        if (!this.props.active) {
            Animated.spring(this.containerHeight, {
                toValue: this.state.buttons * 51.3 + 56,
            }).start();
            Animated.spring(this.buttonScale, {
                toValue: 1,
            }).start();
        } else {
            this.setState({
                active: false,
            });
            Animated.spring(this.containerHeight, {
                toValue: 56,
            }).start();
            Animated.spring(this.buttonScale, {
                toValue: 0,
            }).start();
        }
    }

    fabOnPress() {
        if (this.props.onPress) {
            this.props.onPress();
            this._animateUp();
            setTimeout(() => {
                this.setState({
                    active: this.props.active,
                });
            }, 100);
        }
    }

    render() {
        return (
            <Animated.View style={styles.containerStyle}>
                <TouchableOpacity onPress={() => this.fabOnPress()}>
                    <Text style={styles.addText}>+</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        position: 'absolute',
        top: undefined,
        bottom: 20,
        right: 20,
        left: undefined,
        width: 56,
        height: 56,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 28,
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',
        shadowRadius: 10,
    },
    addText: {
        fontSize: 40,
        fontWeight: '400',
        color: '#1f1f1f',
    },
});

// const styles = StyleSheet.create({
//     containerStyle: {
//         position: 'absolute',
//         top: undefined,
//         bottom: 20,
//         right: 20,
//         left: undefined,
//         width: 56,
//         height: this.containerHeight,
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     fab: {
//         height: 56,
//         width: 56,
//         borderRadius: 28,
//         elevation: 4,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.4,
//         justifyContent: 'center',
//         alignItems: 'center',
//         shadowRadius: 2,
//         position: 'absolute',
//         bottom: 0,
//         backgroundColor: 'blue',
//     },
//     iconStyle: {
//         color: '#fff',
//         fontSize: 24,
//         lineHeight: Platform.OS == 'ios' ? 27 : undefined,
//         ...iconStyle,
//     },
//     buttonStyle: {
//         position: 'absolute',
//         height: 40,
//         width: 40,
//         left: 7,
//         borderRadius: 20,
//         transform: this.state.active ? [{ scale: new Animated.Value(1) }] : [{ scale: this.buttonScale }],
//         marginBottom: 10,
//         backgroundColor: 'blue',
//     },
// });