import React from 'react';
import { View, Text } from 'react-native';

import Styles from './Style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Footer = () => {
    return (
        <>
            <View style={Styles.container}>
                <View style={Styles.subcontainer}>
                    <Icon name="home" style={Styles.icon} />
                    <Text style={Styles.texto}>Início</Text>
                </View>
                <View style={Styles.subcontainer}>
                    <Icon name="compass" style={Styles.icon} />
                    <Text style={Styles.texto}>Explorar</Text>
                </View>
                <View style={Styles.subcontainer}>
                    <Icon name="music-box-multiple" style={Styles.icon} />
                    <Text style={Styles.texto}>Biblioteca</Text>
                </View>
            </View>
        </>
    )
}

export default Footer;
