/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image,Text, View,Button} from 'react-native';


export default class FindItem extends Component<Props> {
    static deaultProps={
        leftUrl:"",
        mainTitle:"",
        sencondTitle:"",
        price:"",
        chuXiaoPrice:"",
        distance:"",
        little:0,
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Image source={{uri:this.props.leftUrl}} style={{width:120,height:120,marginLeft:10}}/>
                <View>
                    <View style={{flexDirection:'row',alignItems:'center',flexWrap:'wrap'}}>
                    <View style={styles.middleViewStyle}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>
                            {this.props.mainTitle}
                        </Text>

                        <Text style={{fontSize:12,color:'gray',}}>
                            {this.props.sencondTitle}
                        </Text>

                    </View>
                        <Text style={{fontSize:12,color:'gray'}}>
                            {this.props.distance}
                        </Text>
                        <View>
                        <Text>
                            ￥{this.props.price}
                        </Text>
                            <Text>
                                ￥{this.props.little}
                            </Text>
                        <Button
                            title={this.props.chuXiaoPrice+"抢"}
                            style={styles.rightBtnStyle}
                        />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    middleViewStyle:{
    },
    rightBtnStyle:{
        borderRadius:12,
        color:"rgb(255,146,7)",
        fontSize:14,
        position:'absolute',
        right:2
    }
    ,
    containerStyle: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height:150,
        borderBottomWidth:0.5,
        borderBottomColor:'gray'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});


