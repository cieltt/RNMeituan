/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */


import React, {Component} from 'react';
import {ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, View} from 'react-native';
import FindItem from './FindItem'
type Props = {};
import HttpUtils from '../util/HttpUtils'
import DataRepository  from './dao/DataRepository'
var dataRepository = new DataRepository();
export default class Find extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataList: [],
            content:"",
        }
    }
    _renderItem(data) {

        console.log("-------->")
        console.log(data)
        return <View style={styles.item}>
            <FindItem
                leftUrl={data.leftUrl}
                mainTitle={data.mainTitle}
                sencondTitle={data.sencondTitle}
                price={data.price}
                chuXiaoPrice={data.chuXiaoPrice}
                distance={data.distance}
                little={data.little}
                key={data.id}
            />
        </View>
    }

    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                color={'red'}
                animating={this.state.isLoading}
            />
            <Text>正在加载更多</Text>
        </View>
    }
    loadData(){
        debugger
        console.log("------->1  ")
        dataRepository.fetchRepository(`http://dn.dengpaoedu.com/weixinapp/studentinfo/reactlist`)
            .then(result=>{
                this.setState({
                    dataList:result,
                    content:result[0].mainTitle,
                    isLoading:false
                })
                // if (result && result.update_date && !dataRepository.checkDate(result.update_date))
                //     return dataRepository.fetchNetRepository(url);
            })
        // HttpUtils.get(`http://192.168.1.111:8090/weixinapp/studentinfo/reactlist`).then(result=>{
        //     console.log("------->")
        //     console.log(result);
        //     this.setState({
        //         dataList:result,
        //         content:result[0].mainTitle
        //     })
        // })
    }
    componentDidMount() {
        this.loadData();
    }

    render2() {
        return (
            <View style={styles.container}>
                <Text>{this.state.content}</Text>
            </View>
        )

    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    renderItem={(data) => this._renderItem(data.item)}
                    keyExtractor={item => item.key}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            colors={['red']}
                            tintColor={'orange'}
                            titleColor={'red'}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData(true);
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => {
                        this.loadData()
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    text: {
        color: 'white',
        fontSize: 20,
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});
