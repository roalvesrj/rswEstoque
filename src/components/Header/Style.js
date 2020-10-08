import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#1c74d8'
    },
    subcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    texto: {
        color: '#999',
        fontSize: 12
    },
    icon: {
        paddingLeft: 30,
        color: '#fff',
        fontSize: 28
    }
});

export default styles;