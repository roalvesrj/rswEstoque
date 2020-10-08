import React from 'react';
import { View, Image, Text } from 'react-native';

import Styles from './Style';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconII from 'react-native-vector-icons/Ionicons';

const Footer = () => {
    return (
        <>
            <View style={Styles.container}>
                <Image
                    source={require('./../../../assets/images/deal-logo.png')}
                />
                <View style={Styles.subcontainer}>
                    <IconII name="notifications" style={Styles.icon} />
                    <IconFA name="user-circle" style={Styles.icon} />
                </View>
            </View>
        </>
    )
}

export default Footer;
