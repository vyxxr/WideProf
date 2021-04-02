import React, { Component } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class InputSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: '',
            subjects: this.props.subjects,
            teachers: this.props.teachers
        }

        this.onChangeText = this.onChangeText.bind(this);
        this.renderSearch = this.renderSearch.bind(this);

        this.inputRef = React.createRef()
    }

    onChangeText(text) {
        var result = this.state.subjects.filter(item => item.toLowerCase().includes(text.toLowerCase()))

        this.setState({text: text ? result : ''})
    }

    renderSearch(data) {
        const count = this.state.teachers.filter((obj) => obj.materia === data).length;

        return (
            <TouchableOpacity onPress={() => {
                this.setState({text: ''})
                this.inputRef.current.clear()
                this.inputRef.current.blur()
                this.props.exec(data)
            }}>
                <View style={styles.cardSearch}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: '#808080'}}>{data}</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#808080', marginRight: 10}}>{count}</Text>
                        <Ionicons name={'school-outline'} size={20} color='#808080' />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        console.log(this.state.text)
        return (
        <View style={styles.containerInput}>
            <Ionicons name="search-outline" size={22} color='#999' style={styles.iconInput} />
            <TextInput
                ref={this.inputRef}
                style={styles.input}
                onChangeText={text => this.onChangeText(text)}
                placeholder='Qual matéria deseja aprender?'
            />
            {this.state.text.length !== 0 ?
                <View style={styles.containerSearch}>
                    <FlatList
                        style={{ flex: 1 }}
                        data={this.state.text.slice(0, 3)}
                        renderItem={({item}) => this.renderSearch(item)}
                        keyExtractor={item => item}
                        extraData={this.state}
                        keyboardShouldPersistTaps="handled"
                        ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 0.5, borderBottomColor: '#bfbfbf' }}></View>}
                    />
                </View>
            :
                null
            }
        </View>
        )
    }
}