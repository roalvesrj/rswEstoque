import React from 'react';
import { ScrollView, Text, View, TouchableHighlight } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ListarProdutoPorCategoria from '../../components/ScrollViewCategorias/ScrollViewCategorias';
import Styles from './Style';

const Listar = ({ navigation }) => {
    return (
        <>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
                <View style={Styles.containerDestaque}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="boxes" style={Styles.icon} />
                        <Text style={Styles.destaque}>Estoque</Text>
                    </View>
                    <TouchableHighlight
                        style={Styles.button}
                        underlayColor="transparent"
                        onPress={() => {
                            navigation.navigate('ProdCadastrar')
                        }}>
                        <View>
                            <Text style={Styles.link}>Cadastrar</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <ListarProdutoPorCategoria navigation={navigation} />
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default Listar;
