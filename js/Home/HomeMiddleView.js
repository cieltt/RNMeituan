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
import  HomeMiddleCommonView from './HomeMiddleCommonView'
export default class HomeMiddleView extends Component<Props> {

    constructor(Props) {
        super(Props);
        this.state={
            rightData:[{"title":"天天特价","subTitle":"特惠不打烊",
                img1:require('../../res/images/tttj.png'),
                rightImage:require('../../res/images/tttj.png'),
                "titleColor":"orange"},
                {"title":"一元吃","subTitle":"一元吃美食",
                    img1:require('../../res/images/tttj.png')
                    ,rightImage:require('../../res/images/yyms.png'),
                    "titleColor":"red"}]

        }
    }
    render() {
        return (
            <View style={styles.containerSty}>
                {/*左边*/}
                {this.renderLeftView()}
                {/*右边*/}
                <View>

                {this.renderRightView()}
                </View>
            </View>
        );
    }

    renderRightView() {
        var itemArr=[]
        for (var i = 0; i <this.state.rightData.length; i++) {
            var data =this.state.rightData[i];
            itemArr.push(<HomeMiddleCommonView
                title={data.title}
                subTitle={data.subTitle}
                rightIcon={data.rightImage}
                titleColor={data.titleColor}
                key={i}
            />)
        }
        return itemArr;
    }

    renderLeftView() {

        var data ={img1:require('../../res/images/mdqg.png'),img2:require('../../res/images/yyms.png')}
        return (<View style={styles.leftViewStyle}>
            <Image source={data.img1} style={styles.leftImageStyle} />
            <Image source={data.img2}  style={{ width: 44,
                height: 30,}}/>
            <Text style={{color:'gray'}}>探路者烤鱼</Text>
            <Text style={{color:'blue',fontSize:10}}>9.5</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    leftImageStyle:{
        width: 129,
        height: 42,
        marginTop: 10
    },
    leftViewStyle:{
        width:width*0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
    },
    containerSty:{
        marginTop:10,
        flexDirection: "row",

    }
});
