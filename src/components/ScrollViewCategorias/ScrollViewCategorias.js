import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ActionSheet, Root } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

import serviceCategoria from '../../api/categoria';
import serviceProduto from '../../api/produto';
import CustomImage from './CustomImage';
import styles from './Style';

const ScrollViewCategorias = ({ navigation }) => {
    const [categorias, setCategorias] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [objtoProdutoCategoria, setObjtoProdutoCategoria] = useState([]);

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
            .listarTodos()
            .then((response) => {
                setProdutos(response.data);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        setObjtoProdutoCategoria(produtoPorCategoria(produtos, categorias));
    }, [produtos, categorias, produtoPorCategoria]);

    const produtoPorCategoria = useCallback((_prods, _cats) => {
        var items = [];
        var prods = [];

        _cats.forEach((c) => {
            _prods.forEach((p, index) => {
                if (p.idCategoria === c.id) {
                    prods[index] = {
                        idProduto: p.id,
                        nomeProduto: p.nome,
                        qtdEstoque: p.qtdEstoque,
                        url: p.fotoLink,
                    };
                }
            });
            items.push({ idCategoria: c.id, nomeCategoria: c.nome, produtos: prods });
            prods = [];
        });

        return items.filter((e) => e.produtos.length > 0);
    }, []);


    const handleSelectImage = (produto) => {
        const buttons = [
            { text: 'Atualizar', icon: 'aperture', iconColor: '#ea943b' },
            { text: 'Remover', icon: 'trash', iconColor: '#fa213b' },
        ];
        ActionSheet.show(
            {
                options: buttons,
                cancelButtonIndex: 2,
            },
            (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        navigation.navigate('ProdAtualizar', { produtoID: produto });
                        break;
                    case 1:
                        handleDelete(produto);
                        break;
                    default:
                        break;
                }
            },
        );
    };

    const handleDelete = (id) => {
            serviceProduto
                .deletar(id)
                .then((response) => {
                    alert('Produto removido com sucesso!');
                    navigation.replace('Home');
                })
                .catch((error) => alert('Erro ao deletar'));
    };

    return (
        <Root>
            <View style={styles.container}>
                {objtoProdutoCategoria.map((c, index) => (
                    <View key={index}>
                        <Text style={styles.destaque}>{c.nomeCategoria}</Text>
                        <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            style={styles.containerCapas}>
                            {c.produtos.map((p, i) => (
                                <View key={i} style={styles.boxCapa}>
                                    <TouchableOpacity
                                        onPress={() => handleSelectImage(p.idProduto)}
                                    >
                                        <View>
                                            <CustomImage imageuri={p.url} />
                                            <Text style={styles.destaqueCapas}>{p.nomeProduto}</Text>
                                            <Text style={styles.textoCapas}> Estoque: {p.qtdEstoque}</Text>
                                            <Text style={styles.textoCapas}> ID: {p.idProduto}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                ))}
            </View>
        </Root>
    );
};

export default ScrollViewCategorias;
