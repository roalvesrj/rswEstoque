import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import serviceCategoria from '../../api/categoria';
import serviceProduto from '../../api/produto';

import styles from './Style';

const ScrollViewCategorias = () => {
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
      items.push({idCategoria: c.id, nomeCategoria: c.nome, produtos: prods});
      prods = [];
    });

    return items.filter((e) => e.produtos.length > 0);
  }, []);

  return (
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
                <Image
                  style={styles.capa}
                  source={{uri: p.url}}
                  defaultSource={require('./../../../assets/images/capa03.png')}
                />
                <Text style={styles.destaqueCapas}>{p.nomeProduto}</Text>
                <Text style={styles.textoCapas}> Estoque: {p.qtdEstoque}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

export default ScrollViewCategorias;
