/**
 * Created by penn on 2016/12/21.
 */

import {
    AsyncStorage,
} from 'react-native';

export default class DataRepository {
    constructor() {
    }
    saveRepository(url, data, callback) {
        if (!data || !url)return;
        let wrapData = {data: data, update_date: new Date().getTime()};
        AsyncStorage.setItem(url, JSON.stringify(wrapData), callback);
    }

    fetchRepository(url) {
        return new Promise((resolve, reject)=> {
            this.fetchLocalRepository(url).then((wrapData)=> {
                if (wrapData) {
                    resolve(wrapData.data, true);
                } else {
                    this.fetchNetRepository(url).then((data)=> {
                        resolve(data);
                    }).catch((error)=> {
                        reject(error);
                    })
                }

            }).catch((error)=> {
                this.fetchNetRepository(url).then((data)=> {
                    resolve(data);
                }).catch((error=> {
                    reject(error);
                }))
            })
        })
    }
    fetchLocalRepository(url) {
        return new Promise((resolve, reject)=> {
            AsyncStorage.getItem(url, (error, result)=> {
                if (!error) {
                    try {
                        resolve(JSON.parse(result));
                    } catch (e) {
                        reject(e);
                        console.error(e);
                    }
                } else {
                    reject(error);
                    console.error(error);
                }
            })
        })
    }
    fetchNetRepository(url) {
        return new Promise((resolve, reject)=> {
                fetch(url)
                    .then((response)=>response.json())
                    .catch((error)=> {
                        reject(error);
                    }).then((responseData)=> {
                    if (!responseData) {
                        reject(new Error('responseData is null'));
                        return;
                    }
                    resolve(responseData);
                    this.saveRepository(url,responseData)
                }).done();
        })
    }
    checkDate(longTime) {
        let currentDate = new Date();
        let targetDate = new Date();
        targetDate.setTime(longTime);
        if (currentDate.getMonth() !== targetDate.getMonth())return false;
        if (currentDate.getDate() !== targetDate.getDate())return false;
        if (currentDate.getHours() - targetDate.getHours() > 4)return false;
        if (currentDate.getMinutes() - targetDate.getMinutes() > 1)return false;
        return true;
    }
}