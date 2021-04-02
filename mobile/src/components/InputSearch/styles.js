import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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

    containerSearch: {
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        alignSelf: 'flex-start',
        top: 40,
        backgroundColor: '#f5f6f8',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        overflow: 'hidden',
    },

    cardSearch: {
        width: '100%',
        backgroundColor: '#f5f6f8',
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    iconInput: {
        position: 'absolute',
        zIndex: 1,
        marginLeft: 15
    },
})