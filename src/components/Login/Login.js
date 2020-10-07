import React, { useState, Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Alert,
    Modal,
    TextInput,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Styles from './Style';

const Login = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={Styles.scroll}>
            <View style={Styles.container}>
                <Image
                    style={Styles.image}
                    source={require('./../../../assets/images/deal-logo.png')}
                />
                <Text style={Styles.destaque}>
                    Giro de estoque, Inventário, Curva ABC e Gestão eficiente
                </Text>
                <Text style={Styles.descricao}>
                    Faça login para equilibrar suas compras, armazenagem e entregas
                </Text>
                <TouchableHighlight
                    style={Styles.button}
                    underlayColor="#feec90"
                    onPress={() => {
                        setModalVisible(true);
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="login" style={Styles.icon} />
                        <Text style={Styles.buttonTexto}>FAZER LOGIN</Text>
                    </View>
                </TouchableHighlight>
                <Text style={Styles.link}>ESQUECI MINHA SENHA</Text>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={Styles.centeredView}>
                        <View style={Styles.modalView}>
                            <View
                                style={{ alignContent: 'space-between', flexDirection: 'row' }}>
                                <View>
                                    <Text>Faça o Login</Text>
                                </View>
                                <View>
                                    <TouchableHighlight
                                        style={Styles.openButton}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}>
                                        <Icon name="close" style={Styles.icon} />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <TextInput
                                style={{
                                    height: 40,
                                    marginBottom: 10,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                }}
                            />
                            <TextInput
                                style={{
                                    height: 40,
                                    marginBottom: 10,
                                    borderColor: 'gray',
                                    borderWidth: 1,
                                }}
                                secureTextEntry={true}
                            />

                            <TouchableHighlight
                                style={Styles.button}
                                underlayColor="#feec90"
                                onPress={() =>
                                    navigation.navigate('Home', setModalVisible(!modalVisible))
                                }>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="login" style={Styles.icon} />
                                    <Text style={Styles.buttonTexto}>ACESSAR</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default Login;
