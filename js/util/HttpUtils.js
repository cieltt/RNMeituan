/**
 * Created by penn on 2016/12/19.
 */

export default class HttpUtils{
    static get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }

    static upload(url, file) {
        let filedata = new FormData();
        filedata.append('file', file.file, file.file.name);
        filedata.append('path', file.data.path);
        let request = new Request(url, {
            method: 'POST',
            credentials: 'include',
            body: filedata,
        });
        return new Promise((resolve,reject)=> {
            fetch(request,{
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data;charset=utf-8',
                    "x-access-token": token,
                },
            })
                .then(response => response.json())
                .then(responseData => {
                        resolve(result);
                        reject(error);
                    console.error(result);
                }).catch((err)=> {
                console.log('err', err);
                reject(err);
            });
        });
    }
    static post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'POST',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
                .then(response=>response.json())
                .then(result=>{
                    resolve(result);
                })
                .catch(error=>{
                    reject(error);
                })
        })
    }
}