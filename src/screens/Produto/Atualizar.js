import React from 'react';
import { Text, ScrollView,TouchableHighlight, View } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Styles from './Style';

const Atualizar = ({ navigation }) => {
    return (
        <>
            <Header />
            <ScrollView>
                <Text>Tela atualizar produto (estoque)</Text>
                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => {
                        navigation.navigate('ProdDeletar')
                    }}>
                    <View>
                        <Text style={Styles.link}>Deletar</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default Atualizar;
