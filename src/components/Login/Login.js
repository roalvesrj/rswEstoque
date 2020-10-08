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
                    underlayColor="#fff"
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
                            <View style={Styles.modalHeader}>
                                <Text style={Styles.destaqueStyle}>Faça o Login</Text>
                                <View style={Styles.modalSub}>
                                    <TouchableHighlight
                                        style={Styles.closeButton}
                                        underlayColor="#fff"
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
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
                                        navigation.navigate('Home', setModalVisible(!modalVisible))
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
            </View>
        </ScrollView>
    );
};

export default Login;
