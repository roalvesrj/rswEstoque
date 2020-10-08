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


const ProdCadastrar = () => {

  const [categorias, setCategorias] = useState([]);

  const [produto, setProduto] = useState({
    dataFabricacao: "2019-10-01T00:00:00Z",
    descricao: "",
    fotoLink: "",
    id: 0,
    idCategoria: 0,
    idFuncionario: 1,
    nome: "",
    nomeCategoria: "",
    nomeFuncionario: "",
    qtdEstoque: 0,
    valor: 0,
  });

  useEffect(() => {
    const handleListCategorias = async () => {
      try {
        const response = await api.get("/categoria");
        const list = response.data;
        const namesList = [];
        list.forEach((item) => {
          namesList.push(item);
        });
        setCategorias(namesList);
      } catch (error) {
        alert("Erro no acesso a API");
      }
    };
    handleListCategorias();
  }, []);

  const handleAddProduct = async () => {
    try {
      await api.post("/produto", produto);
    } catch (error) {
      alert("Erro no acesso a API");
    }
  };


  return (
    <>
      <Header />
      <ScrollView>
        <View style={Styles.Container}>
          <View style={Styles.ContainerImage}>
            <Image style={Styles.Image}/>
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
};

export default ProdCadastrar;
