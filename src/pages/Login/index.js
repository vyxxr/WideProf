import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput } from 'react-native';
import styles from './styles'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: null,
            senha: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <TextInput
                    style={styles.input}
                    onChangeText={() => {}}
                    value={this.state.login}
                    placeholder='Endereço de email'
                />
                
                <TextInput
                    style={styles.input}
                    onChangeText={() => {}}
                    value={this.state.senha}
                    placeholder='Digite sua senha...'
                />
            </View>
        )
    }
}