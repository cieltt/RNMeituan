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
var Demensions = require('Dimensions');

//初始化宽高
var {width, height} = Demensions.get('window');
export default class MoreHeader extends Component<Props> {

    static defaultProps = {
    }

    constructor(Props) {
        super(Props);
        this.state={
            name:"David"
        }
    }

    render() {

        return (
            <View style={styles.containStyle}>
                {/*上半部分*/}
                {this.renderTopView()}
                {/*下半部分*/}
                {this.renderBottomView()}
            </View>
        );
    }


    renderTopView() {
        return (<View style={styles.topViewStyleView}>
            <Image source={require('../../res/images/see.png')} style={styles.leftIconStyle}/>
            <View style={styles.centerViewStyle}>
                <Text style={{fontSize:18,color:'white',fontWeight: 'bold'}}>
                    {this.state.name}
                </Text>
                <Image source={require('../../res/images/avatar_vip.png')} style={{width:17, marginLeft:5,height: 17}}/>

            </View>
            <Image source={require('../../res/images/icon_cell_rightarrow.png')}
                   style={{width:8,height:13,
                marginRight: 8}}/>
        </View>);

    }

    renderBottomItem() {
        var itemArr = [];
        var data = [{'number': '100', 'title': 'David券'},
            {'number': '12', 'title': '评价'},
            {
            'number': '收藏',
            'title': '50'
        }]
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            itemArr.push(<View  key={i} style={styles.bottomInnerStyle}>
                <Text style={{color:'white'}}>{item.number}</Text>
                <Text  style={{color:'white'}}>{item.title}</Text>
            </View>)
        }
        return itemArr;

    }
    renderBottomView() {
        return(<View style={styles.bottomViewStyle}>
            {this.renderBottomItem()}
        </View>)
    }
}

const styles = StyleSheet.create({
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0
    }
    ,
    bottomInnerStyle:{
        width:(width/3),
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        justifyContent: 'center',
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'white'
    },
    centerViewStyle:{
        flexDirection: 'row',
        width: width*0.75,
        alignItems: 'center',
        marginLeft:15
    }
    ,
    leftIconStyle:{
        width:70,
        height: 70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(255,255,255,1)'
    },
    topViewStyleView:{
      flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-around",
        marginTop: 20,
        marginLeft:15
    },
    containStyle:{
        height:150,
        backgroundColor:'rgba(255,96,0,1)',

    }

});
