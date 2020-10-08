import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import ListarProdutoPorCategoria from '../ScrollViewCategorias/ScrollViewCategorias';
import ImagePick from '../ImagePick/ImagePick';

import Styles from './Style';

const Home = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <ListarProdutoPorCategoria />
      </ScrollView>
      <Footer />
    </>
  );
};

export default Home;
