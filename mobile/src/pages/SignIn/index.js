import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

export default class SignIn extends Component {
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

                <View style={styles.containerWelcome}>
                    <Text style={styles.textWelcome}>Bem-Vindo ao <Text style={styles.secondTextWelcome}>WideProf</Text></Text>
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

                <View style={styles.signUpContainer}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SignUp')}
                    >
                        <Text style={styles.textSignUp}>Registre-se</Text>
                    </TouchableOpacity>
                </View>
               
                <View style={styles.containerButtonLogin}>
                    <TouchableOpacity 
                        activeOpacity={0} 
                        style={styles.buttonLogin}
                        onPress={() => {}}
                    >
                        <Text style={styles.buttonLoginText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}