import React, { Component } from 'react';
import api from './api';

export default class LoginAPI extends Component {
    static getAPI(dados) {
        return new Promise((resolve, reject) => {
            api.post('/login', {login: dados.login, password: dados.password})
                .then(dados => {
                    resolve(dados.data)
                }).catch(e => {
                    reject(e)
                })
        })
    }
}