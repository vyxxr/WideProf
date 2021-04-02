import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 20,
    },

    header: {
        height: 150,
        justifyContent: 'space-between',
    },

    topBar: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },

    title: {
        flex: 1,
    },

    card: {
        backgroundColor: '#f5f6f8',
        borderRadius: 10,
        padding: 20,
        flexDirection: 'row',
        height: 115
    },

    cardText: {
        marginLeft: 30,
        justifyContent: 'space-between',
        flex: 1
    },

    cardBottom: {
        flexDirection: 'row',
    },

    teacherPhoto: {
        width: 75,
        height: 75,
        borderRadius: 15
    },

    teacherName: {
        fontSize: 17.5,
        fontWeight: 'bold',
    },
    
    teacherSubject: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8E939F'
    },

    teacherTextBottom: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#8E939F'
    },

    cardBottomItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    }
})