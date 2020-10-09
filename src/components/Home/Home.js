import React, { useState } from 'react';
import { Text, Image, ScrollView } from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import ListarProdutoPorCategoria from '../ScrollViewCategorias/ScrollViewCategorias';

import Styles from './Style';

const Home = ({ navigation }) => {
    const [url, setUrl] = useState('');

    return (
        <>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <ListarProdutoPorCategoria navigation={navigation} />
            </ScrollView>
            <Text>{url}</Text>
            <Footer navigation={navigation} />
        </>
    );
};

export default Home;
