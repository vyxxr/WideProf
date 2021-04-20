import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, FlatList, ScrollView, LogBox, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import InputSearch from '../../components/InputSearch';
import HomeAPI from '../../services/homeAPI';

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
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
        this.goToTeachersPage = this.goToTeachersPage.bind(this);
    }

    componentDidMount() {
        this.loadTeachers()
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }

    async loadTeachers() {
        var subjects = []

        HomeAPI.getAPI().then(dados => {
            dados.professores.map(item => {
                if (!subjects.includes(item.materia)) {
                    subjects.push(item.materia)
                }
            })

            this.setState({ teachers: dados.professores, subjects, loading: false })
        })
    }

    goToTeachersPage(data) {
        // const teachers = this.state.teachers.filter((obj) => obj.materia === data)
        this.props.navigation.navigate('Teachers', {data: data, subjects: this.state.subjects, teachers: this.state.teachers})
    }

    renderServices(data) {
        switch (data.id) {
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
                    <Text style={{...styles.titleCard, color: '#fff'}}>{data.title}</Text>
                    <Text style={{...styles.descriptionCard, color: '#fff'}}>{data.description}</Text>
                </View>
            </View>
        )
    }

    renderSubjects(data) {
        const count = this.state.teachers.filter((obj) => obj.materia === data).length;

        return (
            <TouchableOpacity style={{ ...styles.cards, backgroundColor: '#f5f6f8' }} onPress={() => this.goToTeachersPage(data)}>
                <View style={{ ...styles.iconCard, backgroundColor: '#94C752' }}>
                    <Ionicons name={'book-outline'} size={35} color='#fff' />
                </View>
                <View>
                    <Text style={{ ...styles.titleCard, color: '#474747' }}>{data}</Text>
                    <Text style={{ ...styles.descriptionCard, color: '#aaafb7' }}>{count} Professor{count > 1 ? 'es' : ''}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />

                {this.state.loading ?
                <View style={styles.containerLoading}>
                    <ActivityIndicator size="large" color="#999999" />
                </View>
                :
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingBottom: 40}}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <View>
                            <Text style={{ fontSize: 24 }}>Bom Dia</Text>
                            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Precisa de ajuda?</Text>
                        </View>
                        <View>
                            <Image source={require('../../assets/user.jpeg')} style={styles.avatar} />
                        </View>
                    </View>

                    <InputSearch
                        subjects={this.state.subjects}
                        teachers={this.state.teachers}
                        exec={this.goToTeachersPage}
                    />

                    <View style={{ height: 200, marginBottom: 40 }}>
                        <Text style={styles.title}>Nossos serviços</Text>

                        <FlatList
                            style={{ flex: 1, flexDirection: 'row' }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={this.state.services}
                            renderItem={({item}) => this.renderServices(item)}
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
                            renderItem={({item}) => this.renderSubjects(item)}
                            keyExtractor={item => item}
                            ItemSeparatorComponent={() => <View style={{ width: 20 }}></View>}
                        />
                    </View>
                </ScrollView>
                }
            </View>
        );
    }
}