import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 30,
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },
    containerDestaque: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 50
    },
    icon: {
        marginTop: 5,
        marginRight: 10,
        color: '#333',
        fontSize: 26,
    },
    destaque: {
        paddingBottom: 20,
        color: '#333',
        fontSize: 26,
        fontFamily: 'Euclid Extra Bold'
    },
    button: {
        flexDirection: 'row',
        marginBottom: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 3,
        backgroundColor: '#fdd922'
    },
    buttonTexto: {
        color: '#333',
        fontSize: 20,
        fontFamily: 'Euclid Extra'
    },
});

export default styles;
