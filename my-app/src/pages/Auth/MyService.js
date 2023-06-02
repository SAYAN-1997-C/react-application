import axios from 'axios';
import React from 'react';

export default class MyService  {

    

    getUserData() {

        axios.get('http://localhost:3005/users').then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error)
        })

    }

    regUser(formdata) {

        console.log(formdata);
        
        axios.post( 'http://localhost:3005/users', formdata ,
        {
            header : { 'content-type' : 'application/json' }   
        } ).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })


    }

}