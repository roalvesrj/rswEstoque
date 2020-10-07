import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#1c74d8'
    },
    container: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
        paddingHorizontal: 35
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
        paddingBottom: 60,
        color: '#fff',
        fontFamily: 'Euclid Extra Bold'
    },
    icon: {
        marginTop: 4,
        marginRight: 5,
        color: '#333',
        fontSize: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalCenter: {
        alignItems: 'center',
        alignContent: 'center'
    },
    modalView: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '90%',
        padding: 30,
        paddingBottom: 0,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    modalSub: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    closeButton: {
        position: 'absolute',
        top: 0,
        right: 0
    },
    iconButton: {
        marginTop: 1,
        marginRight: 5,
        color: '#333',
        fontSize: 26
    },
    destaqueStyle: {
        marginBottom: 30,
        fontSize: 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalInput: {
        height: 50,
        marginBottom: 15,
        padding: 5,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5
    }
});

export default styles;