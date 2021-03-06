import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            login: null,
            senha: null,
            senhaConfirm: null
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <View style={styles.containerWelcome}>
                    <Text style={styles.textRegisterWelcome}>Bem-Vindo,</Text>
                    <Text style={styles.textRegister}>Digite as informações abaixo para criar sua conta.</Text>
                </View>

                <TextInput
                    style={styles.input}
                    value={this.state.login}
                    placeholder='Endereço de email'
                    onChangeText={text => this.setState({login: text})}
                />
                
                <TextInput
                    style={styles.input}
                    value={this.state.senha}
                    placeholder='Digite sua senha...'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({senha: text})}
                />

                <TextInput
                    style={styles.input}
                    value={this.state.senha}
                    placeholder='Confirme sua senha...'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({senhaConfirm: text})}
                />

                <View style={styles.signUpContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    >
                        <Text style={styles.textSignUp}>Login</Text>
                    </TouchableOpacity>
                </View>
               
                <View style={styles.containerButtonLogin}>
                    <TouchableOpacity 
                        activeOpacity={0} 
                        style={styles.buttonLogin}
                        onPress={() => {}}
                    >
                        <Text style={styles.buttonLoginText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}