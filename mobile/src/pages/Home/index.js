import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Text, View, Image, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import api from '../../services/api';
import styles from './styles';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            teachers: [],
            services: [
                {
                    id: 'private',
                    title: 'Privado',
                    description: 'Resultado preciso',
                },
                {
                    id: 'video',
                    title: 'Vídeo',
                    description: 'Cara a cara',
                },
                {
                    id: 'chat',
                    title: 'Chats',
                    description: 'Fácil e eficiente'
                }
            ]
        }

        this.renderItem = this.renderItem.bind(this);
        this.loadTeachers = this.loadTeachers.bind(this);
    }

    componentDidMount() {
        this.loadTeachers()
    }

    async loadTeachers() {
        const response = await api.get()
        this.setState({teachers: response.data})
    }

    renderItem(data) {
        switch (data.item.id) {
            case 'private':
                var icon = 'home-outline'
                var colors = ['#FD7373', '#FC4444']
                break;
            case 'video':
                var icon = 'videocam-outline'
                var colors = ['#40C1FF', '#00ADFF']
                break;
            default:
                var icon = 'chatbubble-outline'
                var colors = ['#F386DF', '#EF5ED4']
                break;
        }

        return (
            <View style={{...styles.cards, backgroundColor: colors[0]}}>
                <View style={{...styles.iconCard, backgroundColor: colors[1]}}>
                    <Ionicons name={icon} size={35} color='#fff'/>
                </View>
                <View>
                    <Text style={[styles.whiteText, styles.titleCard]}>{data.item.title}</Text>
                    <Text style={[styles.whiteText, styles.descriptionCard]}>{data.item.description}</Text>
                </View>
            </View>
        )
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

                    <FlatList
                        style={{flex: 1, flexDirection: 'row'}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={this.state.services}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent = {() => <View style={{width: 20}}></View>}
                    />
                </View>
            </View>
        );
    }
}