import React from "react";
import { View, Text, TouchableHighlight } from 'react-native';
import Styles from './Style';

const ButtonCadastrar = () => {
  return (
    <>
      <View style={Styles.Container}>
        <TouchableHighlight style={Styles.Button}>
          <Text style={{fontSize: 20, color: 'white'}}>Cadastrar</Text>
        </TouchableHighlight>
      </View>
    </>
  );
};

export default ButtonCadastrar;
