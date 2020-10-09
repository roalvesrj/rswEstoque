import React from 'react';
import { Text, View, ScrollView } from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';



import Styles from './Style';

const Home = ({ navigation }) => {
    return (
        <>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
                <View>
                    <Text style={Styles.destaque}>Bem vindo, Fulano de Tal ;)</Text>
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default Home;
