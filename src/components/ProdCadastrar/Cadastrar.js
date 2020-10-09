import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Text,
} from 'react-native';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {Picker} from '@react-native-community/picker';
import ImagePick from '../ImagePick/ImagePick';
import serviceCategoria from '../../api/categoria';
import serviceProduto from '../../api/produto';

import Styles from './Style';

const ProdCadastrar = ({navigation}) => {
  const [url, setUrl] = useState('');
  const [categorias, setCategorias] = useState([]);
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [nome, setNome] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [valor, setValor] = useState('');
  const [idCategoria, setIdCategoria] = useState('');

  const handleCadastrar = () => {
    let data = {
      dataFabricacao: '',
      idCategoria: idCategoria,
      descricao: descricao,
      nome: nome,
      idFuncionario: 3,
      qtdEstoque: qtdEstoque,
      valor: valor,
      fotoLink: url,
    };

    console.log(data);

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
                onChangeText={(value) => setDataFabricacao(value)}
                style={Styles.Input}
                placeholder="Data de fabricação"
              />
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setDescricao(value)}
                  style={Styles.Input}
                  placeholder="descricao"
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setNome(value)}
                  style={Styles.Input}
                  placeholder="nome"
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <Picker
              selectedValue={idCategoria}
              onValueChange={(itemValue) => setIdCategoria(itemValue)}>
              {categorias.map((c) => {
                return <Picker.Item key={c.id} label={c.nome} value={c.id} />;
              })}
            </Picker>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setQtdEstoque(value)}
                  style={Styles.Input}
                  placeholder="qtdEstoque"
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput
                  onChangeText={(value) => setValor(value)}
                  style={Styles.Input}
                  placeholder="valor R$"
                />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButtonCadastrar}>
            <TouchableHighlight style={Styles.Button} onPress={handleCadastrar}>
              <Text style={Styles.ButtonText}>Cadastrar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </>
  );
};

export default ProdCadastrar;
