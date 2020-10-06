import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import Styles from './Style';

const Home = () => {
    return (
        <>
            <Header />
            <ScrollView>
                <View style={Styles.container}>
                    <Text style={Styles.destaque}>Mixtapes criadas para você</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.containerCapas}>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa03.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Mix de descobertas</Text>
                            <Text style={Styles.textoCapas}>Atualizada toda quarta</Text>
                        </View>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa07.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Gostei</Text>
                            <Text style={Styles.textoCapas}>Playlist automática</Text>
                        </View>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa01.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Mix de lançamentos</Text>
                            <Text style={Styles.textoCapas}>Atualizada recentemente</Text>
                        </View>
                    </ScrollView>
                    <Text style={Styles.destaque}>Gás para treinar</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.containerCapas}>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa06.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Na pressão</Text>
                            <Text style={Styles.textoCapas}>Single • Xand Avião</Text>
                        </View>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa09.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Correndo com classic rock</Text>
                            <Text style={Styles.textoCapas}>Playlist • Youtube Music</Text>
                        </View>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa02.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Se ferrou</Text>
                            <Text style={Styles.textoCapas}>Single • Dennis DJ e MC Kevinho</Text>
                        </View>
                    </ScrollView>
                    <Text style={Styles.destaque}>Hits de hoje</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={Styles.containerCapas}>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa04.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Seu mix</Text>
                            <Text style={Styles.textoCapas}>Música personalizada</Text>
                        </View>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa05.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Song Machine Episode 7</Text>
                            <Text style={Styles.textoCapas}>EP • Gorillaz</Text>
                        </View>
                        <View style={Styles.boxCapa}>
                            <Image
                                style={Styles.capa}
                                source={require('./../../../assets/images/capa08.png')}
                            />
                            <Text style={Styles.destaqueCapas}>Fica melhor com rock</Text>
                            <Text style={Styles.textoCapas}>Playlist • Youtube Music</Text>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <Footer />
        </>
    );
};

export default Home;