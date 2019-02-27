/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Image,StatusBar} from 'react-native';

export default class MoreCommonItem extends Component<Props> {

    static defaultProps = {
        leftIconName:undefined,
        leftTitle: '',
        rightIconName:undefined,
        rightTitle: ''
    }
    rightSubView(){
        if (this.props.rightIconName == undefined) {
            return (
                <Text style={{color:'gray'}}>
                    {this.props.rightTitle}
                </Text>
            );
        } else {
            return (
                <Image source={this.props.rightIconName} style={{width: 24, height: 13}}/>
            )
        }
    }

    render() {

        return (
            <View style={styles.containStyle}>
                {/*左边*/}
                <View  style={styles.leftViewStyle}>
                    <Image source={this.props.leftIconName} style={styles.leftImgStyle}/>
                    <Text style={{marginLeft:10}}>
                        {this.props.leftTitle}
                    </Text>
                </View>


                {/*右边*/}
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    {this.rightSubView()}
                    <Image source={require('../../res/images/icon_cell_rightarrow.png')}
                           style={{width: 8, height: 13, marginRight: 10,marginLeft: 8}}/>
                </View>

             </View>
        );
    }


}

const styles = StyleSheet.create({
    leftImgStyle:{
        width:30,
        height:30,
        marginLeft:6,
        borderRadius:12
    }
    ,
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
    },

    containStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height:40,
        borderBottomColor: '#e8e8e8',
        borderBottomWidth:0.5,
    }
});
