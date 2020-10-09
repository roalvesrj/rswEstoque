import React, { useState } from 'react';
import { View, Text, Input, TouchableHighlight } from 'react-native';
import getReaml from '../../services/realm;';
import style from './Style';

const Funcionario = () => {
    const [input, setInput] = useState('');

  async function saveFuncionario(FuncionarioSchema) {
    const data = {
      id: funcionario.id,
      name: funcionario.nome,
      cpf: funcionario.cpf,
      password: funcionario.senha,
    };

    const realm = await getReaml();

    realm.write(() => {
      realm.create('FuncionarioSchema', data);
    });
  }

    return (
        <>
            <Text>Cadastro de Funcionário</Text>
            <View style={style.inputOne}>
                <Input value={input} onChangeText={setInput} placeholder="Nome" />
            </View>
            <View style={style.inputTwo}>
                <Input value={input} onChangeText={setInput} placeholder="CPF" />
            </View>
            <View style={style.inputThree}>
                <Input value={input} onChangeText={setInput} placeholder="Senha" />
            </View>
            <TouchableHighlight
                style={Style.addButton}
                onPress={handleAddFuncionario}>
                <Text style={Style.addButtonText}>Cadastrar</Text>
            </TouchableHighlight>
        </>
    );
};

export default Funcionario;
