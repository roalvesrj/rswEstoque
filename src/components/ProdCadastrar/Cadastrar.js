import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Picker } from '@react-native-community/picker';
import serviceCategoria from '../../api/categoria';
import serviceProduto from '../../api/produto';
import ImagePick from '../ImagePick/ImagePick';
import Styles from './Style';

const ProdCadastrar = ({ navigation }) => {
    const [url, setUrl] = useState('');
    const [categorias, setCategorias] = useState([]);
    const [produto, setProduto] = useState();

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
                <View style={Styles.Container}>
                    <View style={Styles.ContainerImage}>
                        <ImagePick navigation={navigation} url={setUrl} />
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TouchableHighlight>
                            <TextInput
                                style={Styles.Input}
                                placeholder="Data de fabricação"
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TouchableHighlight>
                            <View>
                                <TextInput style={Styles.Input} placeholder="descricao" />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TouchableHighlight>
                            <View>
                                <TextInput style={Styles.Input} placeholder="nome" />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.ContainerButton}>
                        <Picker>
                            {categorias.map((c, index) => (
                                <Picker.Item key={index} label={c.nome} value={c.id} />
                            ))}
                        </Picker>
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TouchableHighlight>
                            <View>
                                <TextInput style={Styles.Input} placeholder="qtdEstoque" />
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={Styles.ContainerButton}>
                        <TouchableHighlight>
                            <View>
                                <TextInput style={Styles.Input} placeholder="valor R$" />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation} />
        </>
    );
};

export default ProdCadastrar;
