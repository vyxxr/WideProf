import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
        // paddingHorizontal: 20,
    },

    containerLoading: {
        flex: 1,
        justifyContent: 'center'
    },

    header: {
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },

    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        paddingHorizontal: 20
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
