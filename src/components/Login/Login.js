import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Modal,
    TextInput,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import Styles from './Style';

const Login = ({ navigation }) => {
    const [modalLogin, setModalLogin] = useState(false);
    const [modalSenha, setModalSenha] = useState(false);

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
                    underlayColor="#fff"
                    onPress={() => {
                        setModalLogin(true);
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Icon name="login" style={Styles.icon} />
                        <Text style={Styles.buttonTexto}>FAZER LOGIN</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor="transparent"
                    onPress={() => {
                        setModalSenha(true);
                    }}>
                    <View>
                        <Text style={Styles.link}>ESQUECI MINHA SENHA</Text>
                    </View>
                </TouchableHighlight>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalLogin}
                    onRequestClose={() => {
                        setModalLogin(!modalLogin);
                    }}>
                    <View style={Styles.centeredView}>
                        <View style={Styles.modalView}>
                            <View style={Styles.modalHeader}>
                                <Text style={Styles.destaqueStyle}>Faça o Login</Text>
                                <View style={Styles.modalSub}>
                                    <TouchableHighlight
                                        style={Styles.closeButton}
                                        underlayColor="#fff"
                                        onPress={() => {
                                            setModalLogin(!modalLogin);
                                        }}>
                                        <Icon name="close" style={Styles.iconButton} />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <TextInput style={Styles.modalInput} placeholder={'Usuário'} />
                            <TextInput style={Styles.modalInput} placeholder={'Senha'} secureTextEntry={true} />

                            <View style={Styles.modalCenter}>
                                <TouchableHighlight
                                    style={Styles.button}
                                    underlayColor="#feec90"
                                    onPress={() =>
                                        navigation.navigate('Home', setModalLogin(!modalLogin))
                                    }>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Icon name="login" style={Styles.icon} />
                                        <Text style={Styles.buttonTexto}>ACESSAR</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalSenha}
                    onRequestClose={() => {
                        setModalSenha(!modalSenha);
                    }}>
                    <View style={Styles.centeredView}>
                        <View style={Styles.modalView}>
                            <View style={Styles.modalHeader}>
                                <Text style={Styles.destaqueStyle}>Recuperar senha</Text>
                                <View style={Styles.modalSub}>
                                    <TouchableHighlight
                                        style={Styles.closeButton}
                                        underlayColor="#fff"
                                        onPress={() => {
                                            setModalSenha(!modalSenha);
                                        }}>
                                        <Icon name="close" style={Styles.iconButton} />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <TextInput style={Styles.modalInput} placeholder={'Usuário'} />
                            <TextInput style={Styles.modalInput} placeholder={'Nova senha'} secureTextEntry={true} />
                            <TextInput style={Styles.modalInput} placeholder={'Repita a senha'} secureTextEntry={true} />

                            <View style={Styles.modalCenter}>
                                <TouchableHighlight
                                    style={Styles.button}
                                    underlayColor="#feec90"
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <IconFA5 name="key" style={Styles.icon} />
                                        <Text style={Styles.buttonTexto}>RECUPERAR</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default Login;
