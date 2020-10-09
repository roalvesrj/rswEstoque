import React, {useState, useEffect} from 'react';
import {View, TextInput, TouchableHighlight, ScrollView} from 'react-native';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Picker} from '@react-native-community/picker';
import ImagePick from '../ImagePick/ImagePick';
import serviceCategoria from '../../api/categoria';
import serviceProduto from '../../api/produto';
import ButtonCadastrar from '../Form/ButtonCadastrar';

import Styles from './Style';

const ProdCadastrar = ({navigation}) => {
  const [url, setUrl] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [produto, setProduto] = useState();
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [valor, setValor] = useState('');

  const handleCadastrar = (event) => {
    event.preventDefault();
    let data = {
      dataFabricacao: produto.dataFabricacao,
      descricao: produto.descricao,
      nome: produto.nome,
      qtdEstoque: produto.qtdEstoque,
      valor: produto.valor,
    };

    serviceProduto
      .incluir(data)
      .then((response) => {
        if (response.status === 201) {
          alert('Produto cadastrado com sucesso!');
        }
      })
      .catch((error) => {
        alert('Erro ao cadastrar!');
      });

    console.log(data);

    setProduto('');
    setDataFabricacao('');
    setDescricao('');
    setNome('');
    setQtdEstoque('');
    setValor('');
  };

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
                value={dataFabricacao}
                placeholder="Data de fabricação"
              />
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="descricao" value={descricao}/>
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="nome" value={nome}/>
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
                <TextInput style={Styles.Input} placeholder="qtdEstoque" value={qtdEstoque}/>
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="valor R$" value={valor}/>
              </View>
            </TouchableHighlight>
          </View>
          <ButtonCadastrar onPress={handleCadastrar} />
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default ProdCadastrar;
