import React from 'react';
import { ScrollView, Text, View, TouchableHighlight } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Styles from './Style';

const Listar = ({ navigation }) => {
    return (
        <>
            <Header />
            <ScrollView>
                <Text>Lista de Produtos</Text>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => {
                        navigation.navigate('ProdCadastrar')
                    }}>
                    <View>
                        <Text style={Styles.link}>Cadastrar</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default Listar;
