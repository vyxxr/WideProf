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
        marginVertical: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },

    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40
    },

    input: {
        flex: 1,
        backgroundColor: '#f5f6f8',
        height: 50,
        paddingRight: 15,
        paddingLeft: 52,
        borderRadius: 10
    },

    iconInput: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: 15
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },

    titleCard: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    descriptionCard: {
        fontSize: 13,
        fontWeight: 'bold',
        opacity: 0.8
    },

    cards: {
        width: 130,
        padding: 15,
        justifyContent: 'space-between',
        borderRadius: 15
    },

    iconCard: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
});
