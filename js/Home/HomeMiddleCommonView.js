/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text,Image, View} from 'react-native';

var Demensions = require('Dimensions');
//初始化宽高
var {width, height} = Demensions.get('window');
export default class HomeMiddleCommonView extends Component<Props> {
    static defaultProps={
        title:"",
        subTitle:"",
        rightIcon:undefined,
        titleColor:"",
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <View>
                <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                <Text style={styles.subTitltStyle}>{this.props.subTitle}</Text>
                </View>
                <Image source={this.props.rightIcon} style={{width:64,height:43}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        width:width*0.5-1,
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:"row",
        borderBottomColor:'blue',
        borderBottomWidth:0.5,
    },
    subTitltStyle:{
        color:'gray'
    }
});


