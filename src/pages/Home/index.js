import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
            <StatusBar style="auto" />
                <View style={styles.header}>
                    <View>
                        <Text style={{fontSize: 24}}>Bom Dia</Text>
                        <Text style={{fontSize: 28, fontWeight: 'bold'}}>Precisa de ajuda?</Text>
                    </View>
                    <View>
                        <Image source={require('../../assets/user.jpeg')} style={styles.avatar} />
                    </View>
                </View>
                <View style={styles.containerInput}>
                    <Ionicons name="search-outline" size={22} color='#999' style={styles.iconInput} />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => this.setState(text)}
                        value={this.state.text}
                        placeholder='Qual matéria deseja aprender?'
                    />
                </View>
                <View style={{height: 200}}> 
                    <Text style={styles.title}>Nossos serviços</Text>
                    <View style={{flex: 1, flexDirection: 'row', backgroundColor: 'blue'}}>
                        <View style={styles.private}>
                            <View>
                                <Ionicons name="home-outline" size={35} color='#fff' style={styles.iconCard} />
                            </View>
                            <View>
                                <Text style={[styles.whiteText, styles.titleCard]}>Privado</Text>
                                <Text style={[styles.whiteText, styles.descriptionCard]}>Resultado preciso</Text>
                            </View>
                        </View>

                        <View style={styles.videocall}>
                            <View>
                                <Ionicons name="home-outline" size={35} color='#fff' style={styles.iconCard} />
                            </View>
                            <View>
                                <Text style={[styles.whiteText, styles.titleCard]}>Privado</Text>
                                <Text style={[styles.whiteText, styles.descriptionCard]}>Resultado preciso</Text>
                            </View>
                        </View>

                        <View style={styles.chats}>
                            <View>
                                <Ionicons name="home-outline" size={35} color='#fff' style={styles.iconCard} />
                            </View>
                            <View>
                                <Text style={[styles.whiteText, styles.titleCard]}>Privado</Text>
                                <Text style={[styles.whiteText, styles.descriptionCard]}>Resultado preciso</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}