import React from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';



const ProdCadastrar = ({navigation}) => {
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
