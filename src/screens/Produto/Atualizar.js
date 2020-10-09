import React, { useState, useEffect } from 'react';
import { Text, ScrollView, TextInput, View } from 'react-native';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import serviceProduto from '../../api/produto';
import serviceCategoria from '../../api/categoria';
import ImagePick from '../../components/ImagePick/ImagePick';
import Styles from './Style';

import { Picker } from '@react-native-community/picker';

const Atualizar = ({ route, navigation }) => {
    const { produtoID } = route.params;

    const [url, setUrl] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [produto, setProduto] = useState({});

    useEffect(() => {
        serviceCategoria
            .listarTodos()
            .then((response) => {
                setCategorias(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        serviceProduto
            .listarID(produtoID)
            .then((response) => {
                setProduto(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Header />
            <ScrollView>
                <Text>Tela atualizar produto (estoque)</Text>

                <View style={Styles.Container}>
                    <View style={Styles.ContainerImage}>
                        <ImagePick navigation={navigation} url={setUrl} />
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TextInput style={Styles.Input} value={produto.nome} />
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TextInput style={Styles.Input} value={produto.descricao} />
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TextInput style={Styles.Input} value={produto.dataFabricacao} />
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TextInput style={Styles.Input} value={produto.nomeFuncionario} />
                    </View>
                    <View>
                        <TextInput style={Styles.Input} value={produto.valor} />
                    </View>
                    <View>
                        <TextInput style={Styles.Input} value={produto.qtdEstoque} />
                    </View>
                    <View style={Styles.ContainerButton}>
                        <Picker selectedValue={produto.idCategoria}
                            onValueChange={itemValue => setProduto({ ...produto, idCategoria: itemValue })} >
                            {categorias.map(c => {
                                return <Picker.Item key={c.id} label={c.nome} value={c.id} />
                            })}
                        </Picker>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default Atualizar;
