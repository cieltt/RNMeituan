/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import MoreCommonItem from "./MoreCommonItem";
import MoreMiddleCommonItem from "./MoreMiddleCommonItem";
import  MoreHeader from './MoreHeader'
export default class More extends Component<Props> {
    render() {
        return (
            <ScrollView
                contentContainerStyle={styles.scrollViewStyle}
            >
                <MoreHeader/>
                <View style={{marginTop:20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/collect.png')}
                        leftTitle='我的订单'
                        rightTitle='查看全部订单'
                    />
                    <MoreMiddleCommonItem/>
                </View>


                <View style={{marginTop:20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/draft.png')}
                        leftTitle='动脑学院钱包'
                        rightTitle='账户余额'
                    />
                    <MoreCommonItem
                        leftIconName={require('../../res/images/like.png')}
                        leftTitle='抵用券'
                        rightTitle='10张'
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/card.png')}
                        leftTitle='积分商城'
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/new_friend.png')}
                        leftTitle='今日推荐'
                        rightIconName={require('../../res/images/me_new.png')}
                    />
                </View>
                <View style={{marginTop:20}}>
                    <MoreCommonItem
                        leftIconName={require('../../res/images/card.png')}
                        leftTitle='我要合作'
                        rightTitle='轻松开店，招财进宝'
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor:'#e8e8e8',
    }
    ,
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
