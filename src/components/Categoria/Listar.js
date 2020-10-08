import React from 'react';
import { Text, ScrollView } from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import Styles from './Style';

const Listar = ({ navigation }) => {
    return (
        <>
            <Header />
            <ScrollView>
                <Text>Lista de Categorias</Text>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default Listar;
