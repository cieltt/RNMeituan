/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar,ListView} from 'react-native';
var Dimensions =require('Dimensions')
var {width, height} = Dimensions.get('window');
export default class HomeTopListView extends Component<Props> {

    constructor(Props) {
        super(Props);
        var ds=new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2})
        this.state={
            dataSource :ds.cloneWithRows(this.props.dataArr)
        }
    }
    render() {
        return (
            <ListView
             dataSource={this.state.dataSource}
             contentContainerStyle={styles.contentContainerStyle}
             renderRow={(rowData)=><View style={styles.cellStyle}><Image style={{width:60,height:60}} source={rowData.image}/><Text>{rowData.title}</Text></View>}
            />
        );
    }

}

const styles = StyleSheet.create({
    cellStyle:{
        width:80,
        height:80,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 10,

    },

    contentContainerStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width,
    }
});
