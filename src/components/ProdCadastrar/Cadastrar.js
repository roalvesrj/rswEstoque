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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name)

    setProduto({ ...produto, [name]: value })
    if(name == "nome")
    {setNome(value)}
    else {setDescricao(value)}
    
   
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
              <TextInput name="dataFabricacao" value={dataFabricacao} onChange={e => handleInputChange(e)}
                style={Styles.Input}
                placeholder="Data de fabricação"
              />
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput name="descricao" value={descricao} onChange={e => handleInputChange(e)} 
                style={Styles.Input} placeholder="descricao" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput name="nome" value={nome} onChange={e => handleInputChange(e)}
                style={Styles.Input} placeholder="nome" />
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
                <TextInput name="qtdEstoque" value={qtdEstoque} onChange={e => handleInputChange(e)}
                style={Styles.Input} placeholder="qtdEstoque" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput name="valor" value={valor} onChange={e => handleInputChange(e)}
                style={Styles.Input} placeholder="valor R$" />
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
