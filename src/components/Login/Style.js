import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
        paddingHorizontal: 35,
        backgroundColor: '#1c74d8'
    },
    image: {
        marginBottom: 60
    },
    destaque: {
        paddingBottom: 20,
        color: '#ffffff',
        fontSize: 24,
        fontFamily: 'Euclid Extra Bold',
        textAlign: 'center'
    },
    descricao: {
        paddingBottom: 140,
        color: '#fff',
        fontFamily: 'Euclid Extra Bold',
        textAlign: 'center'
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
    link: {
        paddingBottom: 30,
        color: '#fff',
        fontFamily: 'Euclid Extra Bold'
    },
    icon: {
        marginTop: 1,
        marginRight: 5,
        color: '#333',
        fontSize: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        padding: 35,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        borderRadius: 20,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default styles;