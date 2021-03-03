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

    servicos: {
        height: 200,
        backgroundColor: 'red'
    },

    whiteText: {
        color: '#fff'
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

    private: {
        flex: 1, 
        backgroundColor: '#FD7373',
        padding: 10
    },

    videocall: {
        flex: 1, 
        backgroundColor: '#40C1FF',
        padding: 10
    },

    chats: {
        flex: 1, 
        backgroundColor: '#F386DF',
        padding: 10
    },

});
