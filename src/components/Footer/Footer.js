import React from 'react';
import { View, Text } from 'react-native';

import Styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = () => {
    return (
        <>
            <View style={Styles.container}>
                <View style={Styles.subcontainer}>
                    <Icon name="home" style={Styles.icon} />
                    <Text style={Styles.texto}>Início</Text>
                </View>
                <View style={Styles.subcontainer}>
                    <Icon name="list-ul" style={Styles.icon} />
                    <Text style={Styles.texto}>Categorias</Text>
                </View>
                <View style={Styles.subcontainer}>
                    <Icon name="boxes" style={Styles.icon} />
                    <Text style={Styles.texto}>Produtos</Text>
                </View>
            </View>
        </>
    )
}

export default Footer;
