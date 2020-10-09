import React from 'react';
import {View, Text} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

import Styles from './Style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Footer = ({navigation}) => {
  return (
    <>
      <View style={Styles.container}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate('Home')}>
          <View style={Styles.subcontainer}>
            <Icon name="home" style={Styles.icon} />
            <Text style={Styles.texto}>Início</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => navigation.navigate('EstoqueListar')}>
          <View style={Styles.subcontainer}>
            <Icon name="boxes" style={Styles.icon} />
            <Text style={Styles.texto}>Estoque</Text>
          </View>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default Footer;
