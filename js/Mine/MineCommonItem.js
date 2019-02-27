/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,Switch} from 'react-native';


export default class MineCommonItem extends Component<Props> {
    static defaultProps={
        title:"",//标题
        isSwitch:false,
        rightTitle:undefined,
    }

    constructor(props) {
        super(props);
        this.state={
            isOn:false
        }

    }
    rightTitle(){
        if (this.props.rightTitle == undefined) {
            return;
        }
        if (this.props.rightTitle.length > 0) {
            return (<Text style={{color:'gray',marginRight:5}}>
                {this.props.rightTitle}
            </Text>);
        }
    }
    //右边
    rightSubView(){
        if(this.props.isSwitch){
            return <Switch value={this.state.isOn} onValueChange={(isOn)=>{this.setState({isOn:isOn})}}/>
        }
        return (
            <View style={{flexDirection: "row",alignItems: 'center'}}>
                {this.rightTitle()}
                <Image source={require('../../res/images/icon_cell_rightarrow.png')} style={{width:8, height: 13,marginRight:8}}/>
            </View>);
    }
    render() {
        return (
            <View style={styles.navContail}>
                {/*左边*/}
                    <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {this.rightSubView()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navContail:{

        flexDirection:'row',
        alignItems:'center',
        height:40,
        backgroundColor:'white',
        justifyContent:'space-between',
        borderBottomWidth:0.5,
        borderBottomColor:'#dddddd'
    },
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
