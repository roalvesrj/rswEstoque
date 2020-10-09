import React from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import Style from './Style';
import getReaml from '../../services/realm;';
import style from './Style';

const Funcionario = () => {
  return (
    <>
      <Text>Cadastro de Funcionário</Text>
      <View style={style.txtInputOne}>
        <TextInput placeholder="Nome" />
      </View>
      <View style={style.txtInputTwo}>
        <TextInput placeholder="CPF" />
      </View>
      <View style={style.txtInputThree}>
        <TextInput placeholder="Senha" />
      </View>
      <TouchableHighlight
        style={Style.addButton}
        onPress={() => login(homePage)}>
        <Text style={Style.addButtonText}>Log in</Text>
      </TouchableHighlight>
    </>
  );
};

const realm = await getReaml();

realm.write(() => {
  const produto = realm.create('Repository');
});
