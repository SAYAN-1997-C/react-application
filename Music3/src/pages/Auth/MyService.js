import axios from 'axios';

export default class MyService {

    getUserData() {
        axios.get('http://localhost:3005/users').then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        })
    }

    regUser(formdata) {
        return new Promise((resolve, reject) => {
            axios.post('http://localhost:9096/user/register', formdata,
                {
                    header: { 'content-type': 'application/json' }
                }).then((res) => {
                    console.log(res);
                    resolve(res)
                }).catch((error) => {
                    console.log(error);
                    reject(error)
                })
        })
    }
    checkCredentials(userCred) {

        return new Promise( ( resolve , reject ) => {

            axios.post('http://localhost:9096/user/login' , userCred , 
            {
                headers: {
                    'Accept': 'application/json',
                 'Content-Type': 'application/json' 
                 }
            } ).then( (res) => {
                console.log(res);
                resolve(res);
            } ).catch( (error) => {
                console.log(error);
                reject(error);
            })

        })

    }
}