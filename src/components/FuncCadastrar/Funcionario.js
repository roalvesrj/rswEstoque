import React, { useState } from 'react';
import { View, Text, Input, TouchableHighlight } from 'react-native';
import getReaml from '../../services/realm;';
import style from './Style';

const Funcionario = () => {
    const [input, setInput] = useState('');

    async function saveFuncionario(funcionario) {
        const data = {};

        const realm = await getReaml();
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

realm.write(() => {
    const produto = realm.create('Repository');
});
