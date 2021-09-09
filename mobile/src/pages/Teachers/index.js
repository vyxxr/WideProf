import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import InputSearch from '../../components/InputSearch'

export default class Teachers extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: this.props.route.params.data,
            subjects: this.props.route.params.subjects,
            teachers: this.props.route.params.teachers,
        }

        this.renderItem = this.renderItem.bind(this);
        this.refreshSearch = this.refreshSearch.bind(this);

    }

    refreshSearch(data) {
        this.setState({data})
    }

    renderItem(data) {
        return (
            <View style={styles.card}>
                <View>
                    <Image source={{uri: `http://192.168.1.8:3000${data.foto}`}} style={styles.teacherPhoto} />
                </View>
                <View style={styles.cardText}>
                    <View>
                        <Text style={styles.teacherName}>{data.nome}</Text>
                        <Text style={styles.teacherSubject}>{data.materia}</Text>
                    </View>

                    <View style={styles.cardBottom}>
                        <View style={styles.cardBottomItem}>
                            <MaterialIcons name='grade' size={18} color='#FFC300' style={{marginRight: 3}} />
                            <Text style={styles.teacherTextBottom}>{data.nota}</Text>
                        </View>
                        <View style={styles.cardBottomItem}>
                            <Ionicons name='location-outline' size={15} color='#8E939F' style={{marginRight: 3}} />
                            <Text style={styles.teacherTextBottom}>{data.pais}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={styles.header}>
                        <View style={styles.topBar}>
                            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                <Ionicons name='arrow-back-outline' size={40} color='#828282' style={{marginLeft: -5}} />
                            </TouchableOpacity>
                            <Image source={require('../../assets/user.jpeg')} style={styles.avatar} />
                        </View>
                        <View style={styles.title}>
                            <Text style={{ fontSize: 28, fontWeight: 'bold' }}>Prof. de {this.state.data}</Text>
                        </View>
                    </View>

                    <InputSearch
                        subjects={this.state.subjects}
                        teachers={this.state.teachers}
                        exec={this.refreshSearch}
                    />

                    <FlatList
                        style={{backgroundColor: '#fff'}}
                        data={this.state.teachers.filter((obj) => obj.materia === this.state.data)}
                        renderItem={({item}) => this.renderItem(item)}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={() => <View style={{ height: 20 }}></View>}
                    />
                </ScrollView>
            </View>
        );
    }
}