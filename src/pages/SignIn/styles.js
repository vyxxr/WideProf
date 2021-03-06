import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerWelcome: {
        paddingBottom: 50
    },

    textWelcome: {
        fontSize: 30, 
    },

    secondTextWelcome: {
        fontWeight: 'bold', 
        fontSize: 30
    },

    input: {
        height: 50,
        width: 300,
        paddingLeft: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderRadius: 10,
        borderColor: '#c1c1c1',
        backgroundColor: '#f5f6f8',
    },

    signUpContainer: {
        width: 290,
        alignItems: 'flex-start',
    },

    textSignUp: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#c1c1c1'
    },

    containerButtonLogin: {
        width: 290,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLogin: {
        height: 50,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#eead2d',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLoginText: { 
        fontSize: 20,
        color: '#fff'
    },
})