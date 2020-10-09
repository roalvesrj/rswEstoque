<<<<<<< HEAD
import React, { useState } from 'react';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> main
import {
    View,
    Image,
    TextInput,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
<<<<<<< HEAD
//import ProdutoService from '../../api/produto';

//import Alert from "react-bootstrap/Alert";

const ProdCadastrar = () => {
  /*const [produto, setProduto] = useState();
  const [show, setShow] = useState(false);
  const [variant, setVariant] = useState('');
  const [dataFabricacao, setDataFabricacao] = useState('');
  const [descricao, setDescricao] = useState('');
  const [fotoLink, setFotoLink] = useState('');
  const [nome, setNome] = useState('');
  const [nomeCategoria, setNomeCategoria] = useState('');
  const [nomeFuncionario, setNomeFuncionario] = useState('');
  const [qtdEstoque, setQtdEstoque] = useState('');
  const [valor, setValor] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      dataFabricacao: produto.dataFabricacao,
      descricao: produto.descricao,
      fotoLink: produto.fotoLink,
      id: 0,
      idCategoria: 0,
      idFuncionario: 1,
      nome: produto.nome,
      nomeCategoria: produto.nomeCategoria,
      nomeFuncionario: produto.nomeFuncionario,
      qtdEstoque: produto.qtdEstoque,
      valor: produto.valor,
    };

    ProdutoService.incluir(data)
      .then((response) => {
        if (response.status === 201) {
          setVariant('success');
          setMensagem('Produto criado com sucesso!');
          setShow(true);
        }
      })
      .catch((error) => {
        setVariant('danger');
        setMensagem('Erro ao cadastrar!');
        setShow(true);
      });

    setTimeout(() => {
      setShow(false);
    }, 4000);

    console.log(data);

    setProduto('');
    setDataFabricacao('');
    setDescricao('');
    setFotoLink('');
    setNome('');
    setNomeCategoria('');
    setNomeFuncionario('');
    setQtdEstoque('');
    setValor('');
  };*/
  
  return (
    <>
      <Header />
      <ScrollView>
        <View style={Styles.Container}>
          <View style={Styles.ContainerImage}>
            <Image style={Styles.Image} />
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
                <TextInput style={Styles.Input} placeholder="fotoLink" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="idCategoria" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="idFuncionario" />
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
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="nomeCategoria" />
              </View>
            </TouchableHighlight>
          </View>
          <View style={Styles.ContainerButton}>
            <TouchableHighlight>
              <View>
                <TextInput style={Styles.Input} placeholder="nomeFuncionario" />
              </View>
            </TouchableHighlight>
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
      <Footer />
    </>
  );
=======
import { Picker } from '@react-native-community/picker';
import serviceCategoria from '../../api/categoria';
import serviceProduto from '../../api/produto';

import Styles from './Style';

const ProdCadastrar = ({ navigation }) => {
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
                        <Image style={Styles.Image} />
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
>>>>>>> main
};

export default ProdCadastrar;
