import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import api from '../../services/api';
import styles from './styles';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            teachers: [],
            subjects: [],
            services: [
                {
                    id: 'screencast',
                    title: 'Screencast',
                    description: 'Prático',
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

        this.renderServices = this.renderServices.bind(this);
        this.renderSubjects = this.renderSubjects.bind(this);
        this.loadTeachers = this.loadTeachers.bind(this);
    }

    componentDidMount() {
        this.loadTeachers()
    }

    async loadTeachers() {
        var subjects = []
        const response = await api.get()

        response.data.professores.map(item => {
            if (!subjects.includes(item.materia)) {
                subjects.push(item.materia)
            }
        })

        this.setState({ teachers: response.data.professores, subjects })
    }

    renderServices(data) {
        switch (data.item.id) {
            case 'screencast':
                var icon = 'laptop-outline'
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
            <View style={{ ...styles.cards, backgroundColor: colors[0] }}>
                <View style={{ ...styles.iconCard, backgroundColor: colors[1] }}>
                    <Ionicons name={icon} size={35} color='#fff' />
                </View>
                <View>
                    <Text style={{...styles.titleCard, color: '#fff'}}>{data.item.title}</Text>
                    <Text style={{...styles.descriptionCard, color: '#fff'}}>{data.item.description}</Text>
                </View>
            </View>
        )
    }

    renderSubjects(data) {
        const count = this.state.teachers.filter((obj) => obj.materia === data.item).length;

        return (
            <View style={{ ...styles.cards, backgroundColor: '#f5f6f8' }}>
                <View style={{ ...styles.iconCard, backgroundColor: '#94C752' }}>
                    <Ionicons name={'book-outline'} size={35} color='#fff' />
                </View>
                <View>
                    <Text style={{ ...styles.titleCard, color: '#474747' }}>{data.item}</Text>
                    <Text style={{ ...styles.descriptionCard, color: '#aaafb7' }}>{count} Professor{count > 1 ? 'es' : ''}</Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 40}}
                >
                    <StatusBar style="auto" />
                    <View style={styles.header}>
                        <View>
                            <Text style={{ fontSize: 24 }}>Bom Dia</Text>
                            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Precisa de ajuda?</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/user.jpeg')} style={styles.avatar} />
                        </View>
                    </View>
                    <View style={styles.containerInput}>
                        <Ionicons name="search-outline" size={22} color='#999' style={styles.iconInput} />
                        <TextInput
                            style={styles.input}
                            value={this.state.text}
                            onChangeText={text => this.setState({text})}
                            placeholder='Qual matéria deseja aprender?'
                        />
                    </View>
                    <View style={{ height: 200, marginBottom: 40 }}>
                        <Text style={styles.title}>Nossos serviços</Text>

                        <FlatList
                            style={{ flex: 1, flexDirection: 'row' }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.services}
                            renderItem={this.renderServices}
                            keyExtractor={item => item.id}
                            extraData={this.state.subjects}
                            ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
                        />
                    </View>
                    <View style={{ height: 200 }}>
                        <Text style={styles.title}>Matérias</Text>

                        <FlatList
                            style={{ flex: 1, flexDirection: 'row' }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.subjects}
                            renderItem={this.renderSubjects}
                            keyExtractor={item => item}
                            ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}