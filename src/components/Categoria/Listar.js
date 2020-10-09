import React, { useState, useEffect } from 'react';
import { Text, ScrollView } from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import serviceCategoria from '../../api/categoria';

import Styles from './Style';

const Listar = ({ navigation }) => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        serviceCategoria
            .listarTodos()
            .then((response) => {
                setCategorias(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

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
