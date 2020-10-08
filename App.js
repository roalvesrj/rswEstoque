import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/components/Login/Login';
import Home from './src/components/Home/Home';

import ProdListar from './src/components/Produto/Listar';
import ProdCadastrar from './src/components/ProdCadastrar/Cadastrar';
import ViewPhotos from './src/components/ImagePick/ViewPhotos';
import CatListar from './src/components/Categoria/Listar';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProdCadastrar" component={ProdCadastrar} />
        <Stack.Screen name="ViewPhotos" component={ViewPhotos} />
        <Stack.Screen name="ProdListar" component={ProdListar} />
        <Stack.Screen name="CatListar" component={CatListar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
