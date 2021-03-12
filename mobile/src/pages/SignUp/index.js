import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles'

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: null,
            password: null,
            passwordConfirm: null,
        }

        this.newAccount = this.newAccount.bind(this)
        this.verifyAccount = this.verifyAccount.bind(this)
    }

    async verifyAccount() {

        if (!this.state.email || !this.state.password || !this.state.passwordConfirm) {
            alert('Todos os campos devem ser preenchidos!')
            return
        }

        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert(
                "Erro",
                "As senhas são diferentes!",
                [
                  { text: "OK", onPress: () => {
                    this.passwordRef.clear();
                    this.passwordConfirmRef.clear();
                    this.passwordRef.focus()
                  }}
                ],
                { cancelable: false }
              );
        } else {
                // Alguma verificação
                this.newAccount()
        }
    }

    newAccount() {
        console.log("Cria login")
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                <View style={styles.containerWelcome}>
                    <Text style={styles.textRegisterWelcome}>Bem-Vindo</Text>
                    <Text style={styles.textRegister}>Digite as informações abaixo para criar sua conta.</Text>
                </View>

                <TextInput
                    style={styles.input}
                    value={this.state.email}
                    placeholder='Endereço de email'
                    onChangeText={text => this.setState({email: text})}
                />
                
                <TextInput
                    style={styles.input}
                    value={this.state.password}
                    ref={input => { this.passwordRef = input }}
                    placeholder='Digite sua senha...'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({password: text})}
                />

                <TextInput
                    style={styles.input}
                    value={this.state.passwordConfirm}
                    ref={input => { this.passwordConfirmRef = input }}
                    placeholder='Confirme sua senha...'
                    secureTextEntry={true}
                    onChangeText={text => this.setState({passwordConfirm: text})}
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
                        onPress={() => {this.verifyAccount()}}
                    >
                        <Text style={styles.buttonLoginText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}