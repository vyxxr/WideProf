import React, { Component } from 'react';
import api from './api';

export default class HomeAPI extends Component {
    static getAPI() {
        return new Promise((resolve, reject) => {
            api.get('/')
                .then(dados => {
                    resolve(dados.data)
                }).catch(e => {
                    reject(e)
                })
        })
    }
}